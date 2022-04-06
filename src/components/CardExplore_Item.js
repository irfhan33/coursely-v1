import React from "react";

function CardExplore_Item({ icon, title }) {
  return (
    <div className="flex items-center pb-1">
      <img src={icon} alt="Icon" className="mr-[10px]" />
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default CardExplore_Item;
