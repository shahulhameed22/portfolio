import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import html from './graphicdesign.jpg'
import java from './corejava.jpg'
import mysql from './javascript.jpg'
import javascriprt from './javaclass.jpg'

export function Certificate()
{
    return(
        <>
        
        <div className="container-fluid certificate-bg pb-5 text-white mb-3">
            <h1 className="col-12 text-center ">Certificate</h1>
            <div className="row">
                <div class="card col-lg-6 certificate-bg">
                <div class="card-body">
                <h1 class="card-title text-center">HTML,CSS,JavaScript</h1>
                <img src={html} height='500' width='500' className="container" alt="..."/>
                </div>
                </div>

                <div class="card col-lg-6 certificate-bg">
                <div class="card-body">
                <h1 class="card-title text-center">JavaScript</h1>
                <img src={javascriprt} class="container" alt="..."/>
                </div>
                </div>

             </div>


             <div className="row mt-4">
                <div class="card col-lg-6 certificate-bg">
                <div class="card-body">
                <h1 class="card-title text-center">Java</h1>
                <img src={java} class="container" alt="..."/>
                </div>
                </div>

                <div class="card col-lg-6 certificate-bg">
                <div class="card-body">
                <h1 class="card-title text-center">MySQL</h1>
                <img src={mysql} class="container" alt="..."/>
                </div>
                </div>

             </div>
             
        </div>
        </>
    );
}