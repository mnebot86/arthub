import './Comment.css'
const Comment = (props) => {
  const { author, content } = props.fields.comment;
  return (
    <li>{content} - {author}</li>
  );
};

export default Comment; 