import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Dashboard from "./../Pages/Dashboard";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import Error from "../Components/Error";
import About from "../Pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),

        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/cards/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,

        children: [
          {
            path: "/dashboard/Cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/whishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },

      {
        // path: "/product/:id",
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export { routes };
