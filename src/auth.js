import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from "./assets/Users";
import bcrypt from "bcryptjs";
import { dbConnect } from "./lib/mongo";
import { User } from "./model/UserModel";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: 'code',
                }
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: 'code',
                }
            }
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await getUserByEmail(credentials?.email)

                    if (user[0]) {
                        const isMatch = await bcrypt.compare(credentials?.password, user[0]?.password)
                        if (isMatch) {
                            console.log("USER", user[0])
                            return {
                                id: user[0]._id.toString(),
                                email: user[0].email,
                                name: user[0].name,
                                image: user[0].image,
                                vehicles: user[0].vehicles
                            }
                        } else {
                            throw new Error("Check your credentials");
                        }
                    } else {
                        throw new Error("User not found or missing password");
                    }
                } catch (error) {
                    console.error("Error during credential login:", error);
                    throw new Error("Login failed: " + (error.message || "Unknown error")); // Provide a specific error message
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            await dbConnect();

            try {
                let existingUser;

                if (account.provider === "google") {
                    existingUser = await User.findOne({ googleId: account.id });
                } else if (account.provider === "github") {
                    existingUser = await User.findOne({ githubId: account.id });
                } else {
                    existingUser = await User.findOne({ email: user.email });
                }

                if (!existingUser) {
                    existingUser = new User({
                        name: profile.name,
                        email: user.email,
                        image: profile.picture || "https://github.com/shadcn.png",
                        googleId: account.provider === "google" ? account.id : undefined,
                        githubId: account.provider === "github" ? account.id : undefined,
                        password:""
                    });
                    await existingUser.save();
                }

                return true;
            } catch (error) {
                console.error("Error during signIn callback:", error);
                return false;
            }
        },
        async jwt({ token, user }) {
            // Persist user data in the token
            if (user) {
                token.id = user.id;
                token.vehicles = Array.isArray(user.vehicles) ? user.vehicles : []; // Ensure vehicles is an array
            }
            return token;
        },
        async session({ session, token }) {
            // Attach user data to the session
            if (token) {
                session.user.id = token.id;
                session.user.vehicles = Array.isArray(token.vehicles) ? token.vehicles : []; // Ensure vehicles is an array
            }
            return session;
        }
    },
})
