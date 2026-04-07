import "./App.css";
import Footer from "./Components/Footer";
import MainNavbar from "./Components/MainNavbar";
import MenuNavbar from "./Components/MenuNavbar";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product_details from "./Pages/Product_details";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

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
        <Route path="/product" element={<Product_details/>}></Route>
      </Routes>
      </BrowserRouter>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
