import { Link, useLocation } from "react-router-dom";
import './Welcome.css'

const Welcome = () => {
  const location = useLocation();
  
  return (
    <div className="welcome-container">
      {location.pathname === '/' && (
        <div className="welcome-info">
          <h1 className="name-title">denzel turambi</h1>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h2 className="go-btn">Let's Go!</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Welcome;