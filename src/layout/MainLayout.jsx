import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "../Pages/About";
const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar></Navbar>
      </div>

      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-292px)] py-12 container mx-auto px-11">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
