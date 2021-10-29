import React from 'react';
import Blog from '../../Blog/Blog';
import Location from '../../Location/Location';
import Package from '../Package/Package';
import Upcoming from '../Upcoming/Upcoming';
import './Home.css';

// background-color:deepskyblue;

const Home = () => {
    return (
        <div className="home">
            <Package></Package>
            <Location></Location>
            <Blog></Blog>
        </div>
    );
};

export default Home;