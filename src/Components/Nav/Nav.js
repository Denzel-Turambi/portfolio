import { NavLink, useLocation } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  const navLocation = useLocation();

  return (
    <nav className="nav-container">
      {navLocation.pathname !== '/' && (
        <div className="nav">
          <div className="nav-logo">
            <h1 className="logo-title">denzel turambi</h1>
          </div>
          <div className="nav-btn-container">
            <NavLink to="/" className="nav-btn">Home</NavLink>
            <NavLink to="/about" className="nav-btn">About</NavLink>
            <NavLink to="/projects" className="nav-btn">Projects</NavLink>
            <NavLink to="Art" className="nav-btn">Art</NavLink>
            <NavLink to="Contact" className="nav-btn">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav;