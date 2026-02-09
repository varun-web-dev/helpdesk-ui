import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const ExpandableRow = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-full border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer font-bold ">
      <span>{title}</span>
      <RiArrowRightSLine className="text-gray-300" size={18} />
    </div>
  );
};

export default ExpandableRow;