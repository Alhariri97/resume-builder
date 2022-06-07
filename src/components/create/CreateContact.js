import { useState } from "react";
import apiRequest from "../../apiRequest";

const Contact = ({
  perosnID,
  API_URL,
  setfetchError,
  setShowContact,
  setShowEducation,
}) => {
  if (!localStorage.getItem("info")) {
    localStorage.setItem("info", JSON.stringify({}));
  }

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [phone, setPhone] = useState("");
  //
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    let myform = document.getElementsByTagName("input");
    const filter = [...myform].filter((inp) => inp.className !== "submit");
    const testInputs = filter.every((inp) => inp.className === "valid");
    if (testInputs) {
      const personInfo = {
        first,
        last,
        city,
        country,
        email,
        post,
        phone,
        street,
      };
      window.localStorage.setItem("info", JSON.stringify({ personInfo }));
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: perosnID,
          info: personInfo,
          // edu: [],
          // work: [],
          // skills: [],
          // text: {},
        }),
      };
      const result = await apiRequest(API_URL, postOptions);
      if (result) setfetchError(result);
      setShowContact(false);
      setShowEducation(true);
    } else {
      const areNotValid = filter.filter((inp) => inp.className !== "valid");
      areNotValid.forEach((e) => e.classList.add("invalid"));
      areNotValid[0].focus();
    }
  };
  return (
    <div className="contact">
      <h3>What’s the best way for employers to contact you?</h3>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              placeholder="e.g. Abdul"
              id="name"
              type="text"
              name="first"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setFirst(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input
              placeholder="e.g. Brown"
              id="surname"
              type="text"
              name="surname"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setLast(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="street">Street Address:</label>
            <input
              placeholder="e.g. Lumely Rd"
              id="street"
              type="text"
              name="street"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setStreet(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="city">City/Town:</label>
            <input
              placeholder="e.g. Redcar"
              id="city"
              type="text"
              name="city"
              onChange={(e) => {
                if (e.target.value.length > 3) {
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
              placeholder="e.g. United Kingdom"
              id="country"
              type="text"
              name="country"
              onChange={(e) => {
                if (e.target.value.length > 5) {
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
            <label htmlFor="post">Postcode:</label>
            <input
              placeholder="e.g. TS10 4XX"
              id="post"
              type="text"
              name="post"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setPost(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              placeholder="e.g. 074595341234"
              id="phone"
              type="text"
              name="phone"
              onChange={(e) => {
                if (e.target.value.length > 10) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setPhone(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              placeholder="e.g. your@email.com"
              id="email"
              type="text"
              name="email"
              onChange={(e) => {
                let reg = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
                let test = reg.test(e.target.value);
                if (test) {
                  e.target.classList.remove("invalid");
                  e.target.classList.add("valid");
                  setEmail(e.target.value);
                } else {
                  e.target.classList.remove("valid");
                  e.target.classList.add("invalid");
                }
              }}
            />
          </div>
        </div>
        <input
          className="submit"
          type="submit"
          value="Submit"
          onChange={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Contact;
