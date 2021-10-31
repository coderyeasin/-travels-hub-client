import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import pics from '../../../images/05.jpg'

const Updated = () => {
    const [user, setUser] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const url = `https://rocky-wildwood-05535.herokuapp.com/users/${id}`
        fetch(url)
            .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    
    const handleUsername = e => {
        const chngName = e.target.value;
        const updateName = { name: chngName, email: user.email, phone: user.phone }
        setUser(updateName)
    }
    const handleEmail = e => {
        const chngName = e.target.value;
        const updateName = { name: user.name, email: chngName, phone: user.phone }
        setUser(updateName)
    }
    const handlePhone = e => {
        const chngName = e.target.value;
        const updateName = { name: user.name, email: user.email, phone: chngName}
        setUser(updateName)
    }

//update
    const handleUpdated = (e) => {
        const url = `https://rocky-wildwood-05535.herokuapp.com/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfullly added user info')
                    setUser({})
                    window.location.href='/dashboard'
                }
            })
        
        e.preventDefault()
    }
    

    return (
        <div className="text-center">
            <h2 className="my-5">Please Update your Info </h2>
            <Container>
            <Row>
                <div className="col-md-6">
                    <img className="img-fluid" src={pics} alt="" />
                </div>
                <div className="col-md-6"><form>
                <input className="mb-3" type="text" onChange={handleUsername} name="" value={user.name || ''}  id="" placeholder="Name"/>
                <input className="mb-3" type="email" onChange={handleEmail} name="" value={user.email || ''}  id="" placeholder="Email" />
                <input className="mb-3" type="tel" onChange={handlePhone} name="" value={user.phone || ''}  id="" placeholder="phone" /><br />
                        
                <input type="submit" onClick={handleUpdated} value="Updated" className="btn btn-success" />
            </form></div>
            </Row>
           </Container>
        </div>
    );
};

export default Updated;