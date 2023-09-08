import { useEffect, useState } from "react";

interface DashboardFormProps {
  name: string;
  email: string;
}

function DashboardForm() {
  // access theh user data from local storage
  const [data, setData] = useState<DashboardFormProps>();

  useEffect(() => { 
    const userData = localStorage.getItem("userData");
    console.log(userData)
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);



  // handle signout
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    console.log("Successfully logged out")
    window.location.href = "/";
  };

  return (
    <div >
      {data && (
          <div className="">
            <label className="text-lg font-semibold text-gray-600">
              Welcome, {data.name}
            </label>
            <p className="text-lg text-gray-600">Email: {data.email}</p>
        </div>
        )}
      <div className="">
        <button
          onClick={handleSignOut}
          id="logout-link"
          className="bg-red-500 hover:bg-red-600 text-gray-700 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default DashboardForm;
