import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import FormDropdown from "./FormDropdown";
import ExpandableRow from "./ExpandableRow";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const RightPanel = () => {
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("Allie Harmon");
  const [project, setProject] = useState("Administrative");
  const [type, setType] = useState("Task");
  const [reporter, setReporter] = useState("Allie Harmon");
  const [status, setStatus] = useState("To Do");
  const [openStatus, setopenStatus] = useState(false);


  return (
    <div className="w-[320px] overflow-y-auto flex flex-col gap-6 bg-white  border border-gray-300">

      {/* Header */}
      <div className="sticky top-0 bg-white z-10 m-0 p-3.25 border-b border-gray-300 flex items-center justify-between ">

        <div className="inline-flex">
          {/* ToDo Button */}
          <button
            onClick={() => setopenStatus(!openStatus)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-l-md text-sm transition">
            {status}
          </button>

          <button
            onClick={() => setopenStatus(!openStatus)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-2 rounded-r-md border-l border-blue-500 flex items-center transition">
            <FiChevronDown size={16} />
          </button>
        </div>
        <RxCross2 className="text-gray-500 cursor-pointer hover:text-gray-600" size={18} />
      </div>


      {/* custom dropdown */}
      {openStatus && (
        <div className="absolute top-25 right-37 bg-white border border-gray-300 rounded-md shadow-lg z-20">

          {/* Option 1 */}

          <div onClick={() => {
            setStatus("Work in Progress");
            setopenStatus(false);
          }}
            className="flex items-start gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 group"
          >

            <span className="text-gray-500 group-hover:text-blue-600 transition">
              <FaArrowRightLong />
            </span>
            <div>
              <p className="text-sm font-medium ">
                Work in Progress
              </p>
              <p className="text-sm text-gray-400">
                in Progress
              </p>
            </div>
          </div>

          {/* Option 2 */}

          <div onClick={() => {
            setStatus("Need Review");
            setopenStatus(false);
          }}
            className="flex items-start gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 group"
          >

            <span className="text-gray-500 group-hover:text-blue-600 transition">
              <FaArrowRightLong />
            </span>
            <div>
              <p className="text-sm font-medium ">
                Need Review
              </p>
              <p className="text-sm text-gray-400">
                in Progress
              </p>
            </div>
          </div>

          {/* Option 3 */}

          <div onClick={() => {
            setStatus("Done");
            setopenStatus(false);
          }}
            className="flex items-start gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 group"
          >

            <span className="text-gray-500 group-hover:text-blue-600 transition">
              <FaArrowRightLong />
            </span>
            <div>
              <p className="text-sm font-medium ">
                Done
              </p>
              <p className="text-sm text-gray-400">
                in Progress
              </p>
            </div>
          </div>

        </div>
      )}


      {/* Dropdown Sections */}
      <div className="px-4 space-y-4  ">
        <FormDropdown
          label="PRIORITY"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={["Low", "Medium", "High"]}
        />

        <FormDropdown
          label="ASSIGNED TO"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          options={["Allie Harmon", "John Carter", "Varun Pal"]}
          icon={<HiOutlineUserCircle />}
        />

        <FormDropdown
          label="PROJECT"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          options={["Administrative", "Support", "Development"]}
        />

        <FormDropdown
          label="TICKET TYPE"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={["Task", "Bug", "Feature"]}
        />

        {/* Due Date */}
        <div>
          <h3 className="text-xs font-semibold text-black mb-2 tracking-wide">
            DUE DATE
          </h3>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        <FormDropdown
          label="REPORTER"
          value={reporter}
          onChange={(e) => setReporter(e.target.value)}
          options={["Allie Harmon", "John Carter"]}
          icon={<HiOutlineUserCircle />}
        />


        {/* Tags */}
        <div>
          <h3 className="text-xs font-semibold text-black mb-2 tracking-wide">
            TAGS
          </h3>
          <button className="border border-gray-300 text-xs text-gray-700 px-1 py-2 bg-gray-300 rounded-xl h-6 w-17 hover:bg-gray-400 flex items-center gap-1">
            Add Tag +
          </button>
        </div>
      </div>
      {/* Bottom Sections */}
      <div className="">
        <ExpandableRow title="Tasks" />
        <ExpandableRow title="Collected Fields" />
        <ExpandableRow title="Linked Ticket" />
        <ExpandableRow title="History" />
      </div>

    </div>
  );
};

export default RightPanel;