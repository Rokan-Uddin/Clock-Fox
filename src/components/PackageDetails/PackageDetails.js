import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PackageDetails.css';
const PackageDetails = () => {
    const [loading,setLoading]=useState(false);
    const [productDetails,setProduct]=useState({});
    const {packageID: productID}= useParams();
    const {user}=useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history= useHistory();

    //load package details infomation based on package id
    useEffect(()=>{
      fetch(`https://enigmatic-stream-34553.herokuapp.com/products/${productID}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data)
        setLoading(true)
      })
    },[productID])

    //send the booking information with package details,user details etc to the database.
    const onSubmit = data => {
      data.email=user.email;
      data.name=user.displayName;
      data.packageId=productID;
      data.title=productDetails.name;
      data.brand=productDetails.brand;
      data.material=productDetails.material;
      data.status=false;
      axios.post('https://enigmatic-stream-34553.herokuapp.com/order', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('added successfully');
              reset();
              history.push('/');
          }
      })
   };
   console.log(productDetails)
    return (
      <div>
        {
          !loading && <div>
              <Spinner animation="border" role="status">
                 <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
        }
        {
        loading &&  <div>
         <div className="container my-5">
                  <div className="row">
                      <hr />
                      <div className="col-lg-4 col-sm-12">
                            <img className="p-3 border border-secondary border-4 rounded-circle rounder-3 service-img" src={productDetails.url} alt="" />
                      </div>
                      <div className="col-lg-8 col-sm-12 d-flex align-items-center justify-content-center">
                          <div className="product-info">
                          <h2 className="mb-5">{productDetails.name}</h2>
                          <p> Brand :  {productDetails.brand}</p>
                          <p>Material : {productDetails.material}</p>
                          <p>Price : ${productDetails.price}</p>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-lg-8">
                            <h2>Overview</h2>
                            <p className="mx-5">{productDetails.description}</p>
                      </div>
                      <div className="col-lg-4 container d-flex justify-content-center align-items-center">
                              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} required  />
                                    <input defaultValue={user.email} required />
                                    <input  placeholder="Address" {...register("address", {required:true})} />
                                    {errors.address &&  <span className="error">Address is required</span>}
                                    <input   placeholder="Phone" {...register("phone", {required:true})} />
                                    {errors.phone &&  <span className="error">Phone is required</span>}
                                    
                                    <input type="submit" value="Book Now" />
                              </form>
                      </div>
                  </div>
      </div>
      </div>
        }
      </div>
    );
};

export default PackageDetails;