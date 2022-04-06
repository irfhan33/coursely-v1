import React from "react";
import CardHero from "./CardHero";

function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col-reverse lg:flex pb-[40px]">
        {/* Left Section */}
        <div className="z-20">
          <h3 className="lg:max-w-[30vw] 2xl:max-w-[33vw] text-2xl lg:mt-[67px] mt-[30px] leading-8 font-normal">
            Coursely is a brand new platform that aims to connect adjunct
            faculty with programme managers at some of Europes most prestigious
            higher education institutions.
          </h3>
          <div className="lg:mt-4 xl:mt-6 2xl:mt-20 mt-8 flex flex-col md:items-start items-center">
            <span className="font-normal text-lg">
              Universities we work with
            </span>
            <div className="flex space-x-2 sm:space-x-4 mt-4">
              <CardHero title="University Corporation Logotype" opacity="100" />
              <CardHero title="University Corporation Logotype" opacity="50" />
              <CardHero title="University Corporation Logotype" opacity="25" />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="/hero-image.svg"
          className="static lg:absolute right-0 lg:bottom-[100px] xl:bottom-[20px] lg:max-w-[58vw] xl:max-w-[70vw] z-10"
          draggable="false"
        />

        {/* Gradient */}
        <div className="bg-gradient-to-t from-[#1C1A1B] to-rgba(28,26,27,0)0% min-h-[200px] w-[100vw] absolute z-0 opacity-25 -mx-[40px] bottom-0 border-b-2 border-white"></div>
      </div>
    </>
  );
}

export default HeroSection;
