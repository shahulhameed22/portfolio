import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import propic from "./profilepic.jpg";
import girl from "./girl.png";


export function PortTotal(){
    return(<>
      


    <div className="porthomebg container-fluid">
        
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-12">
                <img className=" propic rounded-circle" src={propic} height="250" width="250"/>
            </div>
            <div className="col-lg-12 text-center col-12 text-left text-white">
                <h1 className="title ">FULL STACK DEVELOPER</h1>
            </div>
            <div className="line"></div>
        </div>
        </div>
        
    </div>



    {/* ABOUT */}


    <div className="container-fluid pb-5 pt-5 portabout" id="about">
            <h1 className="text-center">About Me</h1>
            <div className="row">
            <div className="col-lg-8">
                <div className="row pl-5 pt-5">
                <div className="col-lg-1"/>
                <div className="col-lg-5 p-4 col-10 dskill">
                     <h3 className="gtitle">Developer Skills</h3>
                     <p>A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive Web designs.</p>
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-5 p-4 col-10 dskill">
                     <h3 className="gtitle">Graphic Designer</h3>
                     <p>A love for creating powerful visual designs using digital illustrations,images and typography. Proficient in Adobe Photoshop.</p>
                
                </div>
                <div className="row container-fluid justify-content-center m-5">
                    <div className="col-lg-1"/>
                <div className="col-lg-6 p-4 col-12  dskill">
                     <h3 className="gtitle">Graphic Designer</h3>
                     <p>A love for creating powerful visual designs using digital illustrations,images and typography. Proficient in Adobe Photoshop.</p>
                
                </div>
                
                </div>
                
                </div>
                
                </div>
                <div className="col-lg-4 justify-content-center">
                    <div className="row">
                
                <div className="col-lg-12">
                <img src={girl} className="img-fluid" height="480" width="480"/>
                </div>

                </div>
                <div className="col-lg-1"></div>
                
                </div>
                <div className="col-lg-12 text-center">
                    <h2>Multitalented. Intuitive. Dedicated.</h2>

                </div>
            </div>


        </div>



        {/* SKILLS */}

        <div className="container-fluid skills pt-5">
            <div className="row ">
                <div className="col-lg-12 ">
                    <p className="quote text-center"><span className="quotes2">"</span>It's not just what it looks like and feels like.<br/><span className="quote2"> Design is how it works.<span className="quotes2">"</span></span></p>
                    <p className="text-center steve">- Steve Jobs</p>
                </div>
            </div>


            <div className="row pt-5 pb-5">
                <div className="col-lg-2"/>
               <div className="col-lg-8">
                <div className="row pb-5">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">Html</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar html2" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div> 
                        </div>

                    </div>



                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">Css</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar css" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div> 
                        </div>

                    </div>


                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">JavaScript</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar js" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div> 
                        </div>

                    </div>

                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">Java</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar java" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div> 
                        </div>

                    </div>

                   

                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">React Js</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar react" role="progressbar"  aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">82%</div> 
                        </div>

                    </div>


                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">MySql</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar mysql" role="progressbar"  aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">92%</div> 
                        </div>

                    </div>

                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">Node Js</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar nodejs" role="progressbar"  aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div> 
                        </div>

                    </div>

                    <div className="col-lg-4">
                    
                    </div>
                    <div className="col-lg-8 mb-4">
                    <h4 className="text-white">Photoshop</h4>
                        <div class="progress html1">
                        
                        <div class="progress-bar photoshop" role="progressbar"  aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">82%</div> 
                        </div>

                    </div>

                    </div>
               </div>
               <div className="col-lg-2"/>

            </div>

        </div>






    
    </>);
}