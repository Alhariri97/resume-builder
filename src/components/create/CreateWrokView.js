import { useState } from "react";

const WorkView = ({
  setShowSkills,
  setShowWorkView,
  setShowWork,
  API_URL,
  perosnID,
  setfetchError,
}) => {
  const [workArray, setWorkArray] = useState(
    JSON.parse(localStorage.getItem("work"))
  );
  const addMore = () => {
    setShowWorkView(false);
    setShowWork(true);
  };
  const go = () => {
    setShowWorkView(false);
    setShowSkills(true);
  };
  const delet = async (e) => {
    const id = e.target.id;
    let update = workArray.filter((ele) => ele.id.toString() !== id);
    window.localStorage.setItem("work", JSON.stringify(update));
    setWorkArray(update);
  };

  return (
    <div id="work-view">
      {workArray.length ? (
        <div>
          <ul>
            {workArray.map((job) => {
              return (
                <li key={job.id}>
                  <h3>{job.title}</h3>
                  <p>{job.empoyer}</p>
                  <p>{job.city}</p>
                  <p>
                    from {job.start} to {job.end}
                  </p>
                  <p>{job.desc}</p>
                  <span className="del" id={job.id} onClick={delet}>
                    Delet
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>You haven't added any Jobs yet</div>
      )}

      <button className="add" onClick={() => addMore()}>
        Add Work
      </button>
      <button className="next" onClick={() => go()}>
        Next: Skills
      </button>
    </div>
  );
};

export default WorkView;
