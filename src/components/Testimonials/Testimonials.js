import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const testimonialData = [
    {
        quote : 'Best Negronis from GianPaolo ever!!! So nice and amicable!! The beach is awesome. The beach personnel is top notch! Very friendly and accommodating always wanting to know if you need anything. Superb service on food and drinks. Breakfasts are outstanding in their outdoor veranda!',
        name : 'Wilson Harry',
        from : 'California',
        img : 'https://i.ibb.co/zRX5m0w/01-1.jpg'
        
    },
    {
        quote : 'Excelente atención y comida. Mayer nos atendio increible servicio. Service was amazing our waitress was Mayer and everything was so good, the food, the place and the servíce let us spend a great time.',
        name : 'Ema Gomez',
        from : 'Berlin',
        img : 'https://i.ibb.co/rfs0MFJ/02.jpg'
    },
    {
        quote : 'When we got there, the room we reserved was not available. No apology was given and no attempt was made to remedy the situation. Very poor concierge service. they could not help us book anything and Italo attitude was kind of condescending and talking down to us.',
        name : 'Aliza Farari',
        from : 'Dhaka',
        img : 'https://i.ibb.co/ySjHV5J/nwz-park.jpg'
    }
]

const Testimonials = () => {
    return (
       <section style={{marginLeft:'65px'}} className="testimonials mt-5 pt-5">
           <div className="container row ">
               <div className="section-header text-center">
                   <h3 style={{color:'darkblue', marginLeft:'78px'}}>What Our Tourist Says </h3>
               </div>
               <div className="card-deck gap-5 mt-5 d-flex">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div><br /><br /><br />
       </section>
    );
};

export default Testimonials;