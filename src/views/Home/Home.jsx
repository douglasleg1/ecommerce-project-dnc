import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss";
import HeaderStore from '../../components/HeaderStore/HeaderStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';


const Home = ({data}) => {
  return (
    <div className="home">
      <HeaderStore />
      <SearchBar />
      <div className="home__products">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home