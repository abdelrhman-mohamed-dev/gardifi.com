/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { SidebarLayout } from "@/components/SidebarLayout";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";

const myFontRegular = localFont({
  src: './fonts/SomarRounded-Regular.ttf',
  weight: '400', // Regular weight
  style: 'normal', // Normal style
  variable: '--font-myFontRegular',
});

const myFontBold = localFont({
  src: './fonts/SomarRounded-Bold.ttf',
  weight: '700', // Bold weight
  style: 'normal', // Normal style
  variable: '--font-myFontBold',
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gardify",
  description: "gardify for protecting your ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ direction: "rtl" }}
        className={` ${myFontRegular.className} ${myFontBold.className} antialiased`}
      >
        <AuthProvider>
          <DataProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div><Toaster /></div>
              {/* <SidebarLayout> */}
              {children}
              {/* </SidebarLayout> */}
            </ThemeProvider>
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
