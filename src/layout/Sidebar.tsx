import { useState } from "react";
import Button from "../components/ui/button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Menu = {
  title: string;
};

const menus: Menu[] = [
  {
    title: "dashboard",
  },
  {
    title: "department",
  },
  {
    title: "accounting and finance",
  },
  {
    title: "employee",
  },
  {
    title: "token",
  },
  {
    title: "attendance",
  },
  {
    title: "notification",
  },
  {
    title: "announcement",
  },
  {
    title: "billing",
  },
  {
    title: "setting",
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const d = "employee";
  return (
    <>
      {isLargeDevice && (
        <aside className=" sticky top-0 overflow-y-auto scrollbar-hidden bg-white px-4 pb-4 rounded-md flex flex-col">
          <div className="sticky bg-white top-0 flex items-center justify-between">
            <a className="flex items-center gap-2 py-4 ">
              <span className="w-8 h-8 rounded-full bg-secondary"></span>
              <span>Protocal</span>
            </a>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant={"ghost"}
              size={"icon"}
              className={`
        ${!isOpen ? "rotate-180" : ""} 
        transition-all duration-300 ease-in-out
        `}
            >
              <MdKeyboardDoubleArrowRight size={25} />
            </Button>
          </div>

          <ul className="m-0 list-none space-y-1">
            {menus.map((menu) => (
              <li key={menu.title}>
                <Button
                  variant={d === menu.title ? "active" : "ghost"}
                  size={"default"}
                  className={`w-full text-left capitalize rounded-full pl-4`}
                >
                  {menu.title}
                </Button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <aside className=" sticky top-0 overflow-y-auto scrollbar-hidden bg-white px-4 pb-4 rounded-md flex flex-col">
        <a className="flex justify-center items-center gap-2 py-4 sticky bg-white top-0 ">
          <span className="w-8 h-8 rounded-full bg-secondary"></span>
        </a>
        <div className="flex flex-col">
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <span className="inline-block w-8 h-8 bg-red-400 rounded-full"></span>
          </Button>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
