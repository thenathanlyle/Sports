import "./App.css";
import Navbar from "./components/Navbar";
import Fixtures from "./components/Fixtures";
import Spotlight from "./components/Spotlight";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Route exact path="/Fixtures">
        <Fixtures />
      </Route>
      <Route exact path="/Spotlight">
        <Spotlight />
      </Route>
    </div>
  );
}

export default App;
