import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home" activeclassname="active">Home</NavLink>
      <NavLink to="/aboutus" activeclassname="active">About Us</NavLink>
      <NavLink to="/todos" activeclassname="active">Todos</NavLink>
    </nav>
  );
};

export default Navbar;
