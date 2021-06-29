import pen from "../art-image/color-pens.jpeg";
import camera from "../art-image/hand-in-camera.jpeg";
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div id="home-img-left">
        <img src={pen} alt="color pencil photo" />
      </div>
      <article>
        <div className="home-title-container">
          <h1 className="home-title">Welcome to the Hub!</h1>
        </div>
        <div className="home-para-container">
          <p className="home-para">
            Arthub is place for the creatives, the wonderers , imaginative, and
            the dreamers. Here you can share your artworks, photographs, and
            film creations. Everyone see the world differently and has their own
            interpretation of it. Let others see your visions, but take the time
            to look at other works of art as well. Lets do our best to make this
            a strong and welcoming community. Feel free to post, like and
            comment on each others art work!
          </p>
        </div>
      </article>
      <div id="home-img-right">
        <img src={camera} alt="Man with camera in his hand" />
      </div>
    </div>
  );
};

export default Home;
