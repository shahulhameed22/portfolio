import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';





export function Assessment(){
    const[products,setproducts]=useState([])
    useEffect(()=>{ 
        fetch('http://localhost:3000/fakestore.json')
        .then(response=>response.json())
        .then(json=>setproducts(json))
        console.log(products)
    })
    return(
        <>
        <div className="cardcontainer"> 
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>TABLES</h3>
                </div> 
            </div>    
                <div className="row col-lg-12 ,mt-3">
                    {
                            products.map((value,index)=>(
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-title text-center">
                                            <p>{value.id}</p>
                                            <p>{value.title}</p>
                                            <p>{value.price}</p>
                                            <p>{value.description}</p>
                                            <p>{value.categorey}</p>
                                            <img className="img-fluid" src={value.image}/>
                                            <p>{value.rating.rate}</p>
                                            <p>{value.rating.count}</p>
                                            

                                        </div>

                                    </div>
                                </div>
                        ))
                            }

                </div>
                </div>
        </>
    );
}