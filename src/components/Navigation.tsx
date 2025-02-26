import React from "react";
import { NavLink } from "react-router-dom";


const Navigation: React.FC = () => {

  return (
    <nav
      className={`navbar navbar-expand`} style={ {backgroundColor: `#ff6f59ff`}}
    >

      <div>
        <ul className="navbar-nav" >
          <li>
            <NavLink
              to="/"
              className={"nav-link"} 
              style={{ backgroundColor: '#ff6f59ff', color: '#254441ff' }}
            >
              Home 🏠
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={"nav-link"} 
              style={{ backgroundColor: '#ff6f59ff', color: '#254441ff' }}
            >
              About Me📖
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={"nav-link"} 
              style={{ backgroundColor: '#ff6f59ff', color: '#254441ff' }}
            >
              Portfolio 💼
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactme"
              className={"nav-link"} 
              style={{ backgroundColor: '#ff6f59ff', color: '#254441ff' }}
            >
              Contact Me 📞             
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;