import "./App.css";
import Footer from "./Components/Footer";
import MainNavbar from "./Components/MainNavbar";
import MenuNavbar from "./Components/MenuNavbar";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product_details from "./Pages/Product_details";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product_page from "./Pages/Product_page";
import { Toaster } from "react-hot-toast";
import ShowOfferToast from "./Components/showOfferToast";


function App() {
  return (
    <>
    {/* Navbar */}
      <Navbar></Navbar> 
      <MainNavbar></MainNavbar>
      <MenuNavbar></MenuNavbar>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product_page/>}></Route>
        <Route path="/product_details" element={<Product_details/>}></Route>
      </Routes>
      </BrowserRouter>

      <Toaster position="bottom-right" />
      <ShowOfferToast />

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
