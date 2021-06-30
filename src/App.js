import { Route } from "react-router";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Art from "./components/Art";
import Photo from "./components/Photo";
import Film from "./components/Film";
import Showcase from "./Showcase";
import "./App.css";

function App() {
  const [galleries, setGalleries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      const resp = await axios.get(baseURL, config);
      setGalleries(resp.data.records);
    };
    fetchGalleries();
  }, [toggleFetch]);
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
      <Route path="share">
        <h1>This is Share Feed</h1>
      </Route>
      <Route path="/showcase/:id">
        <h1>Showcase</h1>
        <Showcase gallery={galleries} setToggleFetch={setToggleFetch}/>
      </Route>
      <footer>
        <h1>My Footer</h1>
      </footer>
    </main>
  );
}

export default App;
