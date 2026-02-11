import Header from "./components/Header"
import IconSidebar from "./components/IconSidebar"
import TicketViews from "./components/TicketViews"
import TicketList from "./components/TicketList"
import TicketDetails from "./components/TicketDetails"
import RightPanel from "./components/RightPanel"
import { useState } from "react"


function App() {
  const [showViews, setShowViews] = useState(true);

  return (
    <>
      <div className="h-screen  flex items-center justify-center">

  <div className="w-full h-full bg-[#071835]  shadow-2xl flex flex-col overflow-hidden">

    <Header />

    <div className="flex flex-1 overflow-hidden">
      <IconSidebar />
      {
        showViews && (
          <div className="w-auto">
        <TicketViews />
      </div>
      )}

    <div className={`flex-1 flex transition ${showViews ? "w-[350px] " : "w-[500px] "} transition-all duration-300 border-r`}>
      <TicketList toggleViews={() => setShowViews(!showViews)} />
      </div>

      <div className={`flex-1 ${showViews ? "w-124" : "w-187"} transition-all duration-300`}>
      <TicketDetails toggleViews={() => setShowViews(!showViews)}/>
      </div>

      <RightPanel />
    </div>

  </div>

</div>
    </>
  )
}

export default App
