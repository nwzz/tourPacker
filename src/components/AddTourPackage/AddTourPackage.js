import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';

const AddTourPackage = () => {


    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();




    const onSubmit = data => {
        fetch('https://fierce-wave-16804.herokuapp.com/tours', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                    //location.push('/');
                }
            })
    }



    return (
        <div><br />
            <DashBoard></DashBoard><br />
            <h4><span style={{ color: 'darkblue' }}>Add a New Tour Package</span></h4><br />
            <form className="shipping-form" style={{marginLeft:'615px'}} onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder="New Place" {...register("name")} />
                <input placeholder="Package Duration"{...register("duration")} />
                <input placeholder="$ Package Price" {...register("price")} />
                <input placeholder="Package Description" {...register("description")} />
                <input placeholder="Image URL" {...register("img")} />
                <input type="file" name="Image" id="" />
                <input className="btn" style={{backgroundColor:'tomato', color:'white'}} type="submit" />
            </form><br /><br /><br />
        </div>
    );
};

export default AddTourPackage;