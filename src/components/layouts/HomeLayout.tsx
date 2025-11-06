import type { ReactNode } from "react";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Content layer với Banner cho Home */}
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

export default HomeLayout;
