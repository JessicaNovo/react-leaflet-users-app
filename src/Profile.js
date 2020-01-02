import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Profile(props) {
  console.log();

  function handleData(response) {
    setUserData({
      name: response.data[number - 1].name,
      username: response.data[number - 1].username,
      email: response.data[number - 1].email,
      phone: response.data[number - 1].phone,
      website: response.data[number - 1].website,
      company: response.data[number - 1].company.name,
      business: response.data[number - 1].company.bs,
      slogan: response.data[number - 1].company.catchPhrase,
      street: response.data[number - 1].address.street,
      suite: response.data[number - 1].address.suite,
      city: response.data[number - 1].address.city,
      zipcode: response.data[number - 1].address.zipcode,
      latitude: response.data[number - 1].address.geo.lat,
      longitude: response.data[number - 1].address.geo.lng
    });
    setReady(true);
  }

  const [userData, setUserData] = useState("");
  const [ready, setReady] = useState(false);

  let number = props.location.state.user;

  let marker = L.icon({
    iconUrl: "https://img.icons8.com/plasticine/100/000000/marker.png",
    iconSize: [50, 50]
  });

  if (ready) {
    return (
      <div className="Profile">
        <div className="container">
          <header>
            <nav>
              <Link to="/">Back</Link>
            </nav>
          </header>
          <div className="row">
            <div className="col-sm-6">
              <h1 className="name">{userData.name}</h1>
              <small>{userData.username}</small>
              <h2 className="company">{userData.company}</h2>
              <span className="business">{userData.business}</span>
              <p>"{userData.slogan}"</p>
              <h3 className="contacts">Contacts:</h3>
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>
                      <span>Phone:</span> {userData.phone}
                    </li>
                    <li>
                      <span>Email:</span> {userData.email}
                    </li>
                    <li>
                      <span>Website:</span> {userData.website}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>
                      <span>Address:</span> {userData.street}, {userData.suite}
                      <br />
                      {userData.zipcode}, {userData.city}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Map
                className="map one"
                center={[userData.latitude, userData.longitude]}
                zoom={2}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[userData.latitude, userData.longitude]}
                  icon={marker}
                >
                  <Popup>
                    <strong>{userData.name}</strong>
                  </Popup>
                </Marker>
                ); })}
              </Map>
              <a
                href="https://icons8.com/icon/124191/marker"
                className="credits"
              >
                Marker icon by Icons8
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(usersUrl).then(handleData);
    return <div>Loading...</div>;
  }
}
