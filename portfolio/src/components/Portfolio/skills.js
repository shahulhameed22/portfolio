import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {htmlicon} from './htmlicon.png';

export function Skills(){
    return(
        <>
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
        </>
    );
}

