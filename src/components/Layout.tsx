import type { ReactNode } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Content layer */}
      <div className="relative content-layer-bg">
        <div className="curved-streak-left"></div>
        <div className="relative z-10">
          <Header />
          <Banner />
        </div>
      </div>
      {/* Main content */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
