import React from "react";
import "./App.css";
import Users from "./Users";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>User profile</h1>
        <Users />
        <a href="https://icons8.com/icon/124191/marker">
          Marker icon by Icons8
        </a>
      </div>
    </div>
  );
}
