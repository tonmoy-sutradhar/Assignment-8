import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  // console.log(categories);
  return (
    <div>
      {/* {categories.map((category) => (
        <Link key={category.id}></Link>
      ))} */}

      <div className="join join-vertical gap-3 border-2 border-gray-200 bg-white p-2 mt-11">
        {categories.map((categoy) => (
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive
                  ? " btn-primary text-white rounded-full bg-purple-200 "
                  : "hover: rounded-full"
              }`
            }
            to={`cards/${categoy.category}`}
            key={categoy.category}
          >
            <button className="btn w-full rounded-full text-purple-500    ">
              {categoy.category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
