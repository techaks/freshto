import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import HappyMood from "../component/HappyMood";

const CartPage = () => {

  const navigate = useNavigate();
  const {
    totalCartPrice,
    cartItems,
    products,
    updateCartQuantity,
    removeFromCart,
    countCartItems,
  } = UseAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  console.log(cartItems);

  const getCart = () => {
    let cartData = [];
    for (const item in cartItems) {
      const product = products.find((prod) => prod._id === item);
      product.quantity = cartItems[item];
      cartData.push(product);
    }
    setCartArray(cartData);
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  return (
    products.length > 0 &&
    cartItems && (
      <>
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
          <div className="flex-1 max-w-4xl ">
            <h1 className="text-3xl font-medium mb-6">
              Shopping Cart{" "}
              <span className="text-sm text-indigo-500">
                ( {countCartItems()} )
              </span>
            </h1>

            <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3 ">
              <p className="text-left">Product Details</p>
              <p className="text-center">Subtotal</p>
              <p className="text-center">Action</p>
            </div>

            {cartArray.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3   "
              >
                <div className="flex items-center md:gap-6 gap-3 ">
                  <div
                    onClick={() => {
                      navigate(`/product/${product.category}/${product._id}`);
                      scrollTo(0, 0);
                    }}
                    className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden"
                  >
                    <img
                      className="max-w-full h-full object-cover"
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className="hidden md:block font-semibold">
                      {product.name}
                    </p>
                    <div className="font-normal text-gray-500/70">
                      <p>
                        Category: <span>{product.category || "N/A"}</span>
                      </p>
                      <div className="flex items-center">
                        <p>Qty:</p>
                        <select
                          onChange={(e) =>
                            updateCartQuantity(
                              product._id,
                              Number(e.target.value)
                            )
                          }
                          value={cartItems[product._id]}
                          className="outline-none"
                        >
                          {Array(
                            cartItems[product._id] > 9
                              ? cartItems[product._id]
                              : 9
                          )
                            .fill("")
                            .map((_, index) => (
                              <option key={index} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  ₹ {product.offerPrice * product.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer mx-auto"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                      stroke="#FF532E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}

            <button
              onClick={() => {
                navigate("/products");
                scrollTo(0, 0);
              }}
              className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium group"
            >
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                  stroke="#615fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Continue Shopping
            </button>
          </div>

          <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
            <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
            <hr className="border-gray-300 my-5" />

            <div className="mb-6">
              <p className="text-sm font-medium uppercase">Delivery Address</p>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
              />

              <p className="text-sm font-medium uppercase mt-6">
                Payment Method
              </p>

              <select
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
              >
                <option value="COD">Cash On Delivery</option>
                <option value="Online">Online Payment</option>
              </select>
            </div>

            <hr className="border-gray-300" />

            <div className="text-gray-500 mt-4 space-y-2">
              <p className="flex justify-between">
                <span>Price</span>
                <span> ₹ {totalCartPrice()}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600">Free</span>
              </p>
              <p className="flex justify-between">
                <span>GST (1%)</span>
                <span>₹ {(totalCartPrice() * 1) / 100}</span>
              </p>
              <p className="flex justify-between text-lg font-medium mt-3">
                <span>Total Amount:</span>
                <span>₹ {totalCartPrice() + (totalCartPrice() * 1) / 100}</span>
              </p>
            </div>

            <button className="w-full py-3 mt-6 cursor-pointer bg-[#59a835] text-white font-medium hover:font-bold hover:bg-[#56913b] transition rounded-md">
              {paymentMethod === "COD" ? "Place Order" : "Pay Online"}
            </button>
          </div>
        </div>

        <div>
          <HappyMood />
        </div>
      </>
    )
  );
};

export default CartPage;
