import { useState } from "react";
import apiRequest from "../../apiRequest";

const Work = ({
  setShowWork,
  setShowWorkView,
  API_URL,
  perosnID,
  setfetchError,
}) => {
  if (!localStorage.getItem("work")) {
    console.log("donign so");
    window.localStorage.setItem("work", JSON.stringify([]));
  }
  const edu = JSON.parse(localStorage.getItem("work"));

  // const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [city, setCity] = useState("");
  const [countery, setCountry] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    let myform = document.getElementsByTagName("input");
    const filtered = [...myform].filter((inp) => inp.className !== "submit");
    const check = filtered.filter((input) => input.className === "valid");
    if (check.length >= 6) {
      const qualiInfo = {
        countery,
        title,
        employer,
        city,
        start,
        end,
        desc,
        id: Date.now(),
      };
      edu.push(qualiInfo);
      window.localStorage.setItem("work", JSON.stringify(edu));
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ work: edu }),
      };
      const reqUrl = `${API_URL}/${perosnID}`;
      const result = await apiRequest(reqUrl, updateOptions);
      if (result) setfetchError(result);
      setShowWork(false);
      setShowWorkView(true);
    } else {
      filtered.forEach((element) => {
        if (element.className !== "valid") {
          element.classList.add("invalid");
        }
      });
    }
  };

  return (
    <div id="work">
      <h2>Now, let’s fill out your work history</h2>
      <p>
        Here’s what you need to know: Employers scan your resume for six seconds
        to decide if you’re a match.
      </p>
      <form onSubmit={handelSubmit}>
        <div className="form">
          <div>
            <label htmlFor="title">Job Title: </label>
            <input
              placeholder="e.g Developer"
              type="text"
              name="title"
              id="title"
              onChange={(e) => {
                if (e.target.value.length > 3) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setTitle(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="employer">Employer: </label>
            <input
              placeholder="e.g Northcoders"
              type="text"
              id="employer"
              name="employer"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setEmployer(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              placeholder="e.g Redcar"
              type="text"
              name="city"
              id="city"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setCity(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              placeholder="e.g United Kinkdom"
              type="text"
              name="country"
              id="country"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setCountry(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="start">Start Date: </label>
            <input
              type="date"
              id="start"
              name="start"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setStart(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="end">End Date: </label>
            <input
              type="date"
              id="end"
              name="end"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setEnd(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            ></input>
          </div>
        </div>
        <div className="text">
          <label className="desc" htmlFor="desc">
            Description <span>(Optional)</span>:
          </label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            placeholder="Your work's desctiption here. e.g I Was Wroking along with ..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Work;
