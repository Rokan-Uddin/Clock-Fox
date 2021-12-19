import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
const Products = (props) => {
    const {_id,name,description,url,price,brand}=props.product;
    return (
        <div className="col-lg-4 col-sm-12">
            <div>
                <div className="row cart">
                    <div className="col-lg-12"><img src={url} alt="" /></div>
                    <div>
                        <div>
                        <h5 className="text-start mt-3 text-primary">{name}</h5>
                        </div>
                    </div>
                </div>
               <div  className="short-description">
               <small>{description.slice(0,200)} ...</small>
               </div>
                <div className="d-flex justify-content-between mx-3 pt-4">
                    <h5>$<span className="text-success">{price}</span></h5>
                    <h5>{brand}</h5>
                </div>
                <Link to={`/product/${_id}`} >
                        <button className="new-btn mb-3" >See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;

