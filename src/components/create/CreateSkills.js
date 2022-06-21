import { useEffect, useState } from "react";

const Skills = ({
  setShowSummary,
  setShowSkills,
  API_URL,
  perosnID,
  setfetchError,
}) => {
  if (!localStorage.getItem("skills")) {
    window.localStorage.setItem("skills", JSON.stringify([]));
  }
  const [skills, setSkills] = useState(
    JSON.parse(localStorage.getItem("skills"))
  );
  const handle = async () => {
    const input = document.getElementById("input");
    if (input.value.length) {
      const newSk = {
        newSkill: input.value,
        id: Date.now(),
      };
      setSkills([...skills, newSk]);
      input.value = "";
    } else {
      input.focus();
    }
  };
  const delet = async (e) => {
    const id = e.target.id;
    let update = skills.filter((ele) => ele.id.toString() !== id);

    setSkills(update);
  };
  const handelSubmit = () => {
    setShowSkills(false);
    setShowSummary(true);
  };
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills, API_URL, perosnID, setfetchError]);

  return (
    <div id="skills">
      <h2>Well, let’s take care of your</h2>
      <p>
        Here’s what you need to know: Employers scan skills for relevant
        keywords. We’ll help you choose the best ones.
      </p>
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

      <div className="add-skill">
        <input
          maxLength={26}
          className="skill-input"
          placeholder="You Skill e.g HTML"
          id="input"
          type="text"
        ></input>
        <button className="add" onClick={handle}>
          add
        </button>
      </div>
      <button className="next" onClick={handelSubmit}>
        Next: Summary
      </button>
    </div>
  );
};

export default Skills;
