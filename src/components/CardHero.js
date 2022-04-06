import React from "react";

function CardHero({ title, opacity }) {
  return (
    <div
      className={`border border-[#FAEDD2] max-w-[100px] p-3 rounded-lg min-h-[96px] text-xs opacity-${opacity} font-mon cursor-pointer`}
    >
      {title}
    </div>
  );
}

export default CardHero;
