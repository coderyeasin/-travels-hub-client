import React from 'react';
import { Row } from 'react-bootstrap';
import blog1 from '../../images/17.jpg'
import blog2 from '../../images/13.jpg'
import blog3 from '../../images/14.jpg'


const Blog = () => {
    return (
        <div className="my-5 mx-5" id="blog">
            <h2 className="text-center my-5">Best Travel Stories from Travel Hub</h2>
            
            <Row>
            <div className="col-md-4">
            <img className="img-fluid" src={blog1} alt="" />
                    <h2>There is one of the fines</h2>
                    
            <h5>Author: Nokshi katha</h5>
            <article>
                <p>Norway has some long road tunnels, and my first day leads me through two, the longest over 13km. I’m heading east to Lysefjord, 42km long and one of the most beautiful. The target here is Preikestolen or Pulpit rock, high above the fjord, and it’s a popular climb with people of all ages. Still, it starts off steeply, then crosses boggy sections before levelling out at around 600m.</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            <div className="col-md-4">
            <img className="img-fluid" src={blog2} alt="" />
                <h2>There is one of the fines</h2>
            <h5>Author: Nobin Pakhi</h5>
            <article>
                <p>Norway has some long road tunnels, and my first day leads me through two, the longest over 13km. I’m heading east to Lysefjord, 42km long and one of the most beautiful. The target here is Preikestolen or Pulpit rock, high above the fjord, and it’s a popular climb with people of all ages. Still, it starts off steeply, then crosses boggy sections before levelling out at around 600m.</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            <div className="col-md-4">
            <img className="img-fluid" src={blog3} alt="" />
                <h2>There is one of the fines</h2>
            <h5>Author: Strwart carn</h5>
            <article>
                <p>Norway has some long road tunnels, and my first day leads me through two, the longest over 13km. I’m heading east to Lysefjord, 42km long and one of the most beautiful. The target here is Preikestolen or Pulpit rock, high above the fjord, and it’s a popular climb with people of all ages. Still, it starts off steeply, then crosses boggy sections before levelling out at around 600m.</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            </Row>
        </div>
    );
};

export default Blog;