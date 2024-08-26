import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../Assets/product_cart_icon.jpeg'
import product_list from '../../Assets/product_list.jpeg'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={product_list} alt="" />
                    <p>Product List</p>
                </div>
            </Link>


        </div>
    )
}

export default Sidebar