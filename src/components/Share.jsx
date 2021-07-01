import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
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
      
      <input 
        placeholder='Title'
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <input
        placeholder="Artist"
        type="text"
        id="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      
      <input
        placeholder='URL'
        type="url"
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
        placeholder='Art/Photo/Film?'
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
