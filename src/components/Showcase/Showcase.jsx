import view from "../../art-image/view.png";
import like from "../../art-image/likes.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import "./Showcase.css";

const Showcase = (props) => {
  const [viewed, setViewed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");


  const params = useParams();
  const {setToggleFetch, galleries} = props
  const gallery = galleries.find((gallery) => gallery.id === params.id);

  useEffect(() => {
    const updateViews = async () => {
      // ON mounting the views goes up by 1 then patches to Airtable
      if (galleries.length && !viewed) {
        const fields = { views: gallery.fields.views + 1 };
        if (params.id) {
          const update = `${baseURL}/gallery/${params.id}`;
          await axios.patch(update, { fields }, config);
          setViewed(true);
          setToggleFetch((curr) => !curr);
        }
      }
    };

    updateViews();
  }, [galleries, params.id, setToggleFetch, viewed, gallery.fields.views]);

  const handleClick = async () => {
    // Listen for onClick on Like button and increments it by one. Updates AirTable with axios.patch. Then re-renders.
    if (props.galleries.length && !liked) {
      const fields = { likes: gallery.fields.likes + 1 };
      if (params.id) {
        const update = `${baseURL}/gallery/${params.id}`;
        await axios.patch(update, { fields }, config);
        setLiked(true);
        props.setToggleFetch((curr) => !curr);
      }
    }
  };
  //If Image can't be found. It will put Loading on screen.
  if (!gallery) {
    return `Loading`;
  }
  const { image, title, views, likes, artist, video, comments } =
    gallery.fields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content: comment,
      author: name,
      gallery: [gallery.id],
    };
    await axios.post(`${baseURL}/comments`, { fields: newComment }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="showcase-container">
      <div className="card">
        <h3>Name: {title}</h3>
        <h3>By: {artist}</h3>
        {image ? (
          <img src={image} alt="awesome" />
        ) : (
          <iframe
            src={video}
            title="Great"
            allow="fullscreen"
            frameborder="0"
          ></iframe>
        )}
        {/* Renders View and Number Icons */}
        <div className="logo-container">
          <div>
            <img id="logo" className="inline" src={view} alt="" />
            {views}
          </div>
          <div>
            {/* Renders Like Icon with Number */}
            <img
              id="logo"
              className="inline"
              src={like}
              alt=""
              onClick={() => handleClick()}
            />
            {likes}
          </div>
        </div>
      </div>
      <div id="comment-window">
        {comments.map((comment) => (
          <p key={comment.id}>
            <strong>{comment.fields.author}</strong> ~
            <em>{comment.fields.content}</em>
          </p>
        ))}
      </div>
      <div>
        <form id="comment-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button>Send It</button>
        </form>
      </div>
    </div>
  );
};

export default Showcase;
