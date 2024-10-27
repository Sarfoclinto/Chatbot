import { WhatsAppOutlined } from "@ant-design/icons";

const EmptyChat = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-y-2 justify-center">
      <WhatsAppOutlined style={{ fontSize: 100, color: "gray" }} />
      <div className="text-3xl font-bold text-gray-500">No Chat selected</div>
    </div>
  );
};

export default EmptyChat;
