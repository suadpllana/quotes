import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navContainer">
        <Link to="/quotes">Quotes</Link>
        <Link to="/quotes/programming">Programming Quotes</Link>
        <Link to="/quotes/breakingbad">Breaking Bad Quotes</Link>
        <Link to="/quotes/stoic">Stoic Quotes</Link>
      </nav>
    </>
  );
}

export default Nav;
