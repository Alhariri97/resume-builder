import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

//
import Header from "./components/Header";
import Footer from "./components/Footer";
//
import LandPage from "./components/LandPage";
import Work from "./Work";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import CreaeteMain from "./components/create/CreaeteMain";
function App() {
  // show and hide component
  const [show, setShow] = useState(true);
  const href = window.location.href.split("/");
  useEffect(() => {
    if (href.includes("create")) {
      setShow(false);
    }
  }, [href]);

  return (
    <BrowserRouter>
      <div className="App">
        {show ? <Header /> : <></>}
        <Routes>
          <Route path="/create" element={<CreaeteMain />} />
          <Route path="/" element={<LandPage />} />
          <Route path="/other" element={<Work />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/featuers" element={<Features />} />
        </Routes>
        {show ? <Footer /> : <></>}
      </div>
    </BrowserRouter>
  );
}

export default App;
