import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Education from "./components/Education";
import EducationView from "./components/EducationView";
import Work from "./components/Work";
import WorkView from "./components/WrokView";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Final from "./components/Final";
import LandPage from "./components/LandPage";

// const fs = require("fs");

function App() {
  // show and hide component
  const [show, setShow] = useState(true);
  // let show = true;
  const href = window.location.href.split("/");
  useEffect(() => {
    if (href.includes("create")) {
      setShow(false);
    }
  }, [href]);

  const [person, setPerson] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        {show ? <Header /> : <></>}
        <Routes>
          <Route
            path="/create/contact"
            element={<Contact onChange={(value) => setPerson({ value })} />}
          />
          <Route
            path="/create/education"
            element={<Education person={person} setPerson={setPerson} />}
          />
          <Route path="/create/education-view" element={<EducationView />} />
          <Route path="/create/work" element={<Work />} />
          <Route path="/create/work-view" element={<WorkView />} />
          <Route path="/create/skills" element={<Skills />} />
          <Route path="/create/summary" element={<Summary />} />
          <Route path="/create/final" element={<Final />} />
          <Route path="/" element={<LandPage />} />
        </Routes>
        {show ? <Footer /> : <></>}
      </div>
    </BrowserRouter>
  );
}

export default App;
