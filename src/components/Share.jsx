import axios from "axios";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { baseURL, config } from "../services";

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
    };
    await axios.post(baseURL, { fields: newArt }, config);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => {
      history.push(`/${category}`)
    },1000)
  };

  return (
    <form onSubmit={handSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="artist">Artist: </label>
      <input
        type="text"
        id="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <label htmlFor="url">URL: </label>
      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      {/* <label htmlFor="category">Category: </label>
      <select id="category">
        <option value={category}>art</option>
        <option value={category}>photo</option>
        <option value={category}>film</option>
      </select> */}
      <input
        type="text"
        id="category"
        placeholder="Art/Photo/Film?"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Share;
