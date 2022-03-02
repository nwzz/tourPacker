import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://fierce-wave-16804.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
            console.log(data);
        })

    },[])



// const handleDelete = (id) =>{

//     const proceed = window.confirm('Are u sure to delete?');
//         if(proceed){
//             const url = `https://fierce-wave-16804.herokuapp.com/orders/${id}`;
//         fetch(url, {
//             method: 'DELETE',
            
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.deletedCount > 0){
//                 alert('deleted Successfully');
//                 const restOrders = orders.filter(user =>user._id !== id);
//                 setOrders(restOrders);
//             }
//         })
//         }
// }




    return (
        <div className=""><br />
            <DashBoard></DashBoard><br />
            <h3 style={{color:'darkblue'}}>List Of the Orders</h3><br /><br />
           {/* {
               orders.map(order =><p
               style={{border:'1px solid red'}}
               key={order._id}>{order.firstName} :: {order.email}

               </p>)
           } */}
          <div className="justify-content-center " >
          
              <table style={{width:'50%'}}
               className="order-table" >
                  <tr>
                    <th>Name</th><th>Email</th><th>Address</th><th>Phone</th><th>Extra</th>
                  </tr>
               {orders.map(order =><tr key={order._id}>
                       {/* <td className="table-cell" >{order.package}</td> */}
                       <td className="table-cell" >{order.firstName}</td>
                       <td className="table-cell" >{order.email}</td>
                       <td className="table-cell" >{order.address}</td>
                       <td className="table-cell" >{order.phone}</td>
                       <td>
                           <Link to="/booking/manageOrders"><button className="btn btn-info">Manage Order</button></Link>
                       </td>
                   </tr>
               )
           } </table>
          </div><br /><br /><br /><br />
        </div>
    );
};

export default MyOrders;