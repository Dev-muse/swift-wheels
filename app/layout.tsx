import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/nextjs'

import "./globals.css";
import Navbar from '@/components/Navbar';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftWheels - Rent Vehicles Fast and Easy",
  description: "SwiftWheels offers convenient vehicle rentals for every journey. Explore our fleet and get on the road in minutes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html data-theme="corporate" lang="en">
        <body className={raleway.className}>
          <SignedIn>
            <Navbar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
