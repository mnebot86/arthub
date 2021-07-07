import { Link } from "react-router-dom";
import "./Photo.css"

const Photo = (props) => {
  return (
    <div>
      <Link to={`/showcase/${props.gallery.id}`}>
      <img id="photo-img" src={props.gallery.fields.image} alt="beautiful"/>
      </Link>
    </div>
  );
};

export default Photo;
