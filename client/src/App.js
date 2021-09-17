import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
