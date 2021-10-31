import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner position-relative">
            <div className="w-50 mx-auto position-absolute bottom-0 end-0 start-0">
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        className="py-3"
            placeholder="Where to?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
            <FormControl
            placeholder="Destination"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Start Journey!</InputGroup.Text>
        </InputGroup>    
            </div>
            
        </div>
    );
};

export default Banner;