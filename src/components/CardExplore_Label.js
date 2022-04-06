import React from "react";

function CardExplore_Label({ label, primary }) {
  return (
    <div
      className={`px-2 rounded-lg text-xs h-[24px] flex items-center justify-center ${
        !primary ? "bg-[#F3F3F3]" : "bg-[#C7E0D5] text-[#208458]"
      }`}
    >
      {label}
    </div>
  );
}

export default CardExplore_Label;
