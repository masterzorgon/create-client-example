import { Providers } from "./providers";
import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";

import "@/styles/globals.css";
require('@solana/wallet-adapter-react-ui/styles.css');

export const metadata: Metadata = {
  title: "Wallet Adapter For Next.js 14 Tutorial by Helius",
  description: "A example repo for how to integrate the Solana Wallet Adapter for Next.js 14 apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="">
            <NavBar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
