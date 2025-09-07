import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";
import { ReactQueryProvider, CustomPrimeReactProvider } from "@/providers";
import { Toaster } from "react-hot-toast";
import { MyProvider } from "../context/MyContext";
import { AuthProvider } from "../context/AuthContext";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRM Application",
  description: "Version 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased overflow-y-auto`}>
        {" "}
        <MyProvider>
          <ReactQueryProvider>
            <AuthProvider>
              <CustomPrimeReactProvider>{children}</CustomPrimeReactProvider>
            </AuthProvider>
          </ReactQueryProvider>
        </MyProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
