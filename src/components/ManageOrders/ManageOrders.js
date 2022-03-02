import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';
import '../MyOrders/MyOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch('https://fierce-wave-16804.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
            console.log(data);
        })

    },[])



const handleDelete = (id) =>{

    const proceed = window.confirm('Are u sure to delete?');
        if(proceed){
            const url = `https://fierce-wave-16804.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted Successfully');
                const restOrders = orders.filter(order =>order._id !== id);
                setOrders(restOrders);
            }
        })
        }
}




    return (
        <div><br />
            <DashBoard></DashBoard><br />
            <h3 style={{color:'darkblue'}}>Manage The Orders</h3><br /><br />
           {/* {
               orders.map(order =><p
               style={{border:'1px solid red'}}
               key={order._id}>{order.firstName} :: {order.email}

               </p>)
           } */}
          <div className="justify-content-center order-table" >
          {
               orders.map(order =><table style={{width:'50%'}}
               key={order._id} className="table-decor" >
                
                   <tr>
                       {/* <td>{order.package}</td> */}
                       <td style={{width:'100px', height:'60px'}}>{order.firstName}</td>
                       <td style={{width:'200px'}}>{order.email}</td>
                       <td><Link to={`/booking/update/${order._id}`}><button className="btn btn-warning">Update</button></Link></td>
                       <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
                   </tr>
               </table>)
           }
          </div><br /><br /><br /><br />
        </div>
    );
};

export default ManageOrders;