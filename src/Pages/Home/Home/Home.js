import React from 'react';
import cover from '../../../images/cover.jpg'
import Package from '../Package/Package';
import Upcoming from '../Upcoming/Upcoming';
import './Home.css';

// background-color:deepskyblue;

const Home = () => {
    return (
        <div className="home">
            {/* <img src={cover} alt="" />
            <img src={cover} alt="" />
            <img src={cover} alt="" /> */}
            <Upcoming> </Upcoming>
            <Package></Package>
        </div>
    );
};

export default Home;