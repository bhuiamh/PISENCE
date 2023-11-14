import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BsPersonCircle, BsUiChecksGrid } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";

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
        className="border-transparent mb-2 text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        <AiFillHome className="mr-2" /> Summery Dashboard
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent mb-2 text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        <BsUiChecksGrid className="mr-2" /> Attendance Tracking
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent mb-2 text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        <BiSolidCctv className="mr-2" /> Behavioral Analytics
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent mb-2 text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        <FaTachometerAlt className="mr-2" /> Performance Tracking
      </Link>
    </>
  );
  return (
    <div className="min-h-screen">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/*___________Page content___________*/}
          <div></div>

          <div className="flex justify-between p-2 bg-base-300">
            <div className="">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <AiOutlineMenuFold className="h-7 w-7 text-orange-500" />
                ) : (
                  <AiOutlineMenuUnfold className="h-7 w-7 text-orange-500" />
                )}
              </label>
            </div>

            <div className="">
              <button className="btn btn-ghost">
                <BsPersonCircle className="h-7 w-7 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu mt-16 p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/*___________Sidebar content____________*/}
            {userItem}
          </ul>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
