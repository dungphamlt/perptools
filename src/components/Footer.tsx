import Logo from "../assets/icons/logo.svg?react";
import DiscordIcon from "../assets/icons/discord.svg?react";
import TwitterIcon from "../assets/icons/twitter.svg?react";
import { Link } from "react-router-dom";
function Footer() {
  const navItems = [
    {
      label: "NFT Sale",
      href: "/nft-sale",
    },
    {
      label: "AI Agent",
      href: "/ai-agent",
    },
    {
      label: "Roadmap",
      href: "/roadmap",
    },
  ];
  return (
    <footer className="bg-[#0E1215]">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-3/5">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14 text-primary" />
              <h2 className="text-2xl font-bold text-primary">PerpTools</h2>
            </div>
            <p className="text-gray-300 pt-6">
              ApeX Protocol is shaping a free and open ecosystem for all users
              to grow their wealth in a safe and trusted environment.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center gap-4">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  <span className="text-primary hover:underline transition-colors font-medium">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-4">
              <button className="bg-[#009DFF1A] text-white/80 hover:text-white transition-all duration-300 px-8 py-3 rounded-md flex items-center gap-2 hover:scale-105">
                <TwitterIcon className="w-5 h-5" />
                <span className="font-medium">Twitter</span>
              </button>
              <button className="bg-[#009DFF1A] text-white/80 hover:text-white transition-all duration-300 px-8 py-3 rounded-md flex items-center gap-2 hover:scale-105">
                <DiscordIcon className="w-5 h-5" />
                <span className="font-medium">Discord</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto flex justify-between items-center text-gray-400 text-sm">
          <span> © 2025 </span>
          <span>Perptools Protocol. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
