import React from "react";
import ProductCard from "./ProductCard";
import { UseAppContext } from "../context/AppContext";

const Bestseller = () => {
  const { products } = UseAppContext();
  return (
    <div className="mt-10">
      <p className="font-bold text-2xl mb-5">Best Sellers</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center"> 
      {products
        .filter((item) => item.inStock)
        .slice(0, 5)
        .map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>

    </div>
  );
};

export default Bestseller;
