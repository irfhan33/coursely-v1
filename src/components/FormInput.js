import React from "react";

function FormInput({ placeholder, icon, primary }) {
  return (
    <div
      className={`border border-white rounded-lg flex items-center h-12 px-4 ${
        primary && "bg-[#1C1A1B] bg-opacity-50"
      }`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent focus:outline-none w-full font-mon font-normal placeholder:font-mon placeholder:text-white"
      />
      <img src={icon} alt="" className="h-4 w-4" />
    </div>
  );
}

export default FormInput;
