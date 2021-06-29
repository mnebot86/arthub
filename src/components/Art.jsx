const Art = (props) => {
  return (
    <div class="art">
      <img src={props.gallery.fields.image} />
    </div>
  );
};

export default Art;
