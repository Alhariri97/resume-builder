import { useState } from "react";
import apiRequest from "../../apiRequest";

const EducationView = ({
  setShowEducation,
  setShowEducationView,
  setShowWork,
  API_URL,
  perosnID,
  setfetchError,
}) => {
  if (!localStorage.getItem("edu")) {
    localStorage.setItem("deu", JSON.stringify([]));
  }
  const [edu, setEdu] = useState(JSON.parse(localStorage.getItem("edu")));
  const addMore = () => {
    setShowEducation(true);
    setShowEducationView(false);
  };
  const go = () => {
    setShowWork(true);
    setShowEducationView(false);
  };
  const delet = async (e) => {
    const id = e.target.id;
    console.log(typeof id);
    let update = edu.filter((ele) => ele.id.toString() !== id);
    console.log(edu, "original");
    console.log(update, "updated");
    setEdu(update);
    window.localStorage.setItem("edu", JSON.stringify(update));
    //
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ edu: [update] }),
    };
    console.log(edu);
    const reqUrl = `${API_URL}/${perosnID}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setfetchError(result);
    //
  };

  return (
    <div id="edu-view">
      {edu.length ? (
        <ul>
          {edu.map((qual) => {
            return (
              <li key={qual.id}>
                <h5>{qual.name}</h5>
                <p>{qual.quali}</p>
                <p>{qual.city}</p>
                <p>{qual.data}</p>
                <span id={qual.id} className="del" onClick={delet}>
                  Delet
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4> You have not added any qualificaiton yet </h4>
      )}
      <button className="add" onClick={() => addMore()}>
        Add Qualifications
      </button>
      <button className="next" onClick={() => go()}>
        Next: Work History
      </button>
    </div>
  );
};

export default EducationView;
