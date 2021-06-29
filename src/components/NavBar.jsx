import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <h1>artHUB</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="art">Art</Link>{" "}
        </li>
        <li>
          <Link to="photo">Photo</Link>
        </li>
        <li>
          <Link to="film">Film</Link>
        </li>
        <li>
          <Link to="share">Share</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
