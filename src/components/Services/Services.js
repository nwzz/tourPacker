import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fierce-wave-16804.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    return (
        <div id="services" className="container">
            <h2 className="mt-5" style={{color:'darkblue'}}>Our Popular Packages</h2><br />
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div><br /><br />
        </div>
    );
};

export default Services;