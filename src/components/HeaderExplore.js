import React, { useState } from "react";
import NavExplore_Item from "./NavExplore_Item";

function HeaderExplore() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <div className="text-[#8E8D8D] h-[64px] flex items-center border-b-2 border-[#208458]">
      {/* Logo */}
      <img
        src="/black.svg"
        alt="Logo"
        className="h-[32px] min-w-[150px] pr-3"
      />

      {/* Nav Menu */}
      <div className="ml-auto lg:ml-0">
        <ul className="flex space-x-2 md:space-x-6">
          <NavExplore_Item icon="/compass.svg" title="Explore" primary />
          <NavExplore_Item icon="/match.svg" title="Match" />
          <NavExplore_Item icon="/bookmark.svg" title="Bookmarked" />
          <NavExplore_Item icon="/messages.svg" title="Messages" />
          <li
            className="flex items-center cursor-pointer"
            onClick={() => setOffcanvas(true)}
          >
            <img
              src="/menu.svg"
              alt="Compass Icon"
              className="w-[20px] h-[20px] mr-[12px] block lg:hidden"
            />
          </li>
        </ul>
      </div>

      {/* Avatar */}
      <div className="items-center ml-auto lg:flex hidden">
        <span className="text-sm text-[#1C1A1B] font-normal">
          Mila Krusovic
        </span>
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-[32px] h-[32px] object-cover rounded-lg ml-[12px]"
        />
      </div>

      {/* Offcanvas */}
      <div
        className={`min-h-screen bg-white p-3 fixed top-0 bottom-0 right-0 z-50 block lg:hidden transition-all duration-300 ${
          offcanvas ? "left-0" : "left-full"
        }`}
      >
        <ul className="flex space-y-3 flex-col">
          <li className="flex items-center cursor-pointer">
            <img
              src="/compass.svg"
              alt="Compass Icon"
              className="w-[20px] h-[20px] mr-[12px] block lg:hidden"
            />
            <span className={`text-lg font-normal text-[#208458]`}>
              {" "}
              Explore
            </span>
          </li>

          <li className="flex items-center cursor-pointer">
            <img
              src="/match.svg"
              alt="Match Icon"
              className="w-[20px] h-[20px] mr-[12px] block lg:hidden"
            />
            <span className={`text-lg font-normal`}> Match</span>
          </li>
          <li className="flex items-center cursor-pointer">
            <img
              src="/bookmark.svg"
              alt="Compass Icon"
              className="w-[20px] h-[20px] mr-[12px] block lg:hidden"
            />
            <span className={`text-lg font-normal`}> Bookmarked</span>
          </li>
          <li className="flex items-center cursor-pointer">
            <img
              src="/messages.svg"
              alt="Compass Icon"
              className="w-[20px] h-[20px] mr-[12px] block lg:hidden"
            />
            <span className={`text-lg font-normal`}> Messages</span>
          </li>
        </ul>

        {/* Close Button */}
        <div
          className="absolute top-4 right-4"
          onClick={() => setOffcanvas(false)}
        >
          <img src="/close.svg" alt="close button" className="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderExplore;
