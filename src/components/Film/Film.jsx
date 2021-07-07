import { Link } from "react-router-dom";
import './Film.css';

const Film = (props) => {
  return (
    <div>
      <Link to={`/showcase/${props.gallery.id}`}>
        <iframe id="film" src={props.gallery.fields.video} title="selected film" allow="fullscreen"></iframe>
        <p className="film-text">Click Here For More</p>
      </Link>
    </div>
  );
};

export default Film;
