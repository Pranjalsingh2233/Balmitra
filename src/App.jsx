import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSchool from "./pages/aboutPage/aboutSchool";
import About from "./pages/aboutPage/About";
import AboutPrincipal from "./pages/aboutPage/AboutPrincipal";
import BalmitraWay from "./pages/aboutPage/BalmitraWay";
import Schooling from "./pages/Schooling";
import AdmissionProcess from "./pages/AdmissionProcess";
import PreeSchool from "./pages/PreeSchool";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schooling" element={<Schooling />} />
        <Route path="/preschool" element={<PreeSchool />} />
        <Route path="/admission" element={<AdmissionProcess />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/about-school" element={<AboutSchool />} />
        <Route path="/about/word-from-principal" element={<AboutPrincipal />} />
        <Route path="/about/balmitra-way" element={<BalmitraWay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
