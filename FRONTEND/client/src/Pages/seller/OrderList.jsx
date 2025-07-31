import React, { useEffect, useState } from "react";
import { assets, dummyOrders } from "../../assets/assets";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
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
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city},{" "}
              {order.address.state},{order.address.zipcode},{" "}
              {order.address.country}
            </p>
          </div>

          <p className="font-medium text-base my-auto text-black/70">
            ₹ {order.amount}
          </p>

          <div className="flex flex-col text-sm font-bold">
            <p>Method: {order.paymentType}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p  >Payment: <span className={`${order.isPaid ? " text-green-600" :"text-amber-400 "}`}>{order.isPaid ? "Paid" : "Pending"}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
