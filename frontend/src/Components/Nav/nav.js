import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Stack, Button, ButtonGroup } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const Nav = () => { //Function changed cause of MUI
  return (
    // changed from div to Stack
    <Stack direction='row'> 
      <ul className="home-ul">
        <ButtonGroup  variant="contained" size = "small">
          <Button>
        <li className="home-l">
          <Link to="/mainhome" className="active home-a">
            <h4>Home</h4>
          </Link>
        </li>
        </Button>
        <Button>
        <li className="home-l">
          <Link to="/adduser" className="active home-a">
            <h4>Add User</h4>
          </Link>
        </li>
        </Button>
        <Button>
        <li className="home-l">
          <Link to="/userdetails" className="active home-a">
            <h4>User Details</h4>
          </Link>
        </li>
        </Button>
        
        
          {/* Register Button */}
        <li className="home-l"> 
          <Link to="/register" className="active home-a">
            <Button variant="contained" color="primary" size="large" startIcon={<PersonAddAlt1Icon />}>
              Register
            </Button>
          </Link>
        </li>
        {/* Login Button */}
        <li className="home-l">
          <Link to="/login" className="active home-a">
            <Button variant="contained" color="secondary" size="large" startIcon={<LoginIcon />}>
              Login
            </Button>
          </Link>
        </li>
        </ButtonGroup>
      </ul>
      </Stack>
  );
};

export default Nav;
