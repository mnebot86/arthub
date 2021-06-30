import { useParams } from "react-router-dom";

const Showcase = (props) => {
  const params = useParams();
  const gallery = props.galleries.find((gallery) => gallery.id === params.id)

  console.log(props.galleries)
  //first get the id from params
  // then look through all of the items in galleries to see which one has ids matches the params.id
  // destruction image and title out of gallery 
  if(!gallery) {
    return `Loading`
  }
  const { image, title } = gallery.fields;
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default Showcase;