import { addFavorite } from "../LocalStorage";
const Wishlist = ({ product, handleRemove }) => {
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

  const handleFavorite = (product) => {
    addFavorite(product);
  };

  return (
    <>
      <div className="flex justify-around items-center w-6/12 mx-auto border-2 mb-3 border-purple-500 rounded-xl p-3">
        <div>
          <img className="w-28" src={product_image} alt="" />
        </div>
        <div>
          <h1>{product_name}</h1>
          <p>{description}</p>
          <p>$ {price}</p>
        </div>
        <button
          onClick={() => handleFavorite(product)}
          className=" bg-purple-500 rounded-full text-white px-3 py-1"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Wishlist;
