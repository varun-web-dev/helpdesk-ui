import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuBug } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

const TicketDetails = () => {
  const [activeTab, setActiveTab] = useState("public");

  return (
    <div className="flex-1 bg-[#f8fafc] overflow-y-auto">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#f8fafc] p-2 border-b border-gray-300">
        <h2 className="text-lg font-bold text-gray-800">
          Laudantium neque veritatis
        </h2>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <LuBug />
          OPS-102 | 10066955181 | Created 11/14/22 12:32 PST
        </p>
      </div>

      <div className="p-4 space-y-6">

        {/* Reply Box */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-sm w-full">

          {/* Active Public/Private Tab */}
          <div className="flex border-b bg-gray-50 text-sm font-medium">
            <button
              onClick={() => setActiveTab("public")}
              className={`px-5 py-1 transition ${activeTab === "public"
                ? "text-black border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Public Reply
            </button>

            <button
              onClick={() => setActiveTab("private")}
              className={`px-5 py-3 transition ${activeTab === "private"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Private Comment
            </button>
          </div>

          {/* email To */}
          <div className="px-2 py-2 border-b border-gray-200 flex items-center bg-white justify-between text-sm">
            <span className="text-gray-500">To:</span>
            <div className="flex items-center gap-2 bg-gray-100 rounded-2xl ">

              <span className="w-6 h-6 rounded-full bg-green-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                AW
              </span>
              <span className="font-medium text-gray-800">
                Allison Westervelt
              </span>
              <span className="text-xs text-gray-500">
                awestervelt@email.com
              </span>
              <RxCross2 className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            <span className="text-gray-500 font-semibold">Cc</span>

          </div>

          {/* Message */}
          <div className="px-5 py-4">
            <textarea
              placeholder={
                activeTab === "public"
                  ? "Write a public reply..."
                  : "Write a private comment..."
              }
              rows="5"
              className="w-full resize-none outline-none border-none text-sm "
            />
          </div>

          {/* Bottom Tools */}
          <div className="flex items-center justify-between px-5 py-3 border-t bg-gray-50">

            {/* Formatting Icons */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <button className="font-bold hover:text-gray-700">B</button>
              <button className="italic hover:text-gray-700">I</button>
              <button className="underline hover:text-gray-700">U</button>
            </div>

            {/* Send Button */}
            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-2 rounded-lg text-sm font-medium transition shadow-sm">
              <FiSend size={16} />

            </button>

          </div>

        </div>

        {/* email card*/}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-5 space-y-4">

          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-red-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                AH
              </span>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Allie Harmon
                </h4>
                <p className="text-[10px] text-gray-500">
                  To: Danny Amacher danny@capacity.com
                </p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 text-right">
              November 14, 2022 <br />
              12:32 PM PST
            </div>
          </div>

          <div className="text-sm text-gray-600 font-semibold leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi recusandae blanditiis et nisi, mollitia impedit facilis assumenda reprehenderit est ipsum quis saepe maiores! Hic minus quae quo aut numquam, aperiam tenetur nisi. Veritatis, sapiente vel. Vitae delectus deleniti harum, sequi dicta, quod dolore, impedit error libero in exercitationem blanditiis pariatur suscipit at? Minima dolore a earum.
          </div>

          {/* Attachment */}
          <div>
            <div className="flex flex-col bg-gray-100 border border-gray-300 rounded-md px-5 py-1 text-xs text-black w-fit font-semibold">
              Screen_shot.png
              <span className=" text-gray-600">
                16 jun 2022, 1:32 PM
              </span>
            </div>


          </div>

        </div>

        {/* second email card */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-5 space-y-4">

          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-red-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                AH
              </span>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Allie Harmon
                </h4>
                <p className="text-[10px] text-gray-500">
                  To: Danny Amacher danny@capacity.com
                </p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 text-right">
              November 14, 2022 <br />
              12:32 PM PST
            </div>
          </div>

          <div className="text-sm text-gray-600 font-semibold leading-relaxed">
            Explicabo atque eum nostrum voluptatibus? Animi dolor ipsam omnis.
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketDetails;