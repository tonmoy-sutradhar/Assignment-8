import { useState } from "react";
import { MdDelete } from "react-icons/md";
import sortBy from "sort-by";
const cart = ({ product, handleRemove }) => {
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

  // const [p, setP] = useState(product);
  // const handleSort = (sortBy) => {
  //   if (sortBy === price) {
  //     const sorted = [...product].sort((a, b) => b.price - a.price);
  //     setP(sorted);
  //   }
  // };
  return (
    <>
      {/* <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Product cart container</h1>
        </div>
        <div>
          <button
            // onClick={() => handleSort(price)}
            className="btn border-2 border-purple-500 text-purple-500 bg-white rounded-full"
          >
            Sort by price
          </button>
          <button className="btn border-2 border-purple-500 rounded-full bg-white text-purple-500 ml-3">
            Payment
          </button>
        </div>
      </div> */}

      <div className="flex justify-around items-center w-6/12 mx-auto border-2 mb-3 border-purple-500 rounded-xl p-3">
        <div>
          <img className="w-28" src={product_image} alt="" />
        </div>
        <div>
          <h1>{product_name}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <button
          onClick={() => handleRemove(product.product_id)}
          className="text-red-500 text-4xl"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </>
  );
};

export default cart;
