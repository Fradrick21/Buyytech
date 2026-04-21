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
import Login from "./Components/Login";
import Register from "./Components/Register";
import FAQ from "./Components/Faq";
import Myaccount from "./Pages/Myaccount";
import Wishlist from "./Components/Wishlist";
import Aboutus from "./Pages/Aboutus";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Orders from "./Components/Orders";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/myaccount" element={<Myaccount />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Routes>

      <Toaster position="bottom-right" />
      <ShowOfferToast />

      {/* Footer */}
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
