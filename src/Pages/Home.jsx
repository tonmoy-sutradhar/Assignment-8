import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>

      <div className="grid lg:grid-cols-7 md:grid-cols-1">
        {/* Categories Button section */}
        <div className="col-span-1">
          <Categories categories={data}></Categories>
        </div>

        {/* Dynamic data Section */}
        <div className="col-span-6 w-full mr-32">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
