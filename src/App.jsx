import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import Footer from "./components/Footer";
import Tech from "./pages/Tech";
import Design from "./pages/Design";
import Beyond from "./pages/Beyond";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("design")) {
      document.body.className = "design-theme";
    } else if (location.pathname.includes("beyond")) {
      document.body.className = "beyond-theme";
    } else {
      document.body.className = "tech-theme";
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <SubNav />

      <Routes>
        <Route path="/" element={<Navigate to="/tech" />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/design" element={<Design />} />
        <Route path="/beyond" element={<Beyond />} />
      </Routes>

      <Footer />
    </>
  );
}