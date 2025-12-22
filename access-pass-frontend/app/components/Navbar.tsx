"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
    return (
      <nav className="w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            🔐 Access Pass
          </h1>
  
          <ConnectButton />
        </div>
      </nav>
    );
  }
  