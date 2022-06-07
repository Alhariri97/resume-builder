import { useState } from "react";

import CreateContact from "./CreateContact";
import CreateEducation from "./CreateEducation";
import CreateEducationView from "./CreateEducationView";
import CreateWork from "./CreateWork";
import CreateWorkView from "./CreateWrokView";
import CreateSkills from "./CreateSkills";
import CreateSummary from "./CreateSummary";
import CreateFinal from "./CreateFinal";

import React from "react";

function CreaeteMain() {
  const [showContact, setShowContact] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showEducationView, setShowEducationView] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showWrokView, setShowWorkView] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [fetchError, setfetchError] = useState(null);
  const [perosnID] = useState(Date.now());

  //
  const API_URL = "http://localhost:3500/people";

  return (
    <div>
      {fetchError && <p>{`Opps Error: ${fetchError}`}</p>}
      {showContact ? (
        <CreateContact
          setShowEducation={setShowEducation}
          setShowContact={setShowContact}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showEducation ? (
        <CreateEducation
          setShowEducation={setShowEducation}
          setShowEducationView={setShowEducationView}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showEducationView ? (
        <CreateEducationView
          setShowEducation={setShowEducation}
          setShowEducationView={setShowEducationView}
          setShowWork={setShowWork}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showWork ? (
        <CreateWork
          setShowWork={setShowWork}
          setShowWorkView={setShowWorkView}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showWrokView ? (
        <CreateWorkView
          setShowWork={setShowWork}
          setShowWorkView={setShowWorkView}
          setShowSkills={setShowSkills}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showSkills ? (
        <CreateSkills
          setShowSkills={setShowSkills}
          setShowSummary={setShowSummary}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showSummary ? (
        <CreateSummary
          setShowSummary={setShowSummary}
          setShowFinal={setShowFinal}
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : showFinal ? (
        <CreateFinal
          setfetchError={setfetchError}
          perosnID={perosnID}
          API_URL={API_URL}
        />
      ) : (
        <div>Refresh the page</div>
      )}
    </div>
  );
}

export default CreaeteMain;
