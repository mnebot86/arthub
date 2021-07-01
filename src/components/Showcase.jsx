import view from "../art-image/view.png";
import like from "../art-image/likes.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";

const Showcase = (props) => {
  const [viewed, setViewed] = useState(false);
  const [liked, setLiked] = useState(false);

  const params = useParams();
  const gallery = props.galleries.find((gallery) => gallery.id === params.id);

  useEffect(() => {
    const updateViews = async () => {
      // ON mounting the views goes up by 1 then patches to Airtable
      if (props.galleries.length && !viewed) {
        const fields = { views: gallery.fields.views + 1 };
        console.log(fields);
        if (params.id) {
          const update = `${baseURL}/gallery/${params.id}`;
          await axios.patch(update, { fields }, config);
          setViewed(true);
          props.setToggleFetch((curr) => !curr);
        }
      }
    };

    updateViews();
  }, [props.galleries]);

  const handleClick = async () => {
    // Listen for onClick on Like button and increments it by one. Updates AirTable with axios.patch. Then re-renders.
    if (props.galleries.length && !liked) {
      const fields = { likes: gallery.fields.likes + 1 };
      console.log(fields);
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
  const { image, title, views, likes, artist, video } = gallery.fields;
  return (
    <div className="showcase-container">
      <div className="card">
        <h3>Name: {title}</h3>
        <h3>By: {artist}</h3>
        {image ? (
          <img src={image} alt="selected image" />
        ) : (
          <iframe src={video} allow="fullscreen" frameborder="0"></iframe>
        )}
        {/* Renders View and Number Icons */}
        <p>
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
        </p>
      </div>
    </div>
  );
};

export default Showcase;