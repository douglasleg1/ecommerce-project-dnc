import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss";
import HeaderStore from '../../components/HeaderStore/HeaderStore';


const Home = () => {
  return (
    <div className="Home">
      <HeaderStore/>
      <button>
        <Link to={`/products/1`}>ir</Link>
      </button>
    </div>
  )
}

export default Home