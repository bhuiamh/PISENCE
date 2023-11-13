import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const userItem = (
    <>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Acquired Classes
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Enrolled Class
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Payment History
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Home
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Profile
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Change Password
      </Link>
    </>
  );
  return (
    <div className="min-h-screen pt-8">
      <nav className="bg-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <div className="sm:hidden">
                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  aria-label="Toggle menu"
                  onClick={toggleMenu}
                >
                  <AiOutlineMenu></AiOutlineMenu>
                </button>
              </div>
              <div className="hidden sm:flex sm:space-x-8">{userItem}</div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}

        <div className="sm:hidden mx-3">
          <div className="flex flex-col items-center mt-2 ">{userItem}</div>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
