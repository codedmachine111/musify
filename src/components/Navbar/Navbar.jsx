import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><span id="diff">m</span></Link>
      </div>
      <div className="nav-menu">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars"></i>
        </label>
        <ul className="list">
          <li id="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" id="d">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
