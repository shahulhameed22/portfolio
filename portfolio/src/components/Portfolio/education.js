import React from "react";
import study from "./study.png";
export function Education(){
return(
    <>

    <div className="container-fluid education">
        <div className="row">
            <div className="col-lg-6">
                <img src={study} className="col-lg-8"/>
            </div>
            <div className="col-lg-6">
            <div className=" pl-5 pt-5">
                <div className="col-lg-1"/>
                <div className="col-lg-10 p-4 col-10 deducation">
                     <h3 className="gtitle">Developer Skills</h3>
                     <p>A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive Web designs.</p>
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                     <h3 className="gtitle">Graphic Designer</h3>
                     <p>A love for creating powerful visual designs using digital illustrations,images and typography. Proficient in Adobe Photoshop.</p>
                
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                     <h3 className="gtitle">Graphic Designer</h3>
                     <p>A love for creating powerful visual designs using digital illustrations,images and typography. Proficient in Adobe Photoshop.</p>
                
                </div>
               
                
                </div>
            </div>
            <div className="col-lg-1"/>
        </div>
    </div>
    </>
);
}