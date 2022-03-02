import React, { useEffect, useState } from 'react';

const useServices = () => {


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fierce-wave-16804.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services, setServices];

};

export default useServices;