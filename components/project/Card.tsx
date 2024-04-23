import Link from "next/link";
import React from "react";

const Card = ({projects}: any) => {


  return (
    <div className="flex flex-wrap text-[#FFFFFF] justify-start mt-[20px]">
      {projects.map((data: any, index: any) => (
        <Link key={index} href={data.link} target="_blank" className="ag-courses_item min-h-full">
          <div className="ag-courses-item_link min-h-full">
            <div className="ag-courses-item_bg min-h-full" ></div>
            <div className="ag-courses-item_title " >{data.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
