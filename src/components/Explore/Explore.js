import React, { useEffect, useState } from 'react';
import Packages from '../Packages/Packages';

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
            <div className="row">
            {
                products.map(product=><Packages
                product={product}
                key={product._id}
                ></Packages>)
            }
            </div>
        </div>
    );
};
export default Explore;