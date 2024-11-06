import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { addFavorite } from "../LocalStorage";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const singleProduct = data.find((product) => product.product_id == id);
    setProduct(singleProduct);
    // console.log(singleProduct);
  }, [data, id]);

  const {
    product_id,
    product_name,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};

  // js file added..!

  const handleFavorite = (product) => {
    addFavorite(product);
  };

  return (
    <>
      <div className="bg-bannerTwo h-[400px] rounded-xl mt-8">
        <h1 className="text-5xl text-white font-bold text-center pt-16 ">
          Product Details
        </h1>
        <p className="font-thin text-white text-center pt-3 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero bg-white min-h-[300px] w-4/6 mx-auto relative -top-52 rounded-xl  border-8 border-white-500">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-inner shadow-purple-500 min-h-[400px] "
          />
          <div>
            <h1 className="text-3xl font-bold">{product_name}</h1>
            <p className="text-xl font-semibold text-gray-500 mb-1">
              Price: $ {price}
            </p>

            <p
              className={`border-2 rounded-full px-3 mb-1 w-[150px] text-center ${
                availability
                  ? "border-green-500 text-green-500 bg-green-100"
                  : "border-red-500 text-red-500 bg-red-100"
              }`}
            >
              {availability ? "In stock" : "Out of stock"}
            </p>

            <p className="font-thin text-gray-500 mb-1">{description}</p>
            <h1 className="text-xl font-bold">Specification:</h1>
            <ol className="text-gray-500">
              {specification &&
                specification.map((item, index) => (
                  <li key={index}>{`${index + 1}. ${item}`}</li>
                ))}
            </ol>
            <h1 className="text-xl font-bold mt-1">Rating:</h1>
            <p className="flex items-center gap-1">
              <FcRating></FcRating>
              <FcRating></FcRating>
              <FcRating></FcRating>
              <FcRating></FcRating>
              <FcRating></FcRating>
              <p className="bg-gray-200 rounded-full px-1 ml-2">{rating}</p>
            </p>
            <div className="flex  items-center gap-3 mt-3">
              {/* to="/dashboard" */}
              <Link>
                <button
                  onClick={() => handleFavorite(product)}
                  className="flex justify-center items-center gap-1 bg-purple-500 rounded-full text-white px-3 py-1"
                >
                  Add to Card <MdAddShoppingCart></MdAddShoppingCart>
                </button>
              </Link>

              <Link to="/love">
                <button className="bg-gray-100 border-2 rounded-full p-2">
                  <GiSelfLove></GiSelfLove>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
