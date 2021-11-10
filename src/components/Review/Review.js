import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {user}= useAuth();
    const history= useHistory();


    const onSubmit = data => {
        data.name=user.displayName;
        axios.post('http://localhost:5000/review', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
                history.push('/home');
            }
        })
     };
    return (
        <div className="container d-flex justify-content-center align-items-center w-50">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} required  />
              <select {...register("rating", {required:true})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
            </select>
              <textarea  placeholder="Description" {...register("description", {required:true})} rows="2" cols="38" />
            {errors.description &&  <p className="error">Description is required</p>}
              <input type="submit" value="Submit Review" />
        </form>
</div>
    );
};

export default Review;