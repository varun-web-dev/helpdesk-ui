import Header from "./components/Header"
import IconSidebar from "./components/IconSidebar"
import TicketViews from "./components/TicketViews"
import TicketList from "./components/TicketList"
import TicketDetails from "./components/TicketDetails"
import RightPanel from "./components/RightPanel"


function App() {

  return (
    <>
      <div className="h-screen  flex items-center justify-center">

  <div className="w-full h-full bg-[#071835]  shadow-2xl flex flex-col overflow-hidden">

    <Header />

    <div className="flex flex-1 overflow-hidden">
      <IconSidebar />
      <TicketViews />
      <TicketList />
      <TicketDetails />
      <RightPanel />
    </div>

  </div>

</div>
    </>
  )
}

export default App
