import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddNewZones = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://rocky-wildwood-05535.herokuapp.com/tourism',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                alert('Submitted Successfully,  within 24 hours Approved')
                reset()
                window.location.href = '/manageallzones'
            }
        })
    };

    return (
        <div>
            <div className="my-5 py-5 mx-auto">
            <h3 className="text-center my-3">ADD A Tour Zone</h3>
                <p className="text-center my-3">wanna know more organize a tour</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="text-center w-75 p-3 mx-auto m-5" style={{ border: '3px solid deepskyblue' }}>
                <input {...register("date", { required: true })} type="datetime-local" placeholder="date" defaultValue={new Date()} className=" mb-3 p-1 w-50" />
                    <br />
                    <input className="mb-3 p-1 w-100" placeholder="Give a unique ID" {...register("id")} /> <br />
                    
                    <input className="mb-3 p-1 w-100" placeholder="Title" {...register("title")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="Destination" {...register("destination")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="Departure Place" {...register("departure")} /> <br />
                    
                    <input className="mb-3 p-1 w-100" placeholder="Included with this tours" {...register("included")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="NotIncluded with this tours" {...register("notinclude")} /> <br />
                    
                    <input className="mb-3 p-1 w-100" placeholder="Around the world/Adventure cost" {...register("cost")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="Dress court" {...register("dress")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="Age Limit(If Have)" {...register("age")} /> <br />
                    <input className="mb-3 p-1 w-100" placeholder="To allow Male/Female" {...register("gender")} /> <br />               

                    <textarea className="mb-3 p-1 w-100" placeholder="Description For This Tour Zones" {...register("description")} /> <br />
                    
                    <input className="img-fluid mb-3 p-1 w-100" {...register("image", { required: true })} placeholder="Image Link" /> <br />
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" value="New TourZones" className="bg-color" />
                    
                </form>
            </div>
        </div>
    );
};

export default AddNewZones;