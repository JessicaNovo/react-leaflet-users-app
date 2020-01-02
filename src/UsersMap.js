import React, { useState } from "react";
import axios from "axios";
import "./UsersMap.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function UsersMap() {
  function handleData(response) {
    setUserData(response.data.slice(0, 10));
    setReady(true);
  }

  const [userData, setUserData] = useState({});
  const [ready, setReady] = useState(false);

  let marker = L.icon({
    iconUrl: "https://img.icons8.com/plasticine/100/000000/marker.png",
    iconSize: [50, 50]
  });

  if (ready) {
    return (
      <div className="UsersMap">
        <h2 className="map-title">User Location</h2>
        <Map className="map all" center={[-43.9509, -34.4618]} zoom={2}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {userData.map(function(user) {
            return (
              <Marker
                position={[user.address.geo.lat, user.address.geo.lng]}
                icon={marker}
                key={user.id}
              >
                <Popup>
                  <strong>{user.name}</strong>
                  <br />
                  Company: {user.company.name}
                  <br />
                  City: {user.address.city}
                </Popup>
              </Marker>
            );
          })}
        </Map>
        <a href="https://icons8.com/icon/124191/marker" className="credits">
          Marker icon by Icons8
        </a>
      </div>
    );
  } else {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(usersUrl).then(handleData);
    return <div>Loading...</div>;
  }
}
