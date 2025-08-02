import React from "react";
import { assets } from "./../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { UseAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    setSearchQuery,
    searchQuery,
    countCartItems,
    totalCartPrice,
    axios,
  } = UseAppContext();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link
        onClick={() => setOpen(false)}
        to={"/"}
        className="flex items-center gap-2 text-[#59A835] font-bold text-lg"
      >
        <img className="w-10 h-10" src={assets.food_logo} alt="logo" />
        <p>FRESHTO</p>
      </Link>

      { 
         <div
          className="relative  cursor-pointer sm:hidden flex"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#56A637] w-[18px] h-[18px] rounded-full">
            {countCartItems()}
          </button>
        </div>
      }

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link
          to="/seller"
          className="font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          Seller
        </Link>
        <Link
          to="/products"
          className=" font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          All Products
        </Link>
        <Link
          to="/about"
          className=" font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          Contact
        </Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => {
              setSearchQuery(e.target.value);
              navigate("/products");
            }}
            className=" w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            value={searchQuery}
            placeholder="Search products"
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              clip-rule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          className="relative  cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#56A637] w-[18px] h-[18px] rounded-full">
            {countCartItems()}
          </button>
        </div>

        {!user ? (
          <p
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-10 py-2 bg-[#56A637] hover:bg-[#456637]  text-white rounded-full font-bold"
          >
            LOGIN
          </p>
        ) : (
          <div className=" relative group">
            <img className="w-10 " src={assets.profile_icon} alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white z-50 w-30 border border-gray-300 text-sm rounded-md cursor-pointer ">
              <li
                onClick={() => navigate("/orders")}
                className="hover:text-green-500 hover:bg-blue-50 px-3"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="hover:text-red-800 px-3  hover:bg-blue-50"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
      {
        open ?  <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg> :  <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      }
       

       
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/about"
          className=" font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="font-semibold text-gray-700 hover:text-indigo-500 transition"
        >
          Contact
        </Link>
        {user && (
          <>
            {" "}
            <Link
              to="/orders"
              onClick={() => setOpen(false)}
              className="font-semibold text-gray-700 hover:text-indigo-500 transition"
            >
              My-Orders
            </Link>
            <Link
              to="/"
              onClick={logout}
              className="font-semibold text-red-700 transition"
            >
              LogOut
            </Link>
          </>
        )}

        {!user && (
          <button  onClick={() => setShowUserLogin(true)} className="cursor-pointer px-6 py-2 mt-2 bg-[#59a835] hover:bg-[#364e2b] transition text-white rounded-full text-sm">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
