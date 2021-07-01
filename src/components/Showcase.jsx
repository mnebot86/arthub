import view from "../art-image/view.png";
import like from "../art-image/likes.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";

const Showcase = (props) => {
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [viewed, setViewed ] = useState(false);

  const params = useParams();
  const gallery = props.galleries.find((gallery) => gallery.id === params.id);

  useEffect(() => {
    const updateViews = async () => {
      // onload the views goes up by 1 then pushes to airtable
      if(props.galleries.length && !viewed) {
        const fields = { views: gallery.fields.views + 1 };
        console.log(fields);
        if (params.id) {
          const update = `${baseURL}/${params.id}`;
          await axios.patch(update, { fields }, config);
          setViewed(true);
          props.setToggleFetch((curr) => !curr);
        }

      }
    };

    updateViews();
  }, [props.galleries]);

  if (!gallery) {
    return `Loading`;
  }
  const { image, title, views, likes, artist, video } = gallery.fields;
  // console.log(views + 1)
  // const handleClick = async () => {

  // }

  const clickHandle = () => {
    // increments by one when like icon is clicked
    setLikeCount(likeCount + 1);
    console.log(`Button is clicking`);
  };
  const loadHandle = () => {
    // increments by one when image loads
    setViewCount(viewCount + 1);
    console.log(`Page has Loaded`);
  };

  return (
    <div className="showcase-container">
      <div onLoad={loadHandle} className="card">
        <h3>Name: {title}</h3>
        <h3>By: {artist}</h3>
        {image ? (
          <img src={image} alt="selected image" />
        ) : (
          <iframe src={video} allow="fullscreen" frameborder="0"></iframe>
        )}
        <p>
          <div>
            <img id="logo" className="inline" src={view} alt="" />
            {views}
          </div>
          <div>
            <img
              id="logo"
              className="inline"
              src={like}
              alt=""
              onClick={clickHandle}
            />
            {likes}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Showcase;
