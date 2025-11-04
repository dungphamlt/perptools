import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
function Footer() {
  const navItems = [
    [
      {
        label: "Products",
        href: "/",
      },
      {
        label: "Docs",
        href: "/docs",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Chalenglog",
        href: "/Chalenglog",
      },
    ],
    [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        href: "/cookie-policy",
      },
    ],
    [
      {
        label: "Developer",
        href: "/developer",
      },
      {
        label: "Feedback",
        href: "/feedback",
      },
      {
        label: "Reddit",
        href: "/reddit",
      },
      {
        label: "Discrod",
        href: "/discrod",
      },
    ],
    [
      {
        label: "Community",
        href: "/community",
      },
    ],
  ];
  return (
    <footer className="bg-[#0E1215]">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14 text-primary" />
              <h2 className="text-2xl font-bold text-primary">PerpTools</h2>
            </div>
            <p className="text-gray-300 pt-6">
              ApeX Protocol is shaping a free and open ecosystem for all users
              to grow their wealth in a safe and trusted environment.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-4 gap-4 md:pt-4">
            {navItems.map((group) => (
              <div key={group[0].label} className="flex flex-col gap-4">
                {group.map((item, index) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={` hover:text-primary transition-colors font-medium ${
                      index === 0
                        ? "text-primary mb-2 hover:underline"
                        : "text-gray-300 hover:text-primary hover:underline"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="text-center text-gray-300 text-sm">
          © 2025 Perptools Protocol. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
