import { useEffect, useState } from "react";
import { dummyOrders } from "../assets/assets";
import { UseAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const {user , axios} = UseAppContext();

  const fetchOrders = async () => {

    try {
      const {data} = await axios.get('api/order/user');
      if(data.success){
        setOrders(data.orders)
      }
      
    } catch (error) {
      toast.error(error.message);
      console.log(error)
      
    }

  };
  // console.log(orders);

  useEffect(() => {
    if(user) {fetchOrders();}
    
  }, []);

  return (
    <div className="mx-12 mt-10 md:w-2/3 overflow-x-auto ">
      <p className="text-2xl font-bold  mt-10">My Orders</p>
      <div className="flex flex-col overflow-x-scroll">
        {orders.map((order, index) => (
          <div className="font-semibold " key={index}>
           
            <div
              className="flex gap-2 justify-between items-center border-b py-4"
              key={index}
            >
              <p>
                {" "}
                <span>OrderId : </span>
                {order._id}
              </p>
              <p>
                <span>Payment : </span>
                {order.paymentType}
              </p>
              <p>
                <span>Total Amount : ₹ </span>
                {order.amount}
              </p>
            </div>

            {order.items.map((item, index) => (
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-4 text-green-500 items-end " key={index}>
                <div className="flex gap-4 items-center">
                  <img
                    className="w-36 h-36"
                    src={item.product.images[0]}
                    alt="item"
                  />
                  <div>
                    <p>{item.product.name}</p>
                    <p>
                      <span>Category : </span>
                      {item.product.category}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="">Quantity : {item.quantity}</p>
                  <p className="">
                    Price : ₹ {item.product.offerPrice}
                  </p>
                </div>
                <div>
                    <p className="">{order.status}</p>
                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
