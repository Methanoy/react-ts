import { ProductsPage } from "../src/pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
