import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { addToCart } = UseAppContext();
  const products = UseAppContext().product;
  const navigate = useNavigate();
  const { id } = useParams();

  const [thumbnail, setThumbnail] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter(
        (item) => item.category === product.category && item._id !== id
      );
      setRelatedProducts(productCopy.slice(0, 4));
    }
  }, [products , id]);

  useEffect(() => {
    setThumbnail(product?.image[0]);
  }, [product]);

  return (
    product && (
      <div className="max-w-6xl w-full px-6 md:mx-20 mt-10">
        <p className="font-semibold ">
          <Link  to={'/'} className="hover:text-green-700" >Home</Link> /<Link className="hover:text-green-700" to={'/products'}> Products</Link> /
          <Link className="hover:text-green-700" to={`/product/${product.category}`} > {product.category}</Link> /
          <span className="text-indigo-500"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    className="w-3.5 "
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    alt="star"
                  />
                ))}
              <p className="text-base ml-2">(4.5)</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ₹{product.price}
              </p>
              <p className="text-2xl font-medium">MRP: ₹{product.offerPrice}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-400 text-gray-800/80 hover:bg-gray-300 transition rounded-sm"
              >
                Add to Cart
              </button>
              <button onClick={() => {addToCart(product._id) ; navigate('/cart')}} className="w-full py-3.5 cursor-pointer font-medium bg-[#59a835] text-white hover:bg-[#80bb64] transition rounded-sm">
                Buy now
              </button>
            </div>
          </div>
        </div>

       
       <div className="mt-10">

       
        <p className="font-bold mt-6 text-blue-700 text-xl">RELATED ITEMS</p>

        <div className="flex mt-6  gap-4 flex-wrap items-center justify-center mb-10">
            {
                relatedProducts.filter((item) => item.inStock).map((product, index) =><ProductCard product={product} key={index} />)

            }
        </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
