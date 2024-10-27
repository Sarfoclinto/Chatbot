import { Outlet } from "react-router-dom";
const Chat = () => {
  return (
    <section
      id="chat-content"
      className="w-full h-full rounded-lg  flex bg-[#f5f6fa] gap-x-0.5"
    >
      <Outlet />
    </section>
  );
};

export default Chat;
