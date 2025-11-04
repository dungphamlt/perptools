import type { ReactNode } from "react";
import Header from "./Header";
import Banner from "./Banner";
import PerpToolsHeader from "../assets/perptools-header.svg";
import Footer from "./Footer";
import Section1 from "./Section1";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header and Banner section with gradient corners */}
      <div className="relative">
        {/* Dotted pattern overlay on top */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PerpToolsHeader})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
          }}
        />

        {/* Content layer */}
        <div className="relative z-10">
          <Header />
          <Banner />
          <Section1 />
        </div>
      </div>

      {/* Main content */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
