import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h3 className="text-center my-3">Please Register</h3>
        <div className="my-5 py-5 w-50 mx-auto" style={{ border: '3px solid gray' }}>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5">
                <input className="mb-3 p-1 w-100" placeholder="Name" {...register("name")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Email" {...register("email")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Phone" {...register("phone")} /> <br />
                <input {...register("date", { required: true })}
                type="date" placeholder="date"
                        defaultValue={new Date()} className=" mb-3 p-1" />
                    <br />
                <input className="mb-3 p-1 w-100" placeholder="Message" {...register("meassage")} /> <br />
                <input className="mb-3 p-1 w-100" {...register("title", { required: true })} /> <br />
                        
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Registration" className="bg-color" />
            </form>
            </div>
        </div>
    );
};

export default Register;