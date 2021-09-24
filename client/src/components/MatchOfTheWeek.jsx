import { useEffect, useState } from "react";
import { fetchFixtures } from "../services";

export default function MatchOfTheWeek() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getFixtures = async () => {
      setGames(await fetchFixtures());
    };
    getFixtures();
  }, []);

  return (
    <div className="Teams">
      {games.splice(0, 1).map((fixture, index) => {
        return (
          <div className="TeamRows" key={index}>
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
