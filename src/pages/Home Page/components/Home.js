import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FetchUserData = () => {
  const [userData, setUserData] = useState([]);
  console.log("post names", userData);
  console.log("before data", userData);

  // fetching user data using fetch api from json placeholder
  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserData(json));
  };

  // render the getch api using useEffect hook
  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  // retriving specific onClick id
  const getUserId = (event) => {
    const userID = event.currentTarget.id;

    navigate("/userData", { state: { id: userID } });
  };

  return (
    <>
   
      <table class="table">
        <thead class="thead-dark">
          <tr class="table-dark">
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Post</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the json data  */}
          {userData.length > 0
            ? userData.map((user) => (
                <tr>
                  <td key={user.id}> {user.id}</td>
                  <td> {user.name} </td>
                  <td> {user.email}</td>
                  <td>
                    {" "}
                    {user.address.street} {user.address.suite}{" "}
                    {user.address.city} {user.address.zipcode}
                  </td>
                  <td>
                    <button id={user.id} onClick={getUserId} style={{backgroundColor:'#212529',color:'white'}}>
                      View Post
                    </button>
                  </td>

                  {/* <td><Link to="/userData" state={{id : user.id}}></Link>view</td> */}
                </tr>
              ))
            : "Loading..."}
        </tbody>
      </table>
    </>
  );
};

export default FetchUserData;
