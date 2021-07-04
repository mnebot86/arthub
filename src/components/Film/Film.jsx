import { Link } from "react-router-dom";
import './Film.css';

const Film = (props) => {
  return (
    <div className="art">
      <Link to={`/showcase/${props.gallery.id}`}>
        <iframe src={props.gallery.fields.video} title="selected film" allow="fullscreen" frameborder="0"></iframe>
        <p className="film-text">Click Here For More</p>
      </Link>
    </div>
  );
};

export default Film;
