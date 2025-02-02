import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Users from "./Components/UserDetails/Users";
import Register from "./Components/Register/Register";
import UpdateUsers from "./Components/UpdateUser/UpdateUser";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdetails/:id" element={<UpdateUsers />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
