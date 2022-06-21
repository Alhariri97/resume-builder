import { Link } from "react-router-dom";

const Header = () => {
  const active = (ele) => {};
  return (
    <header>
      <div>
        <h1 className="logo">CV</h1>
      </div>
      <ul>
        <li>
          <Link onClick={active} to="/">
            Main
          </Link>
        </li>
        <li>
          <Link onClick={active} to="Other">
            work
          </Link>
        </li>
        <li>
          <Link onClick={active} to="featuers">
            Features
          </Link>
        </li>
        <li>
          <Link onClick={active} to="Contact-us">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
