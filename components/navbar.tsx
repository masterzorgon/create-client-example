"use client";

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import heliusLogo from "../public/heliusLogo.svg";

export function NavBar() {
  return (
    <Navbar className="w-screen bg-transparent">
      <Image src={heliusLogo} alt="Solana Logo" width={40} className="" />
      <NavbarContent justify="end">
        <Tooltip placeholder="bottom" content="Connect Wallet">
          <NavbarItem>
              <WalletMultiButton />
          </NavbarItem>
        </Tooltip>
      </NavbarContent>
    </Navbar>
  );
}
