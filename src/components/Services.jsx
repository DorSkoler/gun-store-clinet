import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl transition-all duration-500">
      <div className={`w-8 h-8 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col ml-5 flex-1 text-white mt-2">
          <h1 className="text-lg">{title}</h1>
          <p className="text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="flex flex-col mf:flex-row w-full justify-center items-center">
      <div className="flex items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-2xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always mainting the quality of our guns."
        />
      </div>
    </div>
  );
}

export default Services;
