import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Denzel Turambi</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="Art">Art</NavLink>
      <NavLink to="Contact">Contact</NavLink>
    </nav>
  )
}

export default Nav;