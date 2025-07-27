import React from "react";
import { categories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
  return (
    <div className="mt-8">
        
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 ">
        {categories.map((category, index) => (
          <div
          onClick={()=>{navigate(`/product/${category.path.toLowerCase()}`); scrollTo(0,0)}}
            key={index}
            className={`flex flex-col items-center justify-center gap-4 mb-2 p-4 cursor-pointer transition-transform hover:scale-105 rounded-lg shadow-md duration-300 ease-in-out `}
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              className="w-28 h-28 object-cover"
              src={category.image}
              alt={category.name}
            />
            <p className="text-sm font-semibold">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
