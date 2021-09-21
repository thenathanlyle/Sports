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
    <div>
      <div>
        {games.map((fixture) => {
          return <h3>{fixture.fields.teamA}</h3>;
        })}
      </div>
    </div>
  );
}
