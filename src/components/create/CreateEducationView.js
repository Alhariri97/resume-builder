import { useState } from "react";

const EducationView = ({
  setShowEducation,
  setShowEducationView,
  setShowWork,
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
