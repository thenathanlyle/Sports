import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div className="Logo">
            <Link to="/Fixtures">
              <h1 className="Title">
                Sports<span>Grid</span>
              </h1>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/Spotlight">
              <h2 className="spotlightMatch">Discuss Match</h2>
            </Link>
            <Link to="/Fixtures">
              <h2 className="Fixtures">Fixtures</h2>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
