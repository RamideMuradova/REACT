import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import About from "./pages/about-page/About";
import Home from "./pages/home-page/Home";
import Products from "./pages/products/Products";
import ProductsTable from "./components/products-table/ProductsTable";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products-table" element={<ProductsTable/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
