import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import './Home.css';
const Home = () => {
    const [products,setProducts]=useState([]);
    // fetch data using useEffect and assing to packages variable 
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <Banner></Banner>
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

export default Home;