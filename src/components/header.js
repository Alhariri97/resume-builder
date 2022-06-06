const Header = () => {
  const active = (ele) => {};
  return (
    <header>
      <div>
        <h1 className="logo">CV</h1>
      </div>
      <ul>
        <li>
          <a onClick={active} href="/">
            Main
          </a>
        </li>
        <li>
          <a onClick={active} href="Other">
            work
          </a>
        </li>
        <li>
          <a onClick={active} href="featuers">
            Features
          </a>
        </li>
        <li>
          <a onClick={active} href="Contact-us">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
