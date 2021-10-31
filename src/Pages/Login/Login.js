import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import './Login.css';
import useLogin from '../../Hooks/useLogin';


const Login = () => {
    const {id} = useParams()
  
    const { handleGoogle } = useLogin();

 

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
                                //get id for validate with find/filter
        fetch('https://rocky-wildwood-05535.herokuapp.com/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data?.email === data?.password) {
                // alert('Thank you! we will confirming you provided email address'            
                    console.log('successfully login', data);
                    reset()
                    window.location.href = '/dashboard'
          
            }
            else {
                console.log('wrong type');
            }
        })
    };



    return (
        <div className="my-5 py-5 w-50 mx-auto" style={{ border: '3px solid deepskyblue' }}>
            <div className="my-5 w-50 mx-auto">
            <h3 className="my-5 text-center">Please Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5" >
                <input className="mb-3 p-1 w-100" type="email" placeholder="Email" {...register("email")} /> <br />
                <input className="mb-3 p-1 w-100" type="password"
                        {...register("password", { pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{5,}$/})} placeholder="Valid Password" /> <br />
                        
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="bg-color" type="submit" value="Login" />
            </form>
            </div>
            <div className="text-center">
                <Button onClick={handleGoogle} className="bg-color">Sign In With Google</Button>
                <p className="my-3">Don't have account? <Link to="/register">Create a new account Now</Link></p>
            </div>
         
        </div>
    );
};

export default Login;