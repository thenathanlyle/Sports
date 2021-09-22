import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFixtures } from "../services";

export default function Fixtures() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getFixtures = async () => {
      setGames(await fetchFixtures());
    };
    getFixtures();
  }, []);

  return (
    <div className="Teams">
      <h3>Upcoming Fixtures: Week 6</h3>
      <div className="TeamA">
        {games.map((fixture) => {
          return <h3>{fixture.fields.teamA}</h3>;
        })}
      </div>
      <div className="TeamB">
        {games.map((fixture) => {
          return <h3>{fixture.fields.teamB}</h3>;
        })}
      </div>
    </div>
  );
}
