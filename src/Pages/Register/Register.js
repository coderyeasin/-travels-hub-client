import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                alert('Congrats! Registration Successful Please Login')
                reset()
                window.location.href = '/login'
            }
        })
    };

   
    return (
        <div>
            <div className="my-5 py-5 w-50 mx-auto" style={{ border: '3px solid deepskyblue' }}>
                <h3 className="text-center my-3">Please Register</h3>
                
            <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5" >
                    <input className="mb-3 p-1 w-100" placeholder="Name" {...register("name")} /> <br />
                    <input className="mb-3 p-1 w-100" type="password"
                        {...register("password", { pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{5,}$/})} placeholder="Exp: 1 digit,1 uppercase&lowercase, min-5 charcter pass" /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Email" {...register("email")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Phone" {...register("phone")} /> <br />
                <input {...register("date", { required: true })}
                type="date" placeholder="date"
                        defaultValue={new Date()} className=" mb-3 p-1" />
                    <br />
                <input className="mb-3 p-1 w-100" placeholder="Message" {...register("message")} /> <br />
                <input className="mb-3 p-1 w-100" {...register("image", { required: true })} placeholder="Image Link" /> <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Registration" className="bg-color" />
                </form>
                
                <p className="my-3 text-center">Already an user? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;