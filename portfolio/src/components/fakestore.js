import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fakestore.css'
export function Fakestore(){
    const [products,setproducts]=useState([])
    useEffect (()=>{
        fetch("https://fakestoreapi.com/products?limit=20")
        .then(response=>response.json())
        .then(json=>setproducts(json))
        console.log(products)
    });

    return(
        <>
        <div className="container-fluid">
        <table border="3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Rating</th>
                    <th>Product Categrey</th>
                    <th>Product Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((value,index)=>(
         
         <tr>
                    
                        <td>{value.id}</td>
                        <td><img src={value.image} className='img-fluid'/></td>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.rating.rate}</td>
                        <td>{value.category}</td>
                        <td>{value.rating.count}</td>
                        </tr>
                        
                    ))
                }
               
            </tbody>
        </table>
        </div>
        </>
    );

}