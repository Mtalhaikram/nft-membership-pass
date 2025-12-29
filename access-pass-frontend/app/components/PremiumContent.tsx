export default function PremiumContent() {
    return (
      <div className="mt-16 max-w-5xl mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-8">
        <h2 className="text-2xl font-bold text-green-400">
          🔓 Premium Dashboard
        </h2>
  
        <p className="mt-4 text-gray-300">
          This content is only visible to NFT access pass holders.
        </p>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-black/40 p-4 border border-white/10">
            📊 Private Analytics
          </div>
          <div className="rounded-xl bg-black/40 p-4 border border-white/10">
            📁 Exclusive Files
          </div>
          <div className="rounded-xl bg-black/40 p-4 border border-white/10">
            🔐 Members-only Tools
          </div>
        </div>
      </div>
    );
  }
  