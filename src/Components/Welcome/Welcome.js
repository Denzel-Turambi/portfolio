import { NavLink, useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  
  return (
    <div>
      {location.pathname === '/' && (
        <div>
          <h1 className="name-title">Denzel Turambi</h1>
          <NavLink to="/about">
            <button>Let's Go!</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Welcome;