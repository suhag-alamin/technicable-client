import { Link } from "react-router-dom";

const Error = () => {
  // page not found error with tailwind css

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-technibleRed">404</h1>
        <h2 className="text-6xl font-bold">Page Not Found</h2>
        <p className="text-2xl font-bold">
          The page you are looking for does not exist.
        </p>
        <button className="bg-techniblePrimary text-technibleWhite font-bold py-2 px-4 my-4 rounded">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
