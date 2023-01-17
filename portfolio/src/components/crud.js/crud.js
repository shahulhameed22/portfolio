import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './crud.css'

export function Crud(){
    return(
    <>
    <div className="container-fulid">
        <div className="col-lg-4 mr-auto ml-auto map" >
            <h1>Add Student Detail</h1>
            <input type="text" placeholder="First name" id="map1" className="map2"/>
            <input type="text" placeholder="Last Name" id="map3" className="map4"/>
            <input type="email" placeholder="Email" id="map5" className="map6"/>
            <input type="phone number" placeholder="Phone Number" id="map7" className="map8"/>
        </div>
  </div>
    </>
    );

}