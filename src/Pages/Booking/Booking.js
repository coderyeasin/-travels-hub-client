import React, { useEffect, useState } from 'react';
import { Container, Nav, NavbarBrand, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';


const Booking = () => {
    let { id } = useParams()

    const [user, setUser] = useState([])
    const [tourid, setTourId] = useState({})
    console.log(id);

    //get dynamic id to load full details
    useEffect(() => {
        fetch('http://localhost:5000/tourism')
        .then(res => res.json())
    .then(data => setUser(data))
    },[])

    //find for unique data
    useEffect(() => {
        const matching = user.find(tour => tour.id == id)
       setTourId(matching) 
    }, [user]) //eikhane dependency must uses
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    /* 
    destination
departure
age
gender
notinclude

included
tourplan

    */
    return (
        <div className="booking">
            <Container className="mb-5">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="">Attractions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="">Tour Plan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="">Included</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="">Facilities</Nav.Link>
                </Nav.Item>
                </Nav>
                <Row className="my-5">
                    <div className="col-md-9">
                        <Row className="align-items-center">
                            <div className="col-md-8 order-2 position-relative">
                            <img src={tourid?.image} className="img-fluid selected" alt="" />
                        <article className="my-3 events  bottom-0">
                            <h3 className="my-3"><strong>Event Name:</strong> {tourid?.title}</h3>
                            <p className="my-3 fs-5"><strong>Description:</strong> {tourid?.description}</p>
                            </article>
                            </div>
                      
                            <div className="col-md-4 infos order-1">
                                <div className="infos">
                                <h2>Facilities</h2>
                                <h5>Destination: {tourid?.destination}</h5>
                                <h5>Age: {tourid?.age}</h5>
                                <h5>Gender: {tourid?.gender}</h5>
                                <h5>Don't Get: {tourid?.notinclude}</h5>
                                </div>
                                <div className="infos">
                                <h2>Included</h2>
                                <h4 className="my-3"> Per/Persons: ${tourid?.cost}</h4>
                                <h5>Destination: {tourid?.destination}</h5>
                                <h5>Age: {tourid?.age}</h5>
                                <h5>Gender: {tourid?.gender}</h5>
                                <h5>Don't Get: {tourid?.notinclude}</h5>
                                </div>
                                <div className="infos">
                                <h2>Must Know this</h2>
                                <h5>Destination: {tourid?.destination}</h5>
                                <h5>Age: {tourid?.age}</h5>
                                <h5>Gender: {tourid?.gender}</h5>
                                <h5>Don't Get: {tourid?.notinclude}</h5>
                                 </div>
                            
                        </div>
                        </Row>
                       
                    </div>
                    <div className="col-md-3">

                        <div className="my-5 py-5 mx-auto" style={{ border: '3px solid gray' }}>
                            <h1 className="text-center">Hurry Now!</h1>
                            <p className="text-center text-capitalize">Limited sit for next jump.</p>
                     <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5">
                <input className="mb-3 p-1 w-100" placeholder="Name" {...register("name")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Email" {...register("email")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Phone" {...register("phone")} /> <br />
                <input {...register("date", { required: true })}
                type="date" placeholder="date"
                        defaultValue={new Date()} className=" mb-3 p-1" />
                    <br />
                <input className="mb-3 p-1 w-100" placeholder="Message" {...register("message")} /> <br />
                <input className="mb-3 p-1 w-100" {...register("country", { required: true })} placeholder="Country Code" /> <br />
                        
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Book" className="bg-color" />
            </form>
            </div>
                    </div>
                </Row>
            </Container>


        </div>
    );
};

export default Booking;