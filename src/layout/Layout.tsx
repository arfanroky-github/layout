import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen grid gap-4 grid-cols-[auto,1fr] flex-grow-1 overflow-auto bg-blue-200 p-4">
      <Sidebar />
      <div className="overflow-x-hidden">
        <div className="sticky top-0 bg-white z-10 p-4 shadow rounded-md mb-4">
          <PageHeader />
        </div>
          <Outlet />
      </div>
    </div>
  );
};
export default Layout;
