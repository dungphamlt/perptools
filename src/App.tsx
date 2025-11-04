import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<div>Stats Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/docs" element={<div>Docs Page</div>} />
        <Route path="/community" element={<div>Community Page</div>} />
        <Route path="/ecosystem" element={<div>Ecosystem Page</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
