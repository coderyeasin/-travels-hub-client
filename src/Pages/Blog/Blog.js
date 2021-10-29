import React from 'react';
import { Row } from 'react-bootstrap';
import blog1 from '../../images/17.jpg'


const Blog = () => {
    return (
        <div className="my-5 mx-5">
            <h2 className="text-center my-5">Best Travel Stories from Travel Hub</h2>
            
            <Row>
            <div className="col-md-4">
            <img className="img-fluid" src={blog1} alt="" />
                <h2>There is one of the fines</h2>
            <h5>Author: Nobin Pakhi</h5>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed suscipit ipsam doloremque cum iste. Minima obcaecati fugiat, maiores corporis aperiam cupiditate iure, aliquid totam reprehenderit eum, voluptas eveniet dicta?</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            <div className="col-md-4">
            <img className="img-fluid" src={blog1} alt="" />
                <h2>There is one of the fines</h2>
            <h5>Author: Nobin Pakhi</h5>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed suscipit ipsam doloremque cum iste. Minima obcaecati fugiat, maiores corporis aperiam cupiditate iure, aliquid totam reprehenderit eum, voluptas eveniet dicta?</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            <div className="col-md-4">
            <img className="img-fluid" src={blog1} alt="" />
                <h2>There is one of the fines</h2>
            <h5>Author: Nobin Pakhi</h5>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed suscipit ipsam doloremque cum iste. Minima obcaecati fugiat, maiores corporis aperiam cupiditate iure, aliquid totam reprehenderit eum, voluptas eveniet dicta?</p>
                    </article>
                    <button className="bg-info border-0 mb-3 text-light p-2 rounded">Read More</button>
              </div>
            </Row>
        </div>
    );
};

export default Blog;