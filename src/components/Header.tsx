import { useState } from "react";
import Logo from "../assets/icons/logo.svg?react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation().pathname;

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
    {
      label: "Social",
      href: "/social",
    },
  ];

  return (
    <header className="relative border-b border-primary/40">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 md:w-12 md:h-12" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              PerpTools
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-lg bg-primary/10">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <span
                  className={` hover:text-primary transition-colors font-medium ${
                    pathname === item.href ? "text-primary" : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Launch App Button */}
          <div className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-b from-[#2BB9F3] to-[#83D4FB] text-black font-medium hover:bg-gradient-to-b hover:from-primary hover:to-primary transition-all duration-300 cursor-pointer hover:scale-105">
              <span>
                {pathname === "/nft-sale" ? "Connect Wallet" : "Launch App"}
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-white text-black font-medium hover:bg-primary transition-colors cursor-pointer">
              <span className="text-sm">Launch App</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-white hover:text-primary transition-colors font-medium block py-2">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
