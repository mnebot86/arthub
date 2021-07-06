import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { baseURL, config } from "../../services";
import "./Share.css";

const Share = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setURL] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory();

  const handSubmit = async (e) => {
    e.preventDefault();
    const newArt = {
      title,
      artist,
      image: url,
      type: category,
      views: 0,
      likes: 0,
    };
    await axios.post(`${baseURL}/gallery`, { fields: newArt }, config);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => {
      history.push(`/${category}`);
    }, 1000);
  };

  return (
    <form id="share-form" onSubmit={handSubmit}>
      <input
        className="share"
        placeholder="Title"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="share"
        placeholder="Artist"
        type="text"
        id="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <input
        className="share"
        placeholder="URL"
        type="url"
        id="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />

      {/* <select className="share" value={category} onSelect={(e) => setCategory(e.target.value)}>
        <option value={category} onChange={() => setCategory('art')}>
          art
        </option>
        <option value={category} onSelect={(e) => setCategory(e.target.value)}>
          photo
        </option>
        <option value={category} onSelect={(e) => setCategory(e.target.value)}>
          film
        </option>
      </select> */}
      <input className='share'
        type="text"
        style={{textTransform: "lowercase"}}
        id="category"
        placeholder="Art/Photo/Film?"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Share;
