import React, { useState, useEffect, use } from "react";
import Nav from '../Nav/nav'
import axios from "axios";
import User from "../User/User";

const URL ="http://Localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Users() {

  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  },[])

  return (
    <div>
        <Nav />
      <h1>Users Details display page</h1>
      <div>
        {users && users.map((user,i) => (
          <div key={i}>
            <User user={user} />
          </div>

         ))}
      </div>
    </div>
  )
}

export default Users
