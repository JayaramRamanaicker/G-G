import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <BackToTop/>
      <Footer/>
    </div>
  );
};

export default App;
