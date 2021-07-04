import { Link } from "react-router-dom";
import "./Photo.css"

const Photo = (props) => {
  return (
    <div className="art">
      <Link to={`/showcase/${props.gallery.id}`}>
      <img src={props.gallery.fields.image} alt="beautiful"/>
      </Link>
    </div>
  );
};

export default Photo;
