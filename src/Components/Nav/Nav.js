import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const navLocation = useLocation();

  return (
    <nav>
    {navLocation.pathname !== '/' && (
      <div>
        <h1>Denzel Turambi</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="Art">Art</NavLink>
        <NavLink to="Contact">Contact</NavLink>
      </div>
      )}
    </nav>
  )
}

export default Nav;