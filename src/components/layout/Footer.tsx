import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  links: [
    { name: "Login", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Support", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Affiliates — Earn up to $124 per sale", href: "#" },
  ],
  legal: [
    { name: "Terms of services", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Licenses", href: "#" },
  ],
  maker: [
    { name: "Newsletter for makers", href: "#" },
    { name: "ByeDispute", href: "#" },
    { name: "IndiePage", href: "#" },
    { name: "ZenVoice", href: "#" },
    { name: "GamifyList", href: "#" },
    { name: "WorkbookPDF", href: "#" },
    { name: "HabitsGarden", href: "#" },
    { name: "PopoUp", href: "#" },
    { name: "Fake It Till You Make It", href: "#" },
    { name: "LogoFast", href: "#" },
    { name: "Logo inspiration", href: "#" },
    { name: "CodeFast", href: "#" },
    { name: "DataFast", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section with Stats Card */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 font-medium mb-4">
                <Zap className="w-5 h-5" />
                <span>ShipFast</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Ship your startup in days, not weeks
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Copyright © 2025 - All rights reserved
              </p>
              <button className="text-sm px-3 py-1.5 bg-white/5 rounded-md hover:bg-white/10">
                Built with ⚡ ShipFast
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-[#1A1A1A] rounded-lg p-4">
              <div className="mb-4">
                <h4 className="text-xs text-gray-400 mb-1">USERS IN LAST 30 MINUTES</h4>
                <div className="text-xl font-bold">67 👋</div>
              </div>
              
              <div className="h-20 mb-4">
                {/* Chart would go here - using a placeholder div */}
                <div className="w-full h-full bg-[#222] rounded" />
              </div>

              <div>
                <h4 className="text-xs text-gray-400 mb-2">COUNTRY</h4>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>🇫🇷</span>
                      <span>France</span>
                    </div>
                    <span>6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>🇮🇳</span>
                      <span>India</span>
                    </div>
                    <span>5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>United States</span>
                    </div>
                    <span>5</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500">
                  Powered by{" "}
                  <Link href="#" className="underline">
                    DataFast
                  </Link>{" "}
                  ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400">LINKS</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-[#5865F2] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#5865F2]/90">
              <Image src="/discord.svg" alt="Discord" width={20} height={20} />
              Join Us
            </button>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400">LEGAL</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maker Section */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400">
              BY THE MAKER OF SHIPFAST
            </h3>
            <ul className="space-y-3">
              {footerLinks.maker.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 