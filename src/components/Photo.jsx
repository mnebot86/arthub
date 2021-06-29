import React from "react";

const Photo = (props) => {
  return (
    <div className="art">
      <img src={props.gallery.fields.image} />
    </div>
  );
};

export default Photo;
