import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import CreateContact from "./components/create/CreateContact";
import CreateEducation from "./components/create/CreateEducation";
import CreateEducationView from "./components/create/CreateEducationView";
import CreateWork from "./components/create/CreateWork";
import CreateWorkView from "./components/create/CreateWrokView";
import CreateSkills from "./components/create/CreateSkills";
import CreateSummary from "./components/create/CreateSummary";
import CreateFinal from "./components/create/CreateFinal";
//
import Header from "./components/header";
import Footer from "./components/footer";
//
import LandPage from "./components/LandPage";
import Work from "./Work";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
function App() {
  // show and hide component
  const [show, setShow] = useState(true);
  const href = window.location.href.split("/");
  useEffect(() => {
    if (href.includes("create")) {
      setShow(false);
    }
  }, [href]);
  // const [person, setPerson] = useState({});
  return (
    <BrowserRouter>
      <div className="App">
        {show ? <Header /> : <></>}
        <Routes>
          <Route path="/create/contact" element={<CreateContact />} />
          <Route path="/create/education" element={<CreateEducation />} />
          <Route
            path="/create/education-view"
            element={<CreateEducationView />}
          />
          <Route path="/create/work" element={<CreateWork />} />
          <Route path="/create/work-view" element={<CreateWorkView />} />
          <Route path="/create/skills" element={<CreateSkills />} />
          <Route path="/create/summary" element={<CreateSummary />} />
          <Route path="/create/final" element={<CreateFinal />} />
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
