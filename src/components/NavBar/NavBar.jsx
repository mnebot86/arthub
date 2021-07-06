import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="nav-title">
          <h1>artHUB</h1>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setHamburger(!hamburger)}
        />
      <nav
        className="nav-container"
        style={{ display: visible || hamburger ? "flex" : "none" }}
      >
        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/photo">Photo</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/share/:type">Share</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
