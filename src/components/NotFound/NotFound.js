import React from 'react';
import notFound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className="container">
            <img style={{width:'100%', height:'500px', position:'center'}} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;