import React, { useEffect, useState } from 'react';
import Packages from '../Packages/Packages';

const Explore = () => {
    const [products,setProducts]=useState([]);
    // fetch data using useEffect and assing to packages variable 
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className="row">
            {
                products.map(product=><Packages
                product={product}
                key={product._id}
                ></Packages>)
            }
            </div>
            <h2>Review</h2>
            <h2>Extra Section</h2>
        </div>
    );
};
export default Explore;