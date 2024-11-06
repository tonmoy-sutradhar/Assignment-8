import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllFavorites, removeFavorite } from "../LocalStorage";
import Cart from "./../Components/Cart";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setProducts(favorites);
  };
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-purple-500"> Wishlist</h1>
      </div>
      <div className=" my-11">
        {/* All products card --- {category} */}
        {products.map((product) => (
          <div key={product.id}></div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
