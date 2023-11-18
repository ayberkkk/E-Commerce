import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productsWithAmount = data.map((product) => ({
          ...product,
          amount: 0,
        }));
        setProducts(productsWithAmount);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
