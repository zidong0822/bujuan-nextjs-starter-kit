import Image from "next/image";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-gray-800/30 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-[#FBD86F] p-1.5 rounded">
              <Image
                src="/logo.png"
                alt="ShipFast Logo"
                width={24}
                height={24}
                className="dark:invert"
              />
            </div>
            <span className="ml-2.5 text-base font-semibold">ShipFast</span>
          </div>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/pricing"
              className="text-sm text-gray-300 hover:text-[#FBD86F] transition-colors"
            >
              Pricing
            </a>
            <a
              href="/demo"
              className="text-sm text-gray-300 hover:text-[#FBD86F] transition-colors"
            >
              Demo
            </a>
            <a
              href="/wall-of-love"
              className="text-sm text-gray-300 hover:text-[#FBD86F] transition-colors"
            >
              Wall of love
            </a>
            <div className="bg-[#1A1A1A] px-4 py-1.5 rounded-full flex items-center gap-2 text-sm border border-gray-800/30">
              <span className="text-gray-400">Press</span>
              <kbd className="bg-[#2A2A2A] px-2 py-0.5 rounded text-gray-400">
                L
              </kbd>
              <span className="text-gray-400">to see the Leaderboards</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 