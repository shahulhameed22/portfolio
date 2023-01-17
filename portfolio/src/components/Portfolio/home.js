import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import propic from "./profilepic.jpg";

export function PortHome(){
    return(<>
      


    <div className="porthomebg container-fluid" id="home">
        
        <div className="container">
            <div className="row p-5">
                <div className="col-lg-1"/>
            <div className="col-lg-4 col-4">
                <img className=" propic rounded-circle" src={propic} height="230" width="230"/>
            </div>
            <div className="col-lg-6 text-left col-12 text-white name2">
                <p className="name1"><span className="iam">I'm</span><b> KEERTHANA</b></p>
                <p className="homecon">"Not the average but an ambitiously driven web developer"</p>
            </div>
            {/* <div className="col-lg-2"/> */}
            
        </div>
        </div>
        
    </div>


    
    </>);
}