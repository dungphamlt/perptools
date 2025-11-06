import type { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Main content */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
