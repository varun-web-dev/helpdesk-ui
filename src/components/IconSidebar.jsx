import React from 'react'
import { FaInbox } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { PiNoteDuotone } from "react-icons/pi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiMiniCircleStack } from 'react-icons/hi2';
import { RiRobot2Fill } from "react-icons/ri";
import { MdOutlineReplay } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";


const icons = [
  FaInbox,
  FaLightbulb,
  RiContactsBook3Fill,
  PiNoteDuotone,
  RiDashboardHorizontalLine,
  MdDashboardCustomize,
  HiMiniSquare3Stack3D,
  RiContactsBook3Fill,
  RiRobot2Fill,
  HiMiniCircleStack,
  MdOutlineReplay,
  MdOutlineSignalCellularAlt,
  IoIosSettings,
];

const IconSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-12 bg-[#071835] flex flex-col items-center py-6">
      {icons.map((Icon, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-full flex justify-center py-3 cursor-pointer border-l-4 transition-all duration-200
            ${activeIndex === index
              ? "text-amber-500 border-amber-500"
              : "text-blue-500 border-transparent hover:opacity-80"
            }`}
        >
          <Icon className="text-xl" />
        </div>
      ))}
    </div>
  );
};

export default IconSidebar;