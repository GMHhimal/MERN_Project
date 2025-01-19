import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";

const URL = "http://Localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Users Report",
    onAfterPrint: () => alert("Users Report Successfully Download !"),
  });

  const[searchQuery,setSearchQuery]= useState("");
  const [noResult,setNoResult]=useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers =data.users.filter((user) => 
        Object.values(user).some((fields) =>
        fields.toString().toLowerCase().includes(searchQuery.toLowerCase())
        ))
        setUsers(filteredUsers);
        setNoResult(filteredUsers.length===0);
      });
  }

  return (
    <div>
      <Nav />
      <h1>Users Details display page</h1>

      <input onChange ={(e)=>setSearchQuery(e.target.value)}
      type="text"
      name="search"
      placeholder="Search User Details"></input>

      <button onClick={handleSearch}>Search</button>

      {noResult ? (
        <div>
          <p>No Users Found</p>
        </div>

      ) : (

      <div ref={ComponentsRef}>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
      )}
      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default Users;
