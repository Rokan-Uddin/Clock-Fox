import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        axios.post('https://enigmatic-stream-34553.herokuapp.com/addproduct',data)
        .then(res=>{
            alert("Added Successfully")
            reset()
            history.push('/');
        })
    };
    return (
        <div>
              <h1 className="mt-3">Add a products</h1>
              
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input  placeholder="Title" {...register("name", {required:true})} />
                    {errors.name &&  <span className="error">Title is required</span>}
                    <input  placeholder="Brand" {...register("brand", {required:true})} />
                    {errors.brand &&  <span className="error">Brand is required</span>}
                    <input  placeholder="Material" {...register("material", {required:true})} />
                    {errors.material &&  <span className="error">Material is required</span>}
                    <input  placeholder="Price" {...register("price", {required:true})} />
                    {errors.price &&  <span className="error">Price is required</span>}
                    <textarea  placeholder="Description" {...register("description", {required:true})} rows="3" cols="35" />
                    {errors.description &&  <p className="error">Description is required</p>}
                    <input type="url" placeholder="Image url" {...register("url", {required:true})} />
                    {errors.url &&  <span className="error">Image URL is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;