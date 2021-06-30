import { Link } from "react-router-dom";

const Photo = (props) => {
  return (
    <div className="art">
      <Link to={`/showcase/${props.gallery.id}`}>
      <img src={props.gallery.fields.image} />
      </Link>
    </div>
  );
};

export default Photo;
