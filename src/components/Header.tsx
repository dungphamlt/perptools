import { useState } from "react";
import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Stats",
      href: "/stats",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Community",
      href: "/community",
    },
    {
      label: "Ecosystem",
      href: "/ecosystem",
    },
  ];

  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              PerpTools
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-lg bg-primary/10">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <span className="text-white hover:text-primary transition-colors font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Launch App Button */}
          <div className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-primary transition-colors cursor-pointer">
              <span>Launch App</span>
              <ChevronRight className="w-6 h-6" />
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
