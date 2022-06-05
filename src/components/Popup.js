import React from "react";

function Popup(props) {
  const goBack = () => {
    window.localStorage.removeItem("work");
    window.localStorage.removeItem("edu");
    window.localStorage.removeItem("info");
    window.localStorage.removeItem("text");
    window.localStorage.removeItem("skills");
    window.location.pathname = "/";
  };
  return props.trigger ? (
    <div className="popup">
      <div className="pupup-inner">
        <button className="close-btn" onClick={() => props.settTrigger(false)}>
          &#10060;
        </button>
        {props.children}
        <button className="sure-btn" onClick={goBack}>
          Yes,I'm Sure
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
