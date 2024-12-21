import React from "react";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./layout/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import BuyNew from "./layout/BuyNew";
import SellCar from "./layout/SellCar";

function App() {
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
