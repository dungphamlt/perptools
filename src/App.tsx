import { Routes, Route, useLocation } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import PageLayout from "./components/layouts/PageLayout";
import Home from "./pages/Home";
import NftSale from "./pages/NftSale";

function App() {
  const location = useLocation();
  const Layout = location.pathname === "/" ? HomeLayout : PageLayout;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-sale" element={<NftSale />} />
        <Route path="/ai-agent" element={<div>AI Agent Page</div>} />
        <Route path="/roadmap" element={<div>Roadmap Page</div>} />
        <Route path="/social" element={<div>Social Page</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
