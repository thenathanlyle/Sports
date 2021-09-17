import "./App.css";
// import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Play from "./components/Play";
// import GameInstructions from "./components/GameInstructions";
// import GameLeaderboards from "./components/GameLeaderboards";

const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const BASE = process.env.REACT_APP_AIRTABLE_BASE;

function App() {
  return (
    <div className="App">
      {KEY} : {BASE}
    </div>
  );
}

export default App;
