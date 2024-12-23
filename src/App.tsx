import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import BuyNew from "./layout/BuyNew";
import SellCar from "./layout/SellCar";
import Product from "./layout/Product";
import Clarity from "@microsoft/clarity";
const MS_CLARITY_ID = import.meta.env.VITE_MS_CLARITY_ID;
function App() {
  Clarity.init(MS_CLARITY_ID);
  console.log("MS_CLARITY_ID", MS_CLARITY_ID);
  return (
    <>
      <header className={`container`}>
        <Nav />
      </header>
      <main className={`container`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-new" element={<BuyNew />} />
          <Route path="/sell" element={<SellCar />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
      <footer style={{ marginTop: 20 }}>
        <Footer />
      </footer>
    </>
    // <>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/product/:id" element={<Product />} />
    //     </Routes>
    //   </div>
    // </>
  );
}

export default App;
