import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './cardview.css'
// import StarRatings from "star-ratings";
import { Link } from "react-router-dom";


export function Cardview(){
    const[products,setproducts]=useState([])
    useEffect(()=>{ 
        fetch('http://localhost:3000/istore.json')
        .then(response=>response.json())
        .then(json=>setproducts(json))
        console.log(products)
    })
    return(
        <>
        <div className="container-fluid text-center">
            <div className="row judtify-content-center">
                {products.map((value,index)=>(
                    <div className="cardnshadow col-lg-3 m1-5 p-2 mb-5">
                        {/* <img src={badge} height="50px" width="150px"/> */}

                        <img className="card-img-top container-fluid p-5" height="400px" width="200px" src={value.image}/>
                        <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <h3 className="card-text">{value.price}</h3>

                        </div>
                        {/* <h1><StarRatings rating={value.rating.rate} starDimention="25px" starSpacing="2px" starReatedColor="gold"/></h1> */}
                        <Link class="btn text-primary">view More...</Link>
                        <Link class="btn btn-warning">Add to cart</Link>

                    </div>

                ))};
            </div>
            </div>
            </>
            );
}