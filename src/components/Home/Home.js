import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import './Home.css';
const Home = () => {
    const [products,setProducts]=useState([]);
    const [reviews,setReviews]= useState([]);
    // fetch data using useEffect and assing to packages variable 
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        fetch("http://localhost:5000/review")
        .then(res=>res.json())
        .then(data=>setReviews(data))
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
            <hr />
            <div className="container row">
            {
                reviews.map(review=> <div
                key={review._id}
                className="border col-lg-4"
                >
                    {review.name}
                    <Rating 
            initialRating={parseInt(review.rating)}
            readonly
            />                    {review.description}
                </div> )
            }
            </div>
            <hr />
            <h2>Extra Section</h2>
 
        </div>
    );
};

export default Home;