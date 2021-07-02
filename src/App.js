import { Route } from "react-router";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Art from "./components/Art";
import Photo from "./components/Photo";
import Film from "./components/Film";
import Showcase from "./components/Showcase";
import Share from "./components/Share";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [galleries, setGalleries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchGalleriesAndComments = async () => {
      const resp = await axios.get(`${baseURL}/gallery`, config);
      const commentsResp = await axios.get(`${baseURL}/comments`, config);
      const comments = commentsResp.data.records;
      const linkComment = resp.data.records.map((gallery) => {
        return {
          ...gallery,
          fields: {
            ...gallery.fields,
            comments: gallery.fields.comments
              ? comments.filter((comment) =>
                  gallery.fields.comments.includes(comment.id)
                )
              : [],
          },
        };
      });
      setGalleries(linkComment);
    };
    fetchGalleriesAndComments();
  }, [toggleFetch, galleries]);

  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/art">
        <div className="art-container">
          {galleries
            .filter((gallery) => gallery.fields.type === "art")
            .map((gallery) => (
              <Art
                key={gallery.id}
                gallery={gallery}
                setToggleFetch={setToggleFetch}
              />
            ))}
        </div>
      </Route>
      <Route path="/photo">
        <div className="art-container">
          {galleries
            .filter((gallery) => gallery.fields.type === "photo")
            .map((gallery) => (
              <Photo
                key={gallery.id}
                gallery={gallery}
                setToggleFetch={setToggleFetch}
              ></Photo>
            ))}
        </div>
      </Route>
      <Route path="/film">
        <div className="art-container">
          {galleries
            .filter((gallery) => gallery.fields.type === "film")
            .map((gallery) => (
              <Film
                key={gallery.id}
                gallery={gallery}
                setToggleFetch={setToggleFetch}
              ></Film>
            ))}
        </div>
      </Route>
      <Route path="/share/:id">
        <Share galleries={galleries} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/showcase/:id">
        <Showcase galleries={galleries} setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </main>
  );
}

export default App;
