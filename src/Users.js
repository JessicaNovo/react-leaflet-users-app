import React from "react";
import "./Users.css";

export default function Users() {
  return (
    <div className="Users">
      <div class="row">
        <div class="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <h6 className="card-subtitle mb-2 text-muted">Company Name</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Phone: </li>
              <li class="list-group-item">Email: </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
