import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyTour = () => {
    const { user } = useAuth()
    const [tour, setTour] = useState([])
    const [booked, setBooked] = useState(false)

    useEffect(() => {
        const url = `https://rocky-wildwood-05535.herokuapp.com/myzones/${user?.email}`
        fetch(url)           
            .then(res => res.json())
            .then(data => setTour(data))        
    },[user?.email, booked])


    const tours = tour.filter(pd => pd?.tours && pd?.message || pd?.phone)
    console.log(tours);

    // //Delete
    const handleDelUser = id => {
        console.log(id);
        const procced = window.confirm('Are you sure want to delete?')
       if (procced) {
        fetch(`https://rocky-wildwood-05535.herokuapp.com/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('success');
                    setBooked(!booked)
                }
                else {
                    setBooked(false)
                }
            });
       }
    };


    return (
        <div>
        <h3 className="text-center my-5">Selected TourZones:  {tours?.length}</h3>
            
            <Container>
                <Row>
                    {  tours?.map(zones => <div className="col-md-3 bg-info p-1 m-1" key={zones?._id}>
                    <button onClick={() => handleDelUser(zones._id)} style={{float:'right'}} className="text-danger border-danger">X</button>
                        <h5>Title: {zones?.tours}</h5>
                        <h6>Booking Confirm: {zones?.date}</h6>
                        <h6><strong>Code:</strong> {zones?.country}</h6>
                        <p>
                            <span><strong>Phone:</strong> {zones?.phone}</span> <br />
                            <span><strong>Message:</strong> {zones?.message}</span> <br />                 
                        </p>
            </div>)}
                </Row>
           </Container>
    </div>
    );
};

export default MyTour;