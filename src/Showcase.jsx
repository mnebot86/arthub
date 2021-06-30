

const Showcase = (props) => {
  const { image, title } = props.gallery.fields
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default Showcase;