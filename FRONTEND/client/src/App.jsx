import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { UseAppContext } from "./context/AppContext";
import Login from "./component/Login";
import AllProduct from "./Pages/AllProduct";
import ScrollProgressBar from "./component/Scroll";
import ProductCategory from "./Pages/ProductCategory";
import ProductDetail from "./component/ProductDetail";
import CartPage from "./Pages/CartPage";
import MyOrders from "./component/MyOrders";
import SellerLogin from "./component/Seller/SellerLogin";
import Dashboard from "./Pages/seller/Dashboard";
import OrderList from "./Pages/seller/OrderList";
import ProductList from "./Pages/seller/ProductList";
import AddProducts from "./Pages/seller/AddProducts";

const App = () => {
  const { showUserlogin, isSeller } = UseAppContext();
  const seller = useLocation().pathname.includes("seller");
  return (
    <div>
      {!seller && <Navbar />}

      <ScrollProgressBar />

      {showUserlogin && <Login />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:category" element={<ProductCategory />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />

        <Route path="/orders" element={<MyOrders />} />

        <Route path="/seller" element={ isSeller ? <Dashboard /> : <SellerLogin />}>
        <Route index  element={isSeller ? <AddProducts /> : null} />
        <Route path="order-list"  element={<OrderList />} />
        <Route path="product-list"  element={<ProductList />} />
        
        </Route>
      </Routes>

      {!seller && <Footer />}
    </div>
  );
};

export default App;
