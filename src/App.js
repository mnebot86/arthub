import { Route } from "react-router";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
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
        <h1>This is Art Gallery</h1>
        {galleries
          .filter((gallery) => gallery.fields.type === "art")
          .map((gallery) => (
            <div key={gallery.id}>
              <img src={gallery.fields.image} />
              <h3>{gallery.fields.title}</h3>
            </div>
          ))}
      </Route>
      <Route path="/photo">
        <h1>This is Photo Gallery</h1>
        {galleries.filter((gallery) => gallery.fields.type === 'photo').map((gallery) => (
          <div key={gallery.id}>
            <img src={gallery.fields.image} />
            <h3>{gallery.fields.title}</h3>
          </div>
        ))}
      </Route>
      <Route path="/film">
        <h1>This is Film Gallery</h1>
        {galleries.filter((gallery) => gallery.fields.type === 'film').map((gallery) => (
          <div>
            <iframe src={gallery.fields.image} frameborder="0"></iframe>
            <h3>{gallery.fields.title}</h3>
          </div>
        ))}
      </Route>
      <Route path="share">
        <h1>This is Share Feed</h1>
      </Route>
      <footer>
        <h1>My Footer</h1>
      </footer>
    </main>
  );
}

export default App;
