const Film = (props) => {
  return (
    <div className="art">
      <iframe src={props.gallery.fields.image} frameborder="0"></iframe>
    </div>
  );
};

export default Film;
