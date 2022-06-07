const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex">
        <div>
          <h4>OVERFLOW</h4>
          <ul>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4>PRODUCTS</h4>
          <ul>
            <li>Team</li>
            <li>Advertising</li>
            <li>Collectivs</li>
            <li>Talent</li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>About</li>
            <li>Press</li>
            <li>About</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
      <p className="copy">
        &#169; Coded by <a href="https://github.com/Alhariri97">Abdul</a>{" "}
        {new Date().getFullYear()}.
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2ca2a2"
          fillOpacity="0.87"
          d="M0,0L40,37.3C80,75,160,149,240,176C320,203,400,181,480,186.7C560,192,640,224,720,208C800,192,880,128,960,128C1040,128,1120,192,1200,192C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
