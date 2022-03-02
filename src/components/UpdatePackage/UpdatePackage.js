import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import DashBoard from '../DashBoard/DashBoard';
import '../ServiceDetails/ServiceDetails.css';

const UpdatePackage = () => {

    const {id} = useParams();
    const history = useHistory();
    const [orders, setOrders] = useState({});

    useEffect(() =>{
        const url = `https://fierce-wave-16804.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setOrders(data))
        console.log(orders);
    },[]);

    // const handleUpdatePackage = e =>{ 
    //     const UpdatePackage = e.target.value;
    //     const updateUser = {package: UpdatePackage, firstName: orders.firstName, email: orders.email, reservationDate: orders.reservationDate };
    //     setOrders(updateUser);
    //  }
    const handleUpdateName = e =>{ 
        const updateName = e.target.value;
        const updateUser = {firstName: updateName, email: orders.email, reservationDate: orders.reservationDate };
        setOrders(updateUser);
     }

    const handleUpdateEmail = e  =>{
        const updateEmail = e.target.value;
        const updateUser = {firstName: orders.firstName, email: updateEmail, reservationDate: orders.reservationDate };
        setOrders(updateUser);
    }

    const handleUpdateDate = e =>{
        const updateDate = e.target.value;
        const updateUser = {firstName: orders.firstName, email: orders.email, reservationDate: updateDate}
        setOrders(updateUser);
    }

    const handleUpdate = e =>{
        const url = `https://fierce-wave-16804.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                setOrders({});
                history.push('/booking/manageOrders');
            }
        })
        e.preventDefault();
    }




    return (
        <div><br />
            <DashBoard></DashBoard><br />
            <div>
            <h4>Update Your Order Mr. <span style={{color:'tomato'}}>{orders.firstName}</span></h4>
            <p>Id: {id}</p>
            <div style={{marginLeft:'420px', padding:'10px'}} >
            <form className="shipping-form" onSubmit={handleUpdate}>
                {/* <input type="text" placeholder="Your Selected Package" onChange={handleUpdatePackage} value={orders.package || ''} id="" /> */}
                <input type="text" placeholder="Your Name" onChange={handleUpdateName} value={orders.firstName || ''} id="" />
                <input type="email" placeholder="Your Email" onChange={handleUpdateEmail} value={orders.email || ''} id="" />
                <input type="date" onChange={handleUpdateDate} value={orders.reservationDate || ''} id="" />
                <input className="btn" style={{color:'white', backgroundColor:'tomato'}} type="submit"    value="Update" />
            </form>
            </div>

        </div><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default UpdatePackage;