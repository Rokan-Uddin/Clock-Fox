import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        console.log(data.email)
        axios.post('http://localhost:5000/makeadmin',data.email)
        .then(res=>{
            alert("Added Successfully")
            reset()
            history.push('/');
        })
    };
    return (
        <div>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input  placeholder="Enter Email" {...register("email", {required:true})} />
                    {errors.email &&  <span className="error">Email is required</span>}
                    

                    <input type="submit" />
                </form>
        </div>
    );
};

export default MakeAdmin;