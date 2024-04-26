import Image from "next/image";
import React from "react";

const EducationCard = ({image, university, department, desc}: any) => {
  return (
    <div className=" box min-w-full md:min-w-[49%] lg:min-w-[33%]">
      <div className="container">
        <div className="educatincard !h-auto p-[15px]">
          <div className="max-sm:flex-col  flex items-center">
            <div>
              <Image className="min-w-[100px] bg-white h-[100px] rounded-[10px] w-[100px] " src={image} alt="" />
            </div>
            <div className="max-sm:text-center sm:ml-[2em]">
              <div className=" font-[600] text-[20px]">{university}</div>
              <div className="text-[18px]">{department}</div>
              <div className="text-[15px]">{desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
