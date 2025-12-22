"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { ACCESS_PASS_ABI, ACCESS_PASS_ADDRESS } from "../src/lib/contract";

export default function Home() {


  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();

  const { data: hasAccess, isLoading } = useReadContract({
    address: ACCESS_PASS_ADDRESS,
    abi: ACCESS_PASS_ABI,
    functionName: "isHolder",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
    },
  });
  


  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-white/10 border border-white/20">
            🔐 NFT Membership Access
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Exclusive Access
            </span>{" "}
            with Your Wallet
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            This platform uses NFT-based access passes to unlock premium content,
            products, or dashboards. Own the NFT — own the access.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={openConnectModal}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Connect Wallet
            </button>
            
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">
              Learn More
            </button>
          </div>
          {/* ACCESS STATUS */}
            <div className="mt-6">
              {!isConnected && (
                <p className="text-yellow-400">
                  🔌 Connect your wallet to check access
                </p>
              )}

              {isConnected && isLoading && (
                <p className="text-gray-400">
                  Checking NFT ownership...
                </p>
              )}

              {isConnected && hasAccess === false && (
                <p className="text-red-400">
                  ❌ No Access — You don’t own the Access Pass NFT
                </p>
              )}

              {isConnected && hasAccess === true && (
                <p className="text-green-400 font-semibold">
                  ✅ Access Granted — Welcome!
                </p>
              )}
            </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
          <div className="relative border border-white/20 rounded-2xl p-8 backdrop-blur bg-white/5">
            <h3 className="text-xl font-semibold mb-4">
              How it works
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✅ Connect your wallet</li>
              <li>🔍 We check NFT ownership</li>
              <li>🚪 Access granted if you hold the pass</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
