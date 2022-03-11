import React from 'react';
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Footer from '../core/Footer';
import Nav from '../core/Nav'


const AdminDashBoard = () => {
    const {
        user: { name, email }
    } = isAutheticated();

    const adminLeftSide = () => {
        return (
            <div className="card">
                <div className="crad-title text-dark bg-success">Admin Navigation</div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-links text-info">create categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/category" className="nav-links text-info">Manage categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-links text-info">create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-links text-info">Manage Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="admin/create/category" className="nav-links text-info">Manage orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='badge badge-success  bg-warning text-dark mr-2'>
                            Name:   
                        </span>
                             {name}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-success  bg-warning text-dark mr-2'>
                            Email:
                        </span>
                        {email}

                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-danger  bg-danger text-dark mr-2'>
                           Admin Area
                        </span>
                    </li>
                </ul>
            </div>
        )
    }


    return (
        <div>
            <Nav />
            <h5 className='text-center'>This is AdminDashBoard page</h5>
            <div className="container">
                <div className="row bg-warning p-3">
                    <div className="col-12 col-md-3">
                        {adminLeftSide()}
                    </div>
                    <div className="col-12 col-md-9">
                        {adminRightSide()}
                    </div>

                </div>
            </div>

            <Footer />
        </div>

    )
}

export default AdminDashBoard;
