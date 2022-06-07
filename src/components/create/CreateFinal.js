import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import Popup from "../Popup";
//component to print
// const info = JSON.parse(localStorage.getItem("info"));
// const skills = JSON.parse(localStorage.getItem("skills"));
// const edu = JSON.parse(localStorage.getItem("edu"));
// const work = JSON.parse(localStorage.getItem("work"));
// const text = JSON.parse(localStorage.getItem("text"));

const changeHeaderColor = (e) => {
  const page = document.getElementsByTagName("h3");
  [...page].forEach((ele) => (ele.style.color = e.target.value));
};
//
const changeColor = (e) => {
  const page = document.getElementsByTagName("h2");
  [...page].forEach((ele) => (ele.style.color = e.target.value));
};
//
// changeBackGround
//
const changeBackGround = (e) => {
  const header = document.getElementsByClassName("main-info");
  const border = document.getElementsByClassName("border");

  [...header, ...border].forEach(
    (ele) => (ele.style.backgroundColor = e.target.value)
  );
};
//
const changeParaColor = (e) => {
  const page = document.getElementsByTagName("li");

  [...page].forEach((ele) => (ele.style.color = e.target.value));
};
//
//
const titleSize = (e) => {
  const page = document.getElementsByTagName("h2");
  [...page].forEach((ele) => (ele.style.fontSize = e.target.value));
};
// textSize
const textSize = (e) => {
  const page = document.getElementsByTagName("li");
  [...page].forEach((ele) => (ele.style.fontSize = e.target.value));
};
//

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { perosnID, API_URL, setfetchError } = props;
  // ;;;;;;;;;
  ////////////////////////
  const [perosnData, setPerosnData] = useState({
    info: 3,
    work: 5,
    edu: 4,
    text: 3,
    skills: 2,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPerson = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/${perosnID}`);
        if (!response.ok) throw Error("Did not received expected data");
        const perosn = await response.json();
        setPerosnData(perosn);
        setIsLoading(false);
      } catch (error) {
        setfetchError(error);
      }
    };
    fetchPerson();
  }, [API_URL, setfetchError, perosnID]);

  //
  console.log(perosnData.edu);
  return (
    <div ref={ref} id="print" className="print" color="blue">
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <div className="main-info">
            <h2>
              {perosnData.info.first || []} {perosnData.info.last}{" "}
            </h2>
            <p>
              Address: {perosnData.info.city} {perosnData.info.country}{" "}
              {perosnData.info.street} {perosnData.info.post}
            </p>
            <p>Phone: {perosnData.info.phone}</p>
            <p>Email: {perosnData.info.email} </p>
          </div>
          <div className="border"></div>
          <div className="text">
            <h3>Personal Proflie Statement </h3>
            <p>{perosnData.text}</p>
          </div>
          <div className="border"></div>
          <div className="edu">
            <h3>Education</h3>
            <ul>
              {perosnData.edu.map((e) => {
                return (
                  <li key={e.id}>
                    <h4>
                      {e.quali} from {e.name} in {e.city}
                    </h4>
                    <p>{e.data}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border"></div>
          <div className="work">
            <h3>Wrok Experence</h3>
            <ul>
              {perosnData.work.map((e) => {
                return (
                  <li key={e.id}>
                    <h4>{e.title}</h4>
                    <h5>
                      {e.employer} {e.city} {e.countery}, from: {e.start}, till:{" "}
                      {e.end}
                    </h5>
                    <p> {e.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border"></div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              {perosnData.skills.map((e) => {
                return (
                  <li key={e.id}>
                    <h5> {e.newSkill} </h5>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
});
// end of it

//
const Final = ({ perosnID, API_URL, setfetchError }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div id="final" className="container">
      <ComponentToPrint
        ref={componentRef}
        API_URL={API_URL}
        perosnID={perosnID}
        setfetchError={setfetchError}
      />
      <div className="not-print">
        <div className="controler">
          <label htmlFor="head">Background </label>
          <input
            type="color"
            id="head"
            name="head"
            value="#e66465"
            onChange={changeBackGround}
          ></input>
          <label htmlFor="head"> Your name </label>
          <input
            type="color"
            id="head"
            name="head"
            value="#e66465"
            onChange={changeColor}
          ></input>
          <label htmlFor="head"> Titles </label>
          <input
            type="color"
            id="head"
            name="head"
            value="#e66465"
            onChange={changeHeaderColor}
          ></input>

          <label htmlFor="head"> text </label>
          <input
            type="color"
            id="head"
            name="head"
            value="#e66465"
            onChange={changeParaColor}
          ></input>
          <label htmlFor="text-font">Text Size </label>
          <select name="text-font" id="text-font" onChange={textSize}>
            <option value="">select</option>
            <option value="small">small</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
          </select>
          <label htmlFor="title-font">Title Size </label>
          <select name="title-font" id="title-font" onChange={titleSize}>
            <option value="">select</option>
            <option value="small">small</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
          </select>
        </div>
        <div className="get-cv">
          <button onClick={handlePrint}>Get me my CV!</button>
        </div>
        <div className="go-to-main">
          <button onClick={() => setButtonPopup(true)}>Abandon! </button>
        </div>
        <Popup trigger={buttonPopup} settTrigger={setButtonPopup}>
          <h4>Are you Sure!</h4>
          <p>This will Delete all your information.</p>
        </Popup>
      </div>
    </div>
  );
};

export default Final;
