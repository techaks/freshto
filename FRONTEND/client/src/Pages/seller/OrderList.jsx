import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const {axios} = UseAppContext();

  const fetchOrders = async () => {
    try {
      const {data} =await axios.get('/api/order/seller');
      if(data.success){
        setOrders(data.orders)
      }

      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  };

  console.log(orders);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover opacity-60"
              src={assets.box_icon}
              alt="boxIcon"
            />
            <div>
              {order.items.map((item, index) => (
                <div key={index} className="flex flex-col ">
                  <p className="font-medium">
                    {item.product.name} <span>x {item.quantity}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="font-medium mb-1">
              {order.address}
            </p>
           
          </div>

          <p className="font-medium text-base my-auto text-black/70">
            ₹ {order.amount}
          </p>

          <div className="flex flex-col text-sm font-bold">
            <p>Method: {order.paymentType}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p  >Payment: <span className={`${order.isPaid ? " text-green-600" :"text-amber-400 "}`}>{order.isPaid ? " Paid" : " Pending"}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
