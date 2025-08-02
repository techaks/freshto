import React from "react";
import ProductCard from "./ProductCard";
import { UseAppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Bestseller = () => {
  const { products } = UseAppContext();

  return products ? (
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
  ): <div><Spinner/></div>
};

export default Bestseller;
