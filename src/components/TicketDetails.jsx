import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuBug } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { SiRender } from "react-icons/si";

const TicketDetails = () => {
  const [activeTab, setActiveTab] = useState("public");
  const [message, setMessage] = useState("");
  const [replies, setReplies] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    const newReply = {
      id: Date.now(),
      sender: "You",
      content: message,
      type: activeTab,
      time: new Date().toLocaleString(),
    };
    setReplies([...replies, newReply]);
    setMessage("");
  }

  const handleEnterKey = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      handleSend();
    }
  }
  return (
    <div className="flex-1 bg-[#f8fafc] w-auto h-full ">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#f8fafc] p-2 border-b border-gray-300 w-300">
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleEnterKey}
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
            <button 
            onClick={handleSend}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-2 rounded-lg text-sm font-medium transition shadow-sm">
              <FiSend size={16} />

            </button>

          </div>

        </div>

        {/* email card*/}

        {replies.map((reply) => (
        <div
          key={reply.id}
          className="bg-white border border-gray-300 rounded-2xl shadow-sm p-5 space-y-4"
        >

          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-purple-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                {reply.sender === "You" ? "Y" : "VP"}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {reply.sender}
                </h4>
                <p className="text-[10px] text-gray-500">
                 {reply.type === "public" ? "Public Reply" : "Private Comment"} 
                </p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 text-right">
              {reply.time}
            </div>
          </div>

          <div className="text-sm text-gray-600 font-semibold leading-relaxed">
            {reply.content}
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
        ))}

      </div>
    </div>
  );
};

export default TicketDetails;