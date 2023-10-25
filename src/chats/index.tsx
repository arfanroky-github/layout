import ChatBox from "./ChatBox";
import ChatSidebar from "./ChatSidebar";

function ChatLayout() {
  return (
    <div className="h-[86svh]">
      <div className="grid grid-cols-[1fr,auto] gap-4  h-full">
        <div className="bg-white p-4 flex flex-col ">
          <ChatBox />
        </div>
        <aside>
          <ChatSidebar />
        </aside>
      </div>
    </div>
  );
}
export default ChatLayout;
