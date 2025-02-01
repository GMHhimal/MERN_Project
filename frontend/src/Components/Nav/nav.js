import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

function Nav() {
  return ( 
    <div>
      <ul className="home-ul">
        <li className="home-l">
          <Link to="/mainhome" className="active home-a">
            <h1>home</h1>
          </Link>
        </li>
        <li className="home-l">
        <Link to="/adduser" className="active home-a">
          <h1>Add User</h1>
          </Link>
        </li>
        <li className="home-l">
        <Link to="/userdetails" className="active home-a">
          <h1>user details</h1>
          </Link>
        </li>
        <li className="home-l">
        <Link to="/register" className="active home-a">
          <button>Register</button>
          </Link>
        </li>
        <li className="home-l">
        <Link to="/login" className="active home-a">
          <button>Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
