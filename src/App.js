import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import CreateContact from "./components/CreateContact";
import CreateEducation from "./components/CreateEducation";
import CreateEducationView from "./components/CreateEducationView";
import CreateWork from "./components/CreateWork";
import CreateWorkView from "./components/CreateWrokView";
import CreateSkills from "./components/CreateSkills";
import CreateSummary from "./components/CreateSummary";
import CreateFinal from "./components/CreateFinal";
//
import Header from "./components/header";
import Footer from "./components/footer";
//
import LandPage from "./components/LandPage";

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
        </Routes>
        {show ? <Footer /> : <></>}
      </div>
    </BrowserRouter>
  );
}

export default App;
