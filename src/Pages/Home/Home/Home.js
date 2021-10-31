import React from 'react';
import Blog from '../../Blog/Blog';
import Location from '../../Location/Location';
import Package from '../Package/Package';
import Tourhub from '../Tourhub/Tourhub';
import Upcoming from '../Upcoming/Upcoming';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Upcoming></Upcoming>
            <Package></Package>
            <Location></Location>
            <Tourhub></Tourhub>
            <Blog></Blog>
        </div>
    );
};

export default Home;