import { Link } from "react-router-dom";
import "./Art.css";
const Art = (props) => {
  return (
    <div>
      <Link to={`/showcase/${props.gallery.id}`}>
        <img id="art-img" src={props.gallery.fields.image} alt="selected art" />
      </Link>
    </div>
  );
};

export default Art;
