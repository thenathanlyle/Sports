import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFixtures } from "../services";

export default function Spotlight() {
  const [spotLight, setSpotLight] = useState([]);

  useEffect(() => {
    const getFixture = async () => {
      setSpotLight(await fetchFixtures());
    };
    getFixture();
  }, []);

  return (
    <div>
      <div className="TeamA">
        {spotLight.map((fixture) => {
          return <h3>{fixture.fields.teamA}</h3>;
        })}
      </div>
      <div className="TeamB">
        {spotLight.map((fixture) => {
          return <h3>{fixture.fields.teamB}</h3>;
        })}
      </div>
    </div>
  );
}
