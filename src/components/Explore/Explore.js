import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';


const Explore = () => {
    const [products,setProducts]=useState([]);
    // fetch data using useEffect and assing to packages variable 
    useEffect(()=>{
        fetch("https://enigmatic-stream-34553.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="container">
            <h1 className="my-5">Our Products</h1>
            <div className="row">
            {
                products.map(product=><Products
                product={product}
                key={product._id}
                ></Products>)
            }
            </div>
        </div>
    );
};
export default Explore;