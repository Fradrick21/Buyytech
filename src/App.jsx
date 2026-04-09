import "./App.css";
import Footer from "./Components/Footer";
import MainNavbar from "./Components/MainNavbar";
import MenuNavbar from "./Components/MenuNavbar";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product_details from "./Pages/Product_details";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Product_page from "./Pages/Product_page";
import { Toaster } from "react-hot-toast";
import ShowOfferToast from "./Components/showOfferToast";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Navbar */}
      <Navbar></Navbar>
      <MainNavbar></MainNavbar>
      <MenuNavbar></MenuNavbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product_page />}></Route>
        <Route path="/product_details" element={<Product_details />}></Route>
        <Route path="/cart_page" element={<CartPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>

      <Toaster position="bottom-right" />
      <ShowOfferToast />

      {/* Footer */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
