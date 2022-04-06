import React from "react";
import CardExplore_Item from "./CardExplore_Item";
import CardExplore_Label from "./CardExplore_Label";

function CardExplore({ background, placeholder, title, primary, cardLogo }) {
  const defaultColor =
    "after:bg-gradient-to-t z-100 from-[#1C1A1B] to-rgba(28,26,27,0)0%";
  const primaryColor =
    "after:bg-gradient-to-t z-100 from-[#208458] to-rgba(28,26,27,0)0%";
  return (
    <div
      className={`text-[#555354] ${
        primary ? "bg-[#F4F9F6] border border-[#C7E0D5]" : "bg-white"
      } rounded-lg  pb-4 min-h-[388px] flex flex-col cursor-pointer`}
    >
      <div
        className={`relative after:content-['*'] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0  after:rounded-lg ${
          primary ? primaryColor : defaultColor
        }`}
      >
        <div>
          <img
            src={background}
            alt="Card Bg"
            className="h-[128px] w-full object-cover rounded-lg "
          />
        </div>

        <div>
          <img
            src={cardLogo}
            alt="card logo"
            className="absolute top-4 left-4 z-10"
          />
        </div>
        <span className="absolute bottom-2 text-white z-20 px-4">
          {placeholder}
        </span>
      </div>
      <div className="flex items-start justify-between px-4 pt-3">
        <span className="text-lg leading-6">{title}</span>
        <img src="/bookmark.svg" alt="" />
      </div>
      <div className="border-t border-gray-200 mt-auto">
        <div className="mx-4 pt-2">
          <CardExplore_Item
            icon="/locationblack.svg"
            title="42, rue Paul Duez, Lille, FR, Lille France"
          />
          <CardExplore_Item
            icon="/calender.svg"
            title="Jan 26, 2022 — Mar 23, 2022"
          />
          <CardExplore_Item icon="/receipt.svg" title="—" />
        </div>
        <div className="flex px-4 mt-[43px] space-x-3">
          <CardExplore_Label label="French" primary />
          <CardExplore_Label label="Customer Service" />
        </div>
      </div>
    </div>
  );
}

export default CardExplore;
