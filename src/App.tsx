import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="h-screen grid gap-4 grid-cols-[auto,1fr] flex-grow-1 overflow-auto bg-blue-200 p-4">
      <Sidebar />
      <div className="overflow-x-hidden ">
        <div className=" sticky top-0 bg-white z-10 pb-4">
          <PageHeader />
        </div>

        <div className="h-screen bg-red-400" />
        <div className="h-screen bg-blue-400" />
        <div className="h-screen bg-purple-400" />
      </div>
    </div>
  );
};
export default App;
