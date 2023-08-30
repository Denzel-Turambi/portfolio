import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1 className="name-title" >Denzel Turambi</h1>
      <NavLink to="/about">
        <button>Let's Go!</button>
      </NavLink>
    </div>

  )
}

export default Welcome;