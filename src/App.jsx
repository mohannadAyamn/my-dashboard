import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-gray-100">
        <Toaster position="top-right" reverseOrder={true} />
        <SidebarTrigger className="md:hidden p-2 " />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default App;
