import { Route } from 'react-router';
import { useEffect, useState } from 'react';
import { baseURL, config } from './services';
import axios from 'axios';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  const [galleries, setGalleries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      const resp = await axios.get(baseURL, config);
      setGalleries(resp.data.records);
    }
    fetchGalleries();
  },[toggleFetch])
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Route exact path="/">
        <h1>This is Home!</h1>
      </Route>
      <Route path="/art">
        <h1>This is Art Gallery</h1>
      </Route>
      <Route path="/photo">
        <h1>This is Photo Gallery</h1>
      </Route>
      <Route path="/film">
        <h1>This is Film Gallery</h1>
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
