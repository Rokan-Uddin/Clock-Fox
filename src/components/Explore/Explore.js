import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Products from '../Products/Products';


const Explore = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]= useState(false);
    // fetch data using useEffect and assing to packages variable 
    useEffect(()=>{
        fetch("https://enigmatic-stream-34553.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoading(true)
        })
    },[])
    return (
        <div className="container">
                {
                    !loading && <div>
                            <Spinner animation="border" role="status">
                                 <span className="visually-hidden">Loading...</span>
                             </Spinner>
                     </div>
                }
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