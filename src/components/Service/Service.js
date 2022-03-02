import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, duration, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" /><br /><br />
            <h3>{name}</h3>
            <h6>Package: <span style={{color:'tomato'}}>{duration}</span></h6>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button style={{backgroundColor:'tomato', color:'white'}} className="btn ">Book Now </button>
            </Link>
        </div>
    );
};

export default Service;