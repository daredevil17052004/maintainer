import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@magiclabs/ui";

const inter = Inter({ subsets: ["latin"] });

const mont = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mont.className}`}>
          {children}

      </body> 
    </html>
  );
}
