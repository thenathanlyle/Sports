import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div className="Logo">
            <Link to="/Fixtures">
              <h1 className="Title">SportsGrid</h1>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/Spotlight">
              <h1 className="spotlightMatch">Spotlight Match</h1>
            </Link>
            <Link to="/Fixtures">
              <h1 className="Fixtures">Fixtures</h1>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
