import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, gogoleSignIn } = useAuth();
    return (
        <div className="my-5 py-5 w-50 mx-auto" style={{border:'3px solid gray'}}>
            <div className="text-center">
            <h3 className="my-5">Please Login</h3>
                <Button onClick={gogoleSignIn}>[logo] Sign In With Google</Button>
                <p className="my-3">Don't have account? <Link to="/register">Create a new account Now</Link></p>
            </div>
        </div>
    );
};

export default Login;