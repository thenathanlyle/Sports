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
      {games.map((fixture) => {
        return (
          <div className="TeamRows">
            <a href={`${fixture.fields.teamALink}`}>
              <img
                src={fixture.fields.teamALogo}
                height={90}
                width={90}
                alt="image"
              ></img>
            </a>
            <a className="TeamLinks" href={`${fixture.fields.teamALink}`}>
              <h3>{fixture.fields.teamA}</h3>
            </a>
            <a href={`${fixture.fields.matchDetails}`}>
              <h4 className="MatchButton">Match Details</h4>
            </a>
            <a className="TeamLinks" href={`${fixture.fields.teamBLink}`}>
              <h3>{fixture.fields.teamB}</h3>{" "}
            </a>
            <a href={`${fixture.fields.teamBLink}`}>
              <img
                src={fixture.fields.teamBLogo}
                height={90}
                width={90}
                alt="image"
              ></img>
            </a>
          </div>
        );
      })}
    </div>
  );
}
