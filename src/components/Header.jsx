import React from 'react'
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoGiftSharp } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <div className="h-13 bg-[#071835] flex items-center justify-between px-2 text-white shadow">

      {/* Left */}
      <div className="flex items-center justify-between gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold ">
          C
        </div>
        <h1 className="text-lg font-semibold tracking-wide">
          Helpdesk
        </h1>
      </div>

      {/* Search */}
      <div className="w-[600px ] relative">
        <BiSearchAlt className="text-gray-500 text-lg absolute left-3 top-2.5" />
        <input
          type="text"
          placeholder="Search Capacity..."
          className="w-125 bg-[#010711] text-sm text-white placeholder-gray-500 px-10 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <div className="inline-flex">
          {/* Create Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-l-md text-sm transition">
            Create
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 rounded-r-md border-l border-blue-500 flex items-center transition">
            <FiChevronDown size={16} />
          </button>
        </div>

        <RxQuestionMarkCircled className='text-xl'/>
        <IoGiftSharp className='text-xl'/>
        <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-md font-semibold">VP</div>
      </div>

    </div>
  )
}

export default Header
