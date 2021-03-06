import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4">
            
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer text-center">
                <img style={{borderRadius:'50%'}} className="mx-3" src={img} alt="" width="200"/>
                <div>
                    <h6 className="text-primary text-center">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            
       </div>
    );
};

export default Testimonial;