import { Link } from 'react-router-dom';

function NavBar() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="art">Art</Link>
      <Link to="photo">Photo</Link>
      <Link to="film">Film</Link>
      <Link to="share">Share</Link>
    </div>
  )
}
export default NavBar;