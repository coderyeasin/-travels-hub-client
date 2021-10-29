import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import './Login.css';


const Login = () => {
    // const { id } = useParams()
    
    const { user, gogoleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.form || "/home";

    // `/booking/:${id}`

    const handleGoogle = () => {
        gogoleSignIn()
        .then(result => {
          history.push(redirect_uri)
    })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-5 py-5 w-50 mx-auto" style={{ border: '3px solid gray' }}>
            <div className="my-5 w-50 mx-auto">
            <h3 className="my-5 text-center">Please Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5">
                <input className="mb-3 p-1 w-100" placeholder="Name" {...register("name")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Email" {...register("email")} /> <br />
                        
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="bg-color" type="submit" value="Login" />
            </form>
            </div>
            <div className="text-center">
                <Button onClick={handleGoogle} className="bg-color">[logo] Sign In With Google</Button>
                <p className="my-3">Don't have account? <Link to="/register">Create a new account Now</Link></p>
            </div>
         
        </div>
    );
};

export default Login;