import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './DashBoard.css';

const DashBoard = () => {
    const { user } = useAuth();
    return (
        <div className="d-flex justify-content-around dash-board">
            {
                user.email && <div>
                <Link to="/booking/newPackage" className="btn ms-5">Add new Tour Package</Link>
                <Link to="/booking/myOrders" className="btn ms-5">My Orders</Link>
                <Link to="/booking/manageOrders" className="btn ms-5">Manage Order</Link>
                <Link to="#" className="btn ms-5">Admin Panel</Link></div>
            }

            
        </div>
    );
};

export default DashBoard;