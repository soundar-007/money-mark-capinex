import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";
import CustomPrimeReactProvider from "@/providers/CustomPrimeReactProvider";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRM Application",
  description: "Version 2",
};

import { MyProvider } from "../context/MyContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased overflow-y-auto`}>
        {" "}
        <MyProvider>
          <CustomPrimeReactProvider>
            {children}
          </CustomPrimeReactProvider>
        </MyProvider>
      </body>
    </html>
  );
}
