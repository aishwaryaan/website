import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import Footer from "./components/Footer";
import Tech from "./pages/Tech";
import Design from "./pages/Design";
import Beyond from "./pages/Beyond";

export default function App() {
  const [page, setPage] = useState("tech");

  useEffect(() => {
    document.body.className = `${page}-theme`;
  }, [page]);

  const renderPage = () => {
    if (page === "tech") return <Tech />;
    if (page === "design") return <Design />;
    return <Beyond />;
  };

  return (
    <>
      <Navbar page={page} />
      <SubNav page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
}