import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
function Header() {
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
    <header className=" ">
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-10 h-10 text-white" />
            <h1 className="text-2xl font-bold text-white">PerpTools</h1>
          </div>
          <nav className="flex items-center gap-6 px-6 py-2 rounded-lg bg-primary/10">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <span className="text-white hover:text-primary transition-colors font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-primary transition-colors cursor-pointer">
              <span className="">Launch App</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
