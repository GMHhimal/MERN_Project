import React, { useState } from "react";
import Nav from "../Nav/nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("User Login Successfully");
        history("/userdetails");
      } else {
        alert("Login error");
      }
    } catch (err) {
      alert("error" + err.message);
    }
  };
  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: user.gmail,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Nav />
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Gmail</label>
        <br />
        <br />
        <input
          type="email"
          value={user.gmail}
          onChange={handleInputChange}
          name="gmail"
          placeholder="Enter your email"
          required
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={user.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Enter your password"
          required
          
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
