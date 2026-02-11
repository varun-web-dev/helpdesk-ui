import { useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { BiSearchAlt } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx";
import { FiSliders } from "react-icons/fi";


function TicketList({ toggleViews }) {
  const [activeTicket, setActiveTicket] = useState(1);
  const [search,setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [tickets, setTickets] = useState([
    { id: "APPS-01", title: "Laudantium neque veritatis",project:"Administrative",type:"Bug", status:"Open", Assignee:"Varun Pal", date: "Jun 2" },
    { id: "APPS-02", title: "Molestiae saepe illum",project:"Support",type:"Task", status:"In Progress", Assignee:"Rahul Sharma", date: "Jun 1" },
    { id: "APPS-03", title: "Quasi voluptate dolores",project:"Development",type:"Bug", status:"Closed", Assignee:"Priya Singh", date: "May 30" },
    { id: "APPS-04", title: "Nisi consequatur",project:"Support",type:"Task", status:"Open", Assignee:"Amit Patel", date: "May 28" },
    { id: "APPS-05", title: "Voluptas sed",project:"Development",type:"Bug", status:"In Progress", Assignee:"Sneha Gupta", date: "May 25" },
    { id: "APPS-06", title: "Eum consequatur",project:"Administrative",type:"Task", status:"Closed", Assignee:"Rajesh Kumar", date: "May 20" },
    { id: "APPS-07", title: "Lorem ipsum dolor sit amet",project:"Support",type:"Task", status:"Open", Assignee:"Varun Pal", date: "May 18" },
    { id: "APPS-08", title: "Consectetur adipiscing elit",project:"Development",type:"Bug", status:"In Progress", Assignee:"Rahul Sharma", date: "May 15" },
    { id: "APPS-09", title: "Sed do eiusmod tempor incididunt",project:"Administrative",type:"Task", status:"Closed", Assignee:"Priya Singh", date: "May 10" },
    { id: "APPS-10", title: "Ut labore et dolore magna aliqua",project:"Support",type:"Bug", status:"Open", Assignee:"Amit Patel", date: "May 5" },

  ]);
  const [filters,setFilters] = useState({
    project:"All",
    type:"All",
    status:"All",
    assignee:"All"
  });

  

  const filteredTickets = tickets.filter(ticket => {
    return(
      (filters.project === "All" || ticket.project === filters.project) &&
      (filters.type === "All" || ticket.type === filters.type) &&
      (filters.status === "All" || ticket.status === filters.status) &&
      (filters.assignee === "All" || ticket.Assignee === filters.assignee) &&
      (ticket.title.toLowerCase().includes(search.toLowerCase()))
    )
  });

  return (
    <div className="w-auto bg-[#f8fafc] border-r flex flex-col border border-gray-300">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 p-4">

        <HiMenuAlt2 className="cursor-pointer text-2xl" onClick={toggleViews} />

        <select className="bg-transparent text-lg font-semibold outline-none ">
          <option>My Tickets</option>
          <option>All Tickets</option>
        </select>
        
        <HiOutlineAdjustmentsHorizontal className="text-xl cursor-pointer" onClick={() => setShowFilters(!showFilters)} />
      </div>
      {
        showFilters && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">

            {/* overlay */}
            <div className="absolute inset-0 " 
            onClick={() => setShowFilters(false)}></div>
          
            {/*Slide Panel*/}
            <div className="relative w-90 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 h-120 animate-fadeIn">

              {/* Header */}
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <FiSliders className="text-blue-600" />
                  <h2 className="text-lg font-semibold">
                    Ticket Filter
                  </h2>
                </div>
                <button className="text-gray-400 hover:text-black" onClick={()=>{setShowFilters(false)}}>
                  Reset
                </button>
                </div>

            {/* Filter Feilds */}
            <div className="space-y-4">
              <select 
              value={filters.project}
              onChange={(e)=> setFilters({...filters,project:e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm">
                <option>Type: All</option>
                <option>Administrative</option>
                <option>Support</option>
                <option>Development</option>
              </select>

              <select 
              value={filters.type}
              onChange={(e)=> setFilters({...filters,type:e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm">
                <option>Type: All</option>
                <option>Task</option>
                <option>Bug</option>
              </select>

              <select 
              value={filters.status}
              onChange={(e)=> setFilters({...filters,status:e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm">
                <option>Status: All</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>

              <select 
              value={filters.assignee}
              onChange={(e)=> setFilters({...filters,assignee:e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm">
                <option>Assignee: All</option>
                <option>Varun Pal</option>
                <option>Rahul Sharma</option>
                <option>Priya Singh</option>
                <option>Amit Patel</option>
                <option>Sneha Gupta</option>
                <option>Rajesh Kumar</option>
                <option>Amit Patil</option>



              </select>

              <button className="text-blue-600 text-sm flex items-center gap-1">
                + More
              </button>

            </div>

            {/* bottom btns */}
            <div className="mt-auto flex justify-between items-center gap-3 pt-3 border-t">
              <input type="text"
                placeholder="Name this view..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"              
              />
              <button
                
               className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 text-sm">
                Save new view
              </button>

            </div>


          </div>
          </div>
        )
      }

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
                {ticket.project} - {ticket.type}
              </span>

              {/* Bottom Right */}
              <div className="flex items-center gap-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {ticket.status}
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