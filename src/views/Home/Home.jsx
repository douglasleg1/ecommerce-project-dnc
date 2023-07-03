import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss";
import HeaderStore from '../../components/HeaderStore/HeaderStore';
import SearchBar from '../../components/SearchBar/SearchBar';


const Home = () => {
  return (
    <section className="home">
      <HeaderStore/>
      <SearchBar/>
      <button>
        <Link to={`/products/1`}>ir</Link>
      </button>
    </section>
  )
}

export default Home