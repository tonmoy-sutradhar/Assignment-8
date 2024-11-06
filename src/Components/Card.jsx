import { Link, useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();
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

  return (
    <div className="border-2 border-purple-500 p-3 rounded-xl shadow-lg shadow-purple-500">
      <img
        className=" w-full h-[400px] overflow-hidden"
        src={product_image}
        alt="image"
      />

      <h1 className="text-xl font-bold">Name: {product_name}</h1>
      <p className="text-gray-500 font-semibold mb-2 mt-1">Price: ${price}</p>
      <button
        className="border-2 border-purple-500 rounded-full p-1 px-2 font-bold text-purple-600 "
        onClick={() => navigate(`/product/${product_id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
// onClick={() => navigate("/product/:id")}
