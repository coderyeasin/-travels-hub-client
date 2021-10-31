import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Banner.css';

const Banner = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="banner position-relative">
            <div className="w-50 mx-auto position-absolute bottom-0 end-0 start-0">
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        className="py-3"
            placeholder="Where to?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
            <FormControl
            placeholder="Destination"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Start Journey!</InputGroup.Text>
        </InputGroup>    
            </div>
            <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Banner;