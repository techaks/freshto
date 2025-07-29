import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Dashboard = () => {


  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/order-list", icon: assets.order_icon },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <img className="w-24 h-12" src={assets.food_logo} alt="" />
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className="border rounded-full text-sm px-4 py-1">
            Logout
          </button>
        </div>
      </div>
      <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
        {sidebarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            end
            key={index}
            className={({ isActive }) =>
              `flex items-center py-3 px-4 gap-3 ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                  : "hover:bg-gray-100/90 border-white text-gray-700"
              }`
            }
          >
            <img src={item.icon} alt="img" />
            <p className="md:block hidden text-center">{item.name}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
