import { useState } from "react";
const Allskils = () => {
  const skills = JSON.parse(localStorage.getItem("skills"));
  const delet = (e) => {
    const id = e.target.id;
    let update = skills.filter((ele) => ele.id.toString() !== id);
    window.localStorage.setItem("skills", JSON.stringify(update));
    window.location.pathname = "/create/skills";
  };
  return (
    <div>
      {skills.length ? (
        <ul className="heloo">
          {skills.map((skill) => {
            return (
              <li key={skill.id}>
                <h3>{skill.newSkill}</h3>
                <span className="del" id={skill.id} onClick={delet}>
                  Delete
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>You haven't added any skills yet</h3>
      )}
    </div>
  );
};
//
const Skills = () => {
  if (!localStorage.getItem("skills")) {
    window.localStorage.setItem("skills", JSON.stringify([]));
  }
  const skills = JSON.parse(localStorage.getItem("skills"));
  const [newSkill, setSkill] = useState("");

  const addskills = (e) => {
    const skillInput = document.getElementsByClassName("skill-input");
    if ([...skillInput][0].className.split(" ").includes("valid")) {
      const skill = {
        newSkill,
        id: Date.now(),
      };
      skills.push(skill);
      Allskils();

      window.localStorage.setItem("skills", JSON.stringify(skills));
      window.location.pathname = "/create/skills";
    } else {
      [...skillInput][0].focus();
    }
  };

  const handelSubmit = (e) => {
    window.location.pathname = "/create/summary";
  };

  return (
    <div id="skills">
      <h2>Well, let’s take care of your</h2>
      <p>
        Here’s what you need to know: Employers scan skills for relevant
        keywords. We’ll help you choose the best ones.
      </p>
      <Allskils />
      <div className="add-skill">
        <input
          maxLength={26}
          className="skill-input"
          placeholder="You Skill e.g HTMLs"
          onChange={(e) => {
            if (e.target.value.length > 1) {
              e.target.classList.remove("invalid");
              e.target.classList.add("valid");
              setSkill(e.target.value);
            } else {
              e.target.classList.remove("valid");
              e.target.classList.add("invalid");
            }
          }}
        ></input>
        <button className="add" onClick={addskills}>
          + add a skill
        </button>
      </div>
      <button className="next" onClick={handelSubmit}>
        Next: Summary
      </button>
    </div>
  );
};

export default Skills;
