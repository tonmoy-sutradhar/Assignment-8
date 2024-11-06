import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import { getAllFavorites } from "../LocalStorage";

const Navbar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);

  return (
    <div className="navbar backdrop-blur-xl bg-purple-500 z-50 fixed px-14 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-purple-800 " : "hover:text-purple-800"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-purple-800 " : "hover:text-purple-800"
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-purple-800 " : "hover:text-purple-800"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-purple-800 " : "hover:text-purple-800"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-white">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-bold text-white">
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-purple-800 " : "hover:text-purple-800"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-purple-800 " : "hover:text-purple-800"
              }`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-purple-800 " : "hover:text-purple-800"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-purple-800 " : "hover:text-purple-800"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-5 text-xl ">
        <Link
          to="/dashboard"
          className="bg-white rounded-full items-center p-2 border-2 border-purple-300  gap-3 "
        >
          <FaShoppingCart></FaShoppingCart>{" "}
          <span className="absolute -top-1 ml-5 text-white">
            {products.length}
          </span>
        </Link>
        <Link
          to="/dashboard"
          className="bg-white rounded-full items-center p-2 border-2 border-purple-300 "
        >
          <GiSelfLove></GiSelfLove>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
