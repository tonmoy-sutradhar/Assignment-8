import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {/* <p>{error.statusText || error.message}</p> */}
      {error.status === 404 && (
        <div className="text-center">
          <p className="text-4xl font-bold text-purple-500 mt-52">
            Page not found
          </p>
          <p className="text-4xl font-bold text-purple-500 mt-2">
            Go back to home page.
          </p>
          <Link to="/">
            <button className="text-white font-bold bg-purple-500 hover:bg-purple-700 ml-5 rounded-lg p-2 mt-4">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Error;
