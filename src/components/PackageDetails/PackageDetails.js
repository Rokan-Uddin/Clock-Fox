import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PackageDetails.css';
const PackageDetails = () => {
    const [loading,setLoading]=useState(false);
    const [packageDetails,setPackage]=useState({});
    const {packageID}= useParams();
    const {user}=useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history= useHistory();

    console.log(packageID)
    //load package details infomation based on package id
    useEffect(()=>{
      fetch(`http://localhost:5000/products/${packageID}`)
      .then(response => response.json())
      .then(data => {
        setPackage(data)
        setLoading(true)
      })
    },[])

    //send the booking information with package details,user details etc to the database.
    const onSubmit = data => {
      data.email=user.email;
      data.name=user.displayName;
      data.packageId=packageID;
      data.title=packageDetails.name;
      data.date=packageDetails.startingDate;
      data.country=packageDetails.location;
      data.status=false;
      axios.post('https://guarded-fjord-59567.herokuapp.com/package', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('added successfully');
              reset();
              history.push('/myplan');
          }
      })
   };

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
                            <img className="p-3 border border-secondary border-4 rounded-circle rounder-3 service-img" src={packageDetails.url} alt="" />
                      </div>
                      <div className="col-lg-8 col-sm-12">
                          <div>
                          <h2 className="mb-5">{packageDetails.name}</h2>
                              <div className="row">
                                  <div className="col-lg-3 col-6">
                                      <i className="fas fa-map-marker-alt"></i> <span>Brand</span>
                                      <p>{packageDetails.brand}</p>
                                  </div>
                                  <div className="col-lg-3 col-6">
                                      <i className="fas fa-clock"></i> <span>Model</span>
                                      <p>{packageDetails.model}</p>
                                  </div>
                                  <div className="col-lg-3 col-6">
                                      <i className="fas fa-calendar-alt"></i> <span>Series</span>
                                      <p>{packageDetails.series}</p>
                                  </div>
                                  <div className="col-lg-3 col-6">
                                      <i className="fas fa-users"></i> <span>Material</span>
                                      <p>{packageDetails.material}</p>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-lg-8">
                            <h2>Overview</h2>
                            <p className="mx-5">{packageDetails.description}</p>
                      </div>
                      <div className="col-lg-4 container d-flex justify-content-center align-items-center">
                              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} required  />
                                    <input defaultValue={user.email} required />
                                    <input  placeholder="Address" {...register("address", {required:true})} />
                                    {errors.address &&  <span className="error">Address is required</span>}
                                    <input   placeholder="Phone" {...register("phone", {required:true})} />
                                    {errors.phone &&  <span className="error">Phone is required</span>}
                                    <input   placeholder="Total Member" {...register("quantity", {required:true})} />
                                    {errors.quantity &&  <span className="error">Number of Tourist should be confirmed</span>}
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