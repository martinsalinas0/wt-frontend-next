import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="border-2 rounded-xl max-w-sm w-full m-3 p-5 shadow-xl bg-amber-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Username
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-amber-500 text-white font-semibold py-2 rounded-md hover:bg-amber-600 transition"
          >
            Login
          </button>

          <button className="" type="button">
            need help?
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
