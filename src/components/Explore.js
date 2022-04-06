import React from "react";
import HeaderExplore from "./HeaderExplore";
import CardExplore from "./CardExplore";

function Explore() {
  return (
    <div className="px-[26px] sm:px-[40px] bg-[#FDFAF3] min-h-screen">
      {/* Header */}
      <HeaderExplore />

      {/* SearchBar */}
      <div className="border-b-2 border-[#E9E9E9] text-[#8E8D8D] flex items-center h-[48px]">
        <img src="/searchgray.svg" alt="Search Icon " />
        <input
          type="text"
          placeholder="Search Position"
          className="pl-4 w-full bg-transparent focus:outline-none"
        />
        <div className="flex items-center space-x-2 ml-auto cursor-pointer">
          <span>Filter</span>
          <img src="/filter.svg" alt="Filter Icon" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[20px]">
        {/* Card */}
        <CardExplore
          background="/cardImage1.jpg"
          placeholder="Université Lille 2 Droit et Santé"
          title="Set up and manage an after-sales service"
          cardLogo="/cardLogo1.svg"
        />
        <CardExplore
          background="/cardImage2.jpg"
          placeholder="City University of Toulouse"
          title="Data Analysis"
          primary
          cardLogo="/cardLogo2.svg"
        />
        <CardExplore
          background="/cardImage3.jpg"
          placeholder="Saint Quentin’s Academy of Arts"
          title="Introduction to versioning with Git"
          cardLogo="/cardLogo3.svg"
        />
        <CardExplore
          background="/cardImage1.jpg"
          placeholder="Université Lille 2 Droit et Santé"
          title="Set up and manage an after-sales service"
          cardLogo="/cardLogo3.svg"
        />
      </div>

      {/* Loading */}
      <div className="flex justify-center py-10 cursor-pointer">
        <img src="/loading.svg" alt="Icon Loading" />
      </div>
    </div>
  );
}

export default Explore;
