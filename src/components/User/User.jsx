import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-200">
        USER PROFILE
      </h2>
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <p className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-900">
              {user?.email || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <p className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-900">
              {user?.password || "*******"}
            </p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Remember Me
            </label>
            <p className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-900">
              {user?.remember ? "Yes" : "No"}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
