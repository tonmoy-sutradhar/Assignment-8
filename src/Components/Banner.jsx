import { Link } from "react-router-dom";
import "./banner/banner.css";
import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <>
      <div className="bg-bannerTwo h-[450px] rounded-xl">
        <h1 className="text-5xl font-bold text-white text-center pt-9">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="font-thin text-white text-center pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="text-center pt-4">
          <Link to="/dashboard">
            <button className="btn text-purple-500 bg-white rounded-full font-bold">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-4/6 p-4 border rounded-xl -top-40  ml-52  border-white-500">
        <img
          className="rounded-xl w-full lg:h-[450px]"
          src={banner}
          alt="banner"
        />
      </div>

      {/* <div className="hero  min-h-[200px] md:min-h-[300px] w-4/5  mx-auto relative -top-20 rounded-xl  border-8 border-white-500">
        <img src={banner} alt="banner" />
      </div> */}

      <div>
        <h1 className="text-3xl text-gray-500 font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
    </>
  );
};

export default Banner;
