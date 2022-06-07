import { useState } from "react";
import apiRequest from "../../apiRequest";

const Summary = ({
  setShowSummary,
  setShowFinal,
  perosnID,
  API_URL,
  setfetchError,
}) => {
  if (!localStorage.getItem("text")) {
    localStorage.setItem("text", JSON.stringify({}));
  }
  const [text, setText] = useState("");
  const go = () => {
    const validText = document.getElementsByTagName("textarea");
    if ([...validText][0].className.split(" ").includes("valid")) {
      localStorage.setItem("text", JSON.stringify({ text }));
      //
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      };
      const reqUrl = `${API_URL}/${perosnID}`;
      const result = apiRequest(reqUrl, updateOptions);
      if (result) setfetchError(result);
      //
      setShowSummary(false);
      setShowFinal(true);
    } else {
      [...validText][0].focus();
    }
  };

  return (
    <div id="summary">
      <h2>Alrighty, let's work on you summary </h2>
      <p>
        Your summary shows employers you’re right for their job. We’ll help you
        write a great one with expert content you can customize.
      </p>
      <textarea
        onChange={(e) => {
          if (e.target.value.length > 5) {
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
            setText(e.target.value);
          } else {
            e.target.classList.remove("valid");
            e.target.classList.add("invalid");
          }
        }}
        placeholder="Write you osummary here."
      ></textarea>
      <button className="next" onClick={go}>
        Next: Your CV{" "}
      </button>
    </div>
  );
};

export default Summary;
