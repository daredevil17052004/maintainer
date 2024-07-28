import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from "./assets/Users";
import bcrypt from "bcryptjs";

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
                    console.log(credentials)
                    const user = await getUserByEmail(credentials?.email)
                    console.log(user[0].password)

                    if (user[0]) {
                        const isMatch = await bcrypt.compare(credentials?.password, user[0]?.password)
                        if (isMatch) {
                            console.log(user[0])
                            return {
                                id: user[0].id,
                                email: user[0].email,
                                name: user[0].name
                            };;
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
    ]
})
