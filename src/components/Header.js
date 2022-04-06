import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left Section */}
      <a href="">
        <img
          src="/white.svg"
          alt="coursely logo"
          className="h-14 min-w-[150px] pr-3"
        />
      </a>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="border border-white h-12 w-12 items-center justify-center rounded-lg cursor-pointer sm:flex hidden">
          <img
            src="/languagelLogo.svg"
            alt="Language Logo"
            className="h-6 w-6 "
          />
        </div>
        <Link to="/explore">
          <a className="h-12 border border-white rounded-lg flex items-center w-auto px-4 md:w-[263px] justify-center font-mon text-sm whitespace-nowrap">
            Sign in
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
