import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdHeadsetMic } from "react-icons/md";
import { RxDashboard } from "react-icons/rx"

const TicketViews = () => {
  const [activeView, setActiveView] = useState("My Tickets")
  const [open, setOpen] = useState(true)

  const views = [
    { name: "My Tickets", count: 9 },
    { name: "Past Due", count: 4 },
    { name: "High Priority", count: 11 },
    { name: "Unassigned", count: 98 },
    { name: "All Tickets", count: 122 },
  ]

  return (
    <div className="w-64 bg-gray-100 border-r p-2 border border-gray-300 rounded-tl-2xl">

      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer mb-5 hover:bg-gray-300 bg-gray-200 px-4 py-2 rounded-md"
      >
        <RiArrowDropDownLine
          className={`text-2xl transition ${open ? "rotate-0" : "-rotate-90"
            }`}
        />
        <h3 className="text-black text-xs font-semibold tracking-wider">
          TICKET VIEWS
        </h3>
      </div>

      {/* List */}
      {open && (
        <div className="space-y-2 text-sm">

          {views.map((view) => (
            <div
              key={view.name}
              onClick={() => setActiveView(view.name)}
              className={`px-4 py-2 rounded-md flex justify-between items-center cursor-pointer transition
                ${activeView === view.name
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-white text-gray-900 font-semibold"
                }`}>
              <span>{view.name}</span>

              <span
                className={`text-xs px-2 py-0.5 rounded
                  ${activeView === view.name
                    ? "bg-blue-900 text-white"
                    : "text-gray-500 bg-white"
                  }`}>
                {view.count}
              </span>
            </div>
          ))}

        </div>
      )}


      {/* Live Chats */}
      <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 cursor-pointer transition mt-4 ml-4">
        <MdHeadsetMic className="text-lg" />
        <p className="text-xs font-semibold tracking-wide">
          LIVE CHATS
        </p>
      </div>

      {/* Boards */}
      <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 cursor-pointer transition mt-4 ml-4">
        <RxDashboard className="text-lg" />
        <p className="text-xs font-semibold tracking-wide">
          BOARDS
        </p>
      </div>
      <div className="space-y-5">
      </div>

    </div>
  )
}

export default TicketViews