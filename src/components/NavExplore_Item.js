import React from "react";

function NavExplore_Item({ icon, title, primary }) {
  return (
    <li className="flex items-center cursor-pointer">
      <img
        src={icon}
        alt="Compass Icon"
        className="w-[20px] h-[20px] mr-[12px]"
      />
      <span
        className={`text-lg hidden lg:block font-normal ${
          primary && "text-[#208458]"
        }`}
      >
        {title}
      </span>
    </li>
  );
}

export default NavExplore_Item;
