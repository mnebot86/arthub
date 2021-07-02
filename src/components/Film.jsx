import { Link } from "react-router-dom";

const Film = (props) => {
  return (
    <div className="art">
      <Link to={`/showcase/${props.gallery.id}`}>
        <iframe src={props.gallery.fields.video} title="selected film" allow="fullscreen" frameborder="0"></iframe>
      </Link>
    </div>
  );
};

export default Film;
