import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import "./Products.scss";
import HeaderStore from "../../components/HeaderStore/HeaderStore";
import SearchBar from "../../components/SearchBar/SearchBar";

const Products = ({ data }) => {
  const { productsId } = useParams();
  const selectedProduct = data.find((product) => product.id == productsId);
  return (
    <section className="product">
      <HeaderStore />
      <SearchBar />
      <ProductDetail data={selectedProduct} />
    </section>
  );
};

export default Products;