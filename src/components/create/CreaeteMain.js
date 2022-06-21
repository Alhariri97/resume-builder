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

  //

  return (
    <div>
      {fetchError && <p>{`Opps Error: ${fetchError}`}</p>}
      {showContact ? (
        <CreateContact
          setShowEducation={setShowEducation}
          setShowContact={setShowContact}
          setfetchError={setfetchError}
        />
      ) : showEducation ? (
        <CreateEducation
          setShowEducation={setShowEducation}
          setShowEducationView={setShowEducationView}
          setfetchError={setfetchError}
        />
      ) : showEducationView ? (
        <CreateEducationView
          setShowEducation={setShowEducation}
          setShowEducationView={setShowEducationView}
          setShowWork={setShowWork}
          setfetchError={setfetchError}
        />
      ) : showWork ? (
        <CreateWork
          setShowWork={setShowWork}
          setShowWorkView={setShowWorkView}
          setfetchError={setfetchError}
        />
      ) : showWrokView ? (
        <CreateWorkView
          setShowWork={setShowWork}
          setShowWorkView={setShowWorkView}
          setShowSkills={setShowSkills}
          setfetchError={setfetchError}
        />
      ) : showSkills ? (
        <CreateSkills
          setShowSkills={setShowSkills}
          setShowSummary={setShowSummary}
          setfetchError={setfetchError}
        />
      ) : showSummary ? (
        <CreateSummary
          setShowSummary={setShowSummary}
          setShowFinal={setShowFinal}
          setfetchError={setfetchError}
        />
      ) : showFinal ? (
        <CreateFinal setfetchError={setfetchError} />
      ) : (
        <div>Refresh the page</div>
      )}
    </div>
  );
}

export default CreaeteMain;
