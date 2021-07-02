import { Link } from "react-router-dom";

const Art = (props) => {
  return (
    <div class="art">
      <Link to={`/showcase/${props.gallery.id}`}>
      <img src={props.gallery.fields.image} alt="selected art"/>
      </Link>
    </div>
  );
};

export default Art;
