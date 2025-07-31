import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import localFont from 'next/font/local'



export const metadata: Metadata = {
  title: "Flight Booking Assistant",
  description: "AI-powered flight search and booking",
};

const sfPro = localFont({
  src: [
    {
      path: '/fonts/SF-Pro-Display-Light.otf',
      weight: '300',  // Light = 300
      style: 'normal',
    },
    {
      path: '/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',  // Regular = 400
      style: 'normal',
    },
    {
      path: '/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',  // Medium = 500
      style: 'normal',
    },
    {
      path: '/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',  // Semibold = 600
      style: 'normal',
    },
    {
      path: '/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',  // Bold = 700
      style: 'normal',
    },
  ],
  variable: "--font-sf-pro",  // Best practice: Prefix with `--font-`
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased`}
      >
          {children}

      </body>
    </html>
  );
}
