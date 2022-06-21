import { Link } from "react-router-dom";
const LandPage = () => {
  //

  //
  const go = () => {};
  return (
    <main>
      <div className="be-you">
        <div className="list">
          <h4>BE YOU</h4>
          <h4>GET NOTICED</h4>
          <h4>GET HIRED</h4>
          <p></p>
        </div>
        <div className="button">
          <h3>It's Easier Than Ever</h3>
          <h3>Just a Few Clicks and</h3>
          <h3>You Are Ready To Go</h3>
          <p></p>
          <button>
            {" "}
            <Link to="create" onClick={go}>
              Create My Resume
            </Link>
          </button>
        </div>
      </div>
      <div className="second">
        <div className="para">
          <h3>We Make Sure You Stand Out</h3>
          <p>
            We offer you the best online resume builder and free professional
            advice from career experts. We’ll guide you through the entire
            recruitment process all the way to your dream job.
          </p>
        </div>
        <div className="right"></div>
      </div>
      <div className="theerd">
        <div className="theerd-first">
          <h5>Flexible Text Editor</h5>
          <p>You will have access to the best text editor available.</p>
        </div>
        <div className="theerd-second">
          <h5>It's Easy to Use</h5>
          <p>
            Our online resume builder will help you write a perfect resume in
            minutes.
          </p>
        </div>
        <div className="theerd-third">
          <h5>It's Accessable</h5>
          <p>You don't no need to pay for our serviece</p>
        </div>
      </div>
      <div className="fourth">
        <div className="para">
          <h3>You Can Write and Edit your CV in a blink</h3>
          <p>
            We offer you the best online resume builder and free professional
            advice from career experts. We’ll guide you through the entire
            recruitment process all the way to your dream job.
          </p>
        </div>
        <div className="new"></div>
      </div>
    </main>
  );
};
export default LandPage;
