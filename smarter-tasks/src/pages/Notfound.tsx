import { Link } from "react-router-dom";

const Notfound = () => {
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-8">Oops! Page not found.</p>
      <Link to="/home"  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
       <button id="backToHomeButton">Back to Home</button> 
      </Link>
    </div>
  );
};

export default Notfound;
