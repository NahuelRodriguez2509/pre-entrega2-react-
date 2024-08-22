import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">

      <div className="Navbar-logo">
        <Link to="/">DRINKS</Link>
      </div>

      <div className="Navbar-links">
        <ul>
        
          <li>
          <Link to="/categoria/Aguas">AGUAS</Link>
            </li>
          <li>
          <Link to="/categoria/Vinos">VINOS</Link>
            </li>
          <li>
            <Link to="/categoria/Cervezas">CERVEZAS</Link>
            </li>
            <li>
            <Link to="/categoria/Gaseosas">GASESOSAS</Link>
            </li>
        </ul>
      </div>
      
    <CartWidget/>

    </nav>
  )
}

export default Navbar;