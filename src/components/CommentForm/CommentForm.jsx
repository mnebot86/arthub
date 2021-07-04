import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import "./CommentForm.css";

const CommentForm = (props) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      author,
      posts: [props.post.id],
    }
    await axios.post(`${baseURL}/comments`, { fields: newComment }, config);
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content: </label>
      <input
        id="content"
        type="text"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="author">Author: </label>
      <input
        id="author"
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Comment me cap'n</button>
    </form>
  );
};

export default CommentForm;