import { useState } from "react";

const Education = ({ setShowEducation, setShowEducationView }) => {
  if (!localStorage.getItem("edu")) {
    window.localStorage.setItem("edu", JSON.stringify([]));
  }
  const edu = JSON.parse(localStorage.getItem("edu"));

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [quali, setQuali] = useState("");
  const [data, setDate] = useState("");

  const handelSubmit = async (page) => {
    let myform = document.getElementsByTagName("input");
    const sele = document.getElementById("quali-sele");
    const filtered = [sele, ...myform].filter(
      (inp) => inp.className !== "submit"
    );
    const check = filtered.filter((input) => input.className === "valid");
    page.preventDefault();

    if (check.length >= 4) {
      const qualiInfo = { data, name, quali, city, id: Date.now() };
      edu.push(qualiInfo);
      window.localStorage.setItem("edu", JSON.stringify(edu));

      setShowEducation(false);
      setShowEducationView(true);
    } else {
      filtered.forEach((element) => {
        if (element.className !== "valid") {
          element.classList.add("invalid");
        }
      });
    }
  };

  return (
    <div id="quali">
      <h2>Tell us about your education</h2>
      <p>
        List universities, colleges or institutions where you studied. If you
        didn't attend further education, then list your school or any other
        place of training, particularly if it corresponds to the position
        sought.
      </p>
      <form onSubmit={handelSubmit}>
        <div className="form">
          <div>
            <label htmlFor="name">Institution Name:</label>
            <input
              placeholder="e.g Uni of Damascus"
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setCity(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
                setName(e.target.value);
              }}
            />
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
            <label htmlFor="quali-sele">Qualification:</label>
            <select
              name="quali"
              id="quali-sele"
              placeholder="hel"
              onChange={(e) => {
                e.target.classList.add("valid");
                setQuali(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="GCSE">GCSEs</option>
              <option value="A-Level">A-Levels</option>
              <option value="NV1-1">NVQ 1</option>
              <option value="NVQ-2">NVQ 2</option>
              <option value="SVQ-1">SVQ 1</option>
              <option value="SVQ-2">SVQ 1</option>
            </select>
          </div>
          <div>
            <label htmlFor="graduation">Graduation Date:</label>
            <input
              type="date"
              id="graduation"
              name="graduation"
              onChange={(e) => {
                if (e.target.value.length > 8) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setDate(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            ></input>
          </div>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Education;
