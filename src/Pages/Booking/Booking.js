import React, { useEffect, useState } from 'react';
import { Container, Nav, NavbarBrand, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Booking = () => {
    let { id } = useParams()
    const {user} = useAuth()
    const [zones, setZones] = useState([])
    const [tourid, setTourId] = useState({})
    console.log(id);

    //get dynamic id to load full details
    useEffect(() => {
        fetch(`http://localhost:5000/tourism`)
        .then(res => res.json())
    .then(data => setZones(data))
    },[])

    //find for unique data
    useEffect(() => {
        const matching = zones.find(tour => tour.id == id)
       setTourId(matching) 
    }, [zones]) //eikhane dependency must uses
    
    const history = useHistory();

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
            if (data?.insertedId) {
                alert('Maybe it is a great journey with us! Thank You.')
                reset()
                history.push('/dashboard')
            }
        })
    };
    return (
        <div className="booking">
            <Container className="mb-5">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="fs-5" href="">Attractions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="fs-5" eventKey="">Tour Plan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="fs-5" href="">Included</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="fs-5" eventKey="">Facilities</Nav.Link>
                </Nav.Item>
                </Nav>
                <Row className="my-5">
                    <div className="col-md-9">
                        <Row className="align-items-center">
                            <div className="col-md-8 order-2 position-relative">
                            <img src={tourid?.image} className="img-fluid selected" alt="" />
                        <article className="my-3 events  bottom-0">
                            <h3 className="my-3"><strong>Event Name:</strong> {tourid?.title}</h3>
                                    <p className="my-3">
                                        <strong>Destination:</strong> {tourid?.destination} <br />
                                        <strong>Departure:</strong> {tourid?.departure} <br />
                                    </p>
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
                    {user?.uid &&
                            <div className="text-center">
                            <img className="img-fluid" src={user.photoURL} width="50px" height="50px" alt="" style={{borderRadius: '80px'}} />
                            <h3>Username: {user?.displayName}</h3>
                            <h4>Email: {user?.email}</h4>
                            {user?.uid && 
                                <p>{user.phoneNumber}</p>
                            }
                            <p>Last Sign In: {user.metadata.lastSignInTime}</p>
                            </div>
                        }
                        <div className="py-3 mx-auto" style={{ border: '3px solid deepskyblue' }}>
                            <h1 className="text-center">Hurry Now!</h1>
                            <p className="text-center text-capitalize">Limited sit for next jump.</p>
                     <form onSubmit={handleSubmit(onSubmit)} className="text-center m-5">
                <input className="mb-3 p-1 w-100" placeholder="title" {...register("tours")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Email" {...register("email")} /> <br />
                <input className="mb-3 p-1 w-100" placeholder="Phone" {...register("phone")} /> <br />
                <input {...register("date", { required: true })}
                type="datetime-local" placeholder="select date"
                        defaultValue={new Date()} className="w-50 mb-3 p-1" />
                    <br />
                <input className="mb-3 p-1 w-100" placeholder="Confirm Message" {...register("message")} /> <br />
                <input className="mb-3 p-1 w-100" {...register("country", { required: true })} placeholder="Coupon Code(If have?)" /> <br />
                        
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