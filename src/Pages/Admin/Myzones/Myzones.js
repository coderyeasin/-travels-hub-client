import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Myzones = () => {
    const { user } = useAuth()
    const [cart, setCart] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/myzones/${user?.email}`
        fetch(url)
            .then(res => res.json())
        .then(data => setCart(data))
    }, [user?.email])
    console.log(cart);
    return (
        <div>
            <h3>My Zones {cart?.length}</h3>
        </div>
    );
};

export default Myzones;