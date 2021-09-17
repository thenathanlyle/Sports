import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Game Title</h1>
      </Link>
    </nav>
  );
}
