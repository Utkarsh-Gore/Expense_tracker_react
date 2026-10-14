import { NavLink } from "react-router-dom";
import "./Nav2.css";

function Nav2() {
  return (
    <div className="nav2-container">
      <NavLink to="" className="box5">
        Dashboard
      </NavLink>
      <NavLink to="/statistics" className="box5">
        Statistics
      </NavLink>
    </div>
  );
}

export default Nav2;