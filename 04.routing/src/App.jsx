import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductsPage from "./pages/products-page";
import NotFound from "./pages/not found";
import ProductDetails from "./pages/product-details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;