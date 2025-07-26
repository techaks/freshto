import React from "react";

const MainBanner = () => {
  return (
    <div> 
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <img
        className="md:w-[30%] object-fit h-1/2"
          src="https://i.pinimg.com/736x/b3/37/2d/b3372d4bd8515bfeb7cfe8fc203fed74.jpg"
          alt=""
        />
        <div>
          <p className="font-bold text-4xl text-sky-500 text-center">Healthy choices start here</p>
          <p className="font-semibold text-xl  text-center text-[#59a835]">Eat Fresh. Live Healthy. Shop Smart with FreshTo</p>
        </div>

        <img
         className="md:w-[30%] h-1/2 object-fit "
          src="https://img3.exportersindia.com/product_images/bc-full/dir_164/4909789/grocery-items-1506570477-3361265.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainBanner;
