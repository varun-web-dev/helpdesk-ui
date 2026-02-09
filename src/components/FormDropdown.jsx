import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FormDropdown = ({ label, value, onChange, options, icon }) => {
  return (
    <div>
      <h3 className="text-xs font-bold text-black mb-2 tracking-wide">
        {label}
      </h3>

      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 bg-white">

          {icon && <div className="text-xl text-gray-400">{icon}</div>}

          <select
            value={value}
            onChange={onChange}
            className="appearance-none bg-transparent text-sm outline-none flex-1 cursor-pointer"
          >
            {options.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
          </select>

          <RiArrowDropDownLine size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FormDropdown;