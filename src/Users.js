import React, { useState } from "react";
import axios from "axios";
import "./Users.css";
import UsersMap from "./UsersMap";
import { Link } from "react-router-dom";

export default function Users() {
  function handleData(response) {
    setUserData(response.data.slice(0, 10));
    setReady(true);
  }

  const [userData, setUserData] = useState("");
  const [ready, setReady] = useState(false);

  if (ready) {
    return (
      <div className="Users">
        <h1 className="main-title">User profile</h1>
        <div className="row">
          {userData.map(function(user) {
            console.log(user.id);
            return (
              <div className="col-sm-4 user-cards" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.company.name}
                    </h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Phone: {user.phone}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                  </ul>
                  <div className="card-body">
                    <Link
                      to={{ pathname: "/Profile", state: { user: user.id } }}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <UsersMap />
      </div>
    );
  } else {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(usersUrl).then(handleData);
    return <div>Loading...</div>;
  }
}
