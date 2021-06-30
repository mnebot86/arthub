import view from "../art-image/view.png";
import like from "../art-image/likes.png";
import { useParams } from "react-router-dom";

const Showcase = (props) => {
  const params = useParams();
  const gallery = props.galleries.find((gallery) => gallery.id === params.id);
  if (!gallery) {
    return `Loading`;
  }
  const { image, title, views, likes, artist, video } = gallery.fields;

  return (
    <div className="showcase-container">
      <div className="card">
        {image ? (
          <img src={image} alt="selected image" />
        ) : (
          <iframe src={video} allow="fullscreen" frameborder="0"></iframe>
        )}
        <p>
          <img id="logo" className="inline" src={view} alt="" />
          {views} <img id="logo" className="inline" src={like} alt="" />
          {likes}
        </p>
        <h3>Name: {title}</h3>
        <h3>By: {artist}</h3>
      </div>
    </div>
  );
};

export default Showcase;
