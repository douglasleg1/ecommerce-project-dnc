import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss";


const Home = () => {
  return (
    <div className="Home">Home
      <button>
        <Link to={`/products/1`}>ir</Link>
      </button>
    </div>
  )
}

export default Home