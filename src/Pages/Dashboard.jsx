import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAllFavorites, removeFavorite } from "../LocalStorage";
import Cart from "./../Components/Cart";

const Dashboard = () => {
  const navigate = useNavigate();
  let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/dashboard") {
  //     navigate("Cart", { replace: true });
  //   }
  // }, [location, navigate]);

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setProducts(favorites);
  };

  // Sort the price
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  // Total price
  const totalPrice = products.reduce((x, product) => x + product.price, 0);

  // Handle purchase
  const handlePurchase = () => {
    setProducts([]);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="bg-bannerTwo h-[200px] max-w-screen-2xl mt-8">
        <h1 className="text-5xl text-white font-bold text-center pt-5 ">
          Dashboard
        </h1>
        <p className="font-thin text-white text-center pt-3 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <div className="flex items-center justify-center gap-3 mt-3">
          <Link to="/dashboard/Cart">
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Cart
            </button>
          </Link>
          <Link to="/dashboard/whishlist">
            <button className="bg-white text-purple-600 rounded-full px-3 py-1 border-2 border-white font-bold ">
              Wishlist
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <h1 className="text-2xl font-bold text-purple-500">Cart</h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold mr-3">
            Total price: ${totalPrice.toFixed(2)}
          </p>
          <button
            onClick={handleSort}
            className="btn border-2 border-purple-500 text-purple-500 bg-white rounded-full"
          >
            Sort by price
          </button>
          <button
            onClick={handlePurchase}
            className="btn border-2 border-purple-500 rounded-full bg-white text-purple-500 ml-3"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="my-11">
        {products.map((product) => (
          <Cart
            handleRemove={handleRemove}
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your purchase was successful!</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
