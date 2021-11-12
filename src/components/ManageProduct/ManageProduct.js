import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageProduct = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch("https://enigmatic-stream-34553.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoading(true)
        })
    },[loading])
    const handleDelete=(_id)=>{
        const sure= window.confirm("Are you sure?")
        if(sure) {
            axios.delete(`https://enigmatic-stream-34553.herokuapp.com/products?id=${_id}`)
            .then(res => {
                if(res.status){
                    setLoading(false)
                    alert("Successfully Deleted")
                }
                else{
                    alert("Something is wrong,please try again")
                }
            })
        }
    }
    return (
        <div className="container">
                        {
                !loading && <div>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                </div>
            }
                {
                    products.map(product=> <div
                    key={product._id}
                    className="row g-4 m-3 border border-4"
                    >
                        <div className="col-lg-9 row">
                            <div className="col-lg-12 mb-4"><span className="fs-4" > {product.name}</span></div>
                            <div className="col-lg-6">Brand : <span className="text-info"> {product.brand}</span></div>
                            <div className="col-lg-6">Material : <span className="text-info"> {product.material}</span></div>
                        </div>
                        <div className="col-lg-3 row">        
                            <div className="mt-4 py-2">
                            <button onClick={()=>handleDelete(product._id)} className="delete-btn" ><i className="fas fa-trash-alt me-2"></i>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                }
        </div>
    );
};

export default ManageProduct;