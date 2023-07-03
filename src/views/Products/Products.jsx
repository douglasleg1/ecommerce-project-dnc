import React from 'react'
import { Link } from "react-router-dom"
import "./Products.scss";

const Products = () => {
  return (
    <div>Products
            <button><Link to={`/`}>Login</Link></button>
    </div>
  )
}

export default Products