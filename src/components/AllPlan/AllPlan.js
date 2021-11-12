import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllPlan = () => {
            const [MyProducts,setMyProducts]=useState([]);
            const [loading,setLoading]=useState(false);

            //load all confirmed plan/plackage of all user
            useEffect(()=>{
                axios.get('https://enigmatic-stream-34553.herokuapp.com/allorder')
                .then(res => {
                    setMyProducts(res.data);
                    setLoading(true)
                })
            },[loading])
            //delete a confirmed plan/package 
            const handleDelete=(_id)=>{
                const sure= window.confirm("Are you sure?")
                if(sure) {
                    axios.delete(`https://enigmatic-stream-34553.herokuapp.com/allorder?id=${_id}`)
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

            //update plan pending/approved status
            const handleUpdate=(_id,status)=>{
                console.log(_id,status)
                const sure= window.confirm("Are you sure?")
                if(sure) {
                    axios.put(`https://enigmatic-stream-34553.herokuapp.com/allorder?id=${_id}&&status=${status}`)
                    .then(res => {
                        if(res.status){
                            setLoading(false)
                            alert("Successfully updated")
                        }
                        else {
                            alert("Something is wrong,please try again.")
                        }
                    })
                }
            }
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
            <div className="container mt-5">
                <h3>This is confirmed package list of all tourists.</h3>

                {
                    MyProducts.map(MyProduct=> <div
                    key={MyProduct._id}
                    className="row g-4 m-3 border border-4"
                    >
                        <div className="col-lg-9 row">
                            <h4 className="col-lg-12">{MyProduct.title}(<span className="fs-6">
                                <i className={ !MyProduct.status ? "fas fa-spinner me-2 text-danger" : "fas fa-check-circle me-2 text-success"}></i>
                                {MyProduct.status ? "Shipped" : "Pending"}</span>)
                            </h4>
                            <p>Customer: <span className="text-primary">{MyProduct.name}</span></p>
                        </div>
                        <div className="col-lg-3 row">

                            
                            <div className="m-0">
                            <button onClick={()=>handleDelete(MyProduct._id)} className="delete-btn" ><i className="fas fa-trash-alt me-2"></i>Delete</button>
                            <button onClick={()=>handleUpdate(MyProduct._id,MyProduct.status)} className={ MyProduct.status ? "approve-btn px-3 mt-2" : "reject-btn px-3"} >
                                {MyProduct.status ? "Reject" : "Approve"}
                            </button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            }
        </div>
    );
};

export default AllPlan;