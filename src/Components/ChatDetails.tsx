import { useParams } from "react-router-dom";
import ChatGeneralInfo from "./ChatGeneralInfo";
import ChatMessages from "./ChatMessages";

const ChatDetails = () => {
  const { id } = useParams();
  return (
    <div className="w-full bg-white rounded-r-lg flex gap-x-2">
      <ChatMessages receipient={id} />
      <ChatGeneralInfo receipient={id} />
    </div>
  );
};

export default ChatDetails;
