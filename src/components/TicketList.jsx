import { useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { BiSearchAlt } from "react-icons/bi"

function TicketList() {
  const [activeTicket, setActiveTicket] = useState(1);
  const [search,setSearch] = useState("")

  const tickets = [
    { id: 1, title: "Laudantium neque veritatis", date: "Jun 2" },
    { id: 2, title: "Molestiae saepe illum", date: "Jun 1" },
    { id: 3, title: "Quasi voluptate dolores", date: "May 30" },
    { id: 4, title: "Nisi consequatur", date: "May 28" },
    { id: 5, title: "Voluptas sed", date: "May 25" },
    { id: 6, title: "Eum consequatur", date: "May 20" },

  ]

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-80 bg-[#f8fafc] border-r flex flex-col border border-gray-300">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 p-4">

        <HiMenuAlt2 className="text-2xl" />

        <select className="bg-transparent text-lg font-semibold outline-none ">
          <option>My Tickets</option>
          <option>All Tickets</option>
        </select>

        <HiOutlineAdjustmentsHorizontal className="text-xl cursor-pointer" />
      </div>

      {/* Search Header*/}
      <div className="p-4 border-b-gray-300 border-b">
        <div className="bg-white border border-gray-300 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <BiSearchAlt className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tickets */}
      <div className="overflow-y-auto border-t border-gray-300 flex-1 bg-white">
        {
          filteredTickets.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No tickets found.
            </div>
          )
        }

        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => setActiveTicket(ticket.id)}
            className={`p-4 cursor-pointer transition border-b
        ${activeTicket === ticket.id
                ? "bg-blue-50 border-l-4 border-blue-500 shadow-md"
                : "bg-white hover:shadow-md"
              }
      `}
          >
            {/* Top line */}
            <div className="flex justify-between items-start mb-2">
              <p className="font-semibold text-[14px]">
                {ticket.title}
              </p>

              <span className="text-xs text-gray-400">
                {ticket.date}
              </span>
            </div>

            {/* Bottom line */}
            <div className="flex justify-between items-center">

              {/* Bottom Left */}
              <span className="text-xs font-medium text-gray-500">
                APPS_216
              </span>

              {/* Bottom Right */}
              <div className="flex items-center gap-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  To Do
                </span>

                {/* Pfp Icon */}
                <span className="w-6 h-6 rounded-full bg-red-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                  AH
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default TicketList