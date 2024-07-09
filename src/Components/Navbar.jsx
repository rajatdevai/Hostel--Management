import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-4 shadow">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://puchd.ac.in/asset/pu-logo.png"
            height="80"
            width="80"
            className="inline-block"
            alt="Panjab University Logo"
          />
          <div className="ml-4 max-w-xs">
            <h1 className="text-2xl font-bold text-primaryGreen drop-shadow-lg">TEJA SINGH HALL</h1>
            <h1 className="text-primaryGreen">
              BOYS HOSTEL-6 (Panjab University)
              <br />
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/auth/sign-in"
          className="bg-green-300 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </Link>
        <Link
          to="/auth/sign-up"
          className="bg-green-300 text-black px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
