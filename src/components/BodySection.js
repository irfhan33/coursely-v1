import React from "react";
import FormInput from "./FormInput";

function BodySection() {
  return (
    <div className="flex flex-col lg:flex-row py-[40px] space-y-8 lg:space-y-0">
      {/* Left Seciton */}
      <div className="space-y-5 lg:max-w-[40%] xl:max-w-[25%] lg:mr-[100px]">
        <span className="block text-lg font-normal pb-2">
          Use the search bar below to see what fantastic vacancies we have to
          offer
        </span>
        <FormInput placeholder="What subject?" icon="/globe.svg" />
        <FormInput placeholder="Where?" icon="/location.svg" />
        <FormInput placeholder="Search" icon="/search.svg" primary />
      </div>

      {/* Right Section */}
      <div className="space-y-[40px] lg:max-w-[40%]">
        <div className="inline-flex h-11 w-full items-center overflow-hidden cursor-pointer text-xs md:text-sm font-mon">
          <div className="bg-white h-full flex items-center px-3 text-[#208458] rounded-tl-lg rounded-bl-lg w-full md:w-auto justify-center">
            Freelance lecturer
          </div>
          <div className="h-full flex items-center px-3 rounded-tr-lg rounded-br-lg border border-white w-full md:w-auto justify-center">
            Course manager
          </div>
        </div>
        <span className="block text-2xl">
          Simply create a profile and you can begin applying to a variety of
          opportunities that suit your skillset and availability.
        </span>
        <div className="inline-flex rounded-lg bg-[#1C1A1B] h-12 items-center px-4 cursor-pointer md:w-auto w-full justify-between">
          <span className="pr-10 text-sm">Become a freelancer lecturer</span>
          <img src="/add.svg" alt="" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default BodySection;
