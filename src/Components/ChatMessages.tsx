import { useMutation, useQuery} from "react-query";
import {
  // api,
  fetchUserById,
  getConversationByID,
  sendmessage as saveMesage,
  SendMessage,
} from "../api/ApiServices";
// import { useSearchParams } from "react-router-dom";
import { Avatar } from "antd";
import { LinkOutlined, SendOutlined } from "@ant-design/icons";
import { FaMicrophone } from "react-icons/fa6";
import RecievingCard from "./RecievingCard";
import SendingCard from "./SendingCard";
import { useState } from "react";

interface Prop {
  receipient: string;
}

interface MessageType {
  id: string;
  senderId: string;
  text: string;
  timeStamp: string;
  via: string;
}

const ChatMessages = ({ receipient }: Prop) => {
  // const queryClient = useQueryClient();
  const consversationID: string = `1,${receipient}`;
  const [messageText, setMessageText] = useState("");

  const {
    data: conversations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["conversations", receipient],
    queryFn: () => getConversationByID(consversationID),
  });

  const { data: user } = useQuery({
    queryKey: [receipient],
    queryFn: () => fetchUserById(receipient),
  });

  const { mutate, isLoading: sending } = useMutation({
    mutationFn: (message: SendMessage) => saveMesage(message),
    onSuccess: () => {
      console.log("message sent successfully");
    },
    onError: (err) => {
      console.log("error sending message", err);
    },
  });

  const createNewMessage = () => {
    mutate({
      message: messageText,
      receiver: receipient,
      sender: "1",
    });
  };

  // const mutation = useMutation(
  //   (message) => api.post(`/conversation/1,${receipient}/messages`, message),
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["conversations"]);
  //     },
  //   }
  // );

  // const sendmessage = async () => {
  //   if (messageText) {
  //     try {
  //       const message = {
  //         senderId: `${Date.now()}`,
  //         text: messageText,
  //         timeStamp: new Date().toLocaleTimeString(),
  //         via: "SMS",
  //       };
  //       await mutation.mutateAsync(message);
  //       console.log("Message sent successfully: ", mutation.data);
  //       setMessageText("");
  //     } catch (error) {
  //       console.error("Error sending data: ", error);
  //       setMessageText("");
  //     }
  //   }
  // };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center gap-x-2">
        <span className="loading loading-ring loading-lg"></span>
        <p className="text-xl font-bold text-gray">Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
        <p className="text-lg font-bold text-warning">Error: </p>
        <p className="text-xl font-bold text-gray">No coversation</p>
      </div>
    );
  }

  // console.log(conversations);
  // console.log(user);

  return (
    <div className=" w-2/3 flex p-3 ">
      {conversations && user && (
        <div className="bg-[#e7e5e4] flex flex-col w-full rounded-lg pb-16 relative">
          <header className=" flex items-center w-full h-10 rounded-lg p-3 py-5 gap-x-2">
            <Avatar src={user.avatar} />
            <p className="font-bold text-base">{user.name}</p>
            <p className="text-xs text-stone-400">12:38</p>
          </header>
          <div className="messsages h-full overflow-auto p3-3">
            {conversations.messages &&
              conversations.messages.map((message: MessageType) => {
                return (
                  <div className={`flex`} key={message.id}>
                    {message.senderId === receipient ? (
                      <RecievingCard
                        key={message.id}
                        avatar={user.avatar}
                        name={user.name}
                        timeStamp={message.timeStamp}
                        text={message.text}
                      />
                    ) : (
                      <SendingCard
                        key={message.id}
                        text={message.text}
                        via={message.via}
                        timeStamp={message.timeStamp}
                      />
                    )}
                  </div>
                );
              })}
          </div>
          <div className="absolute bottom-2 right-0 left-0 flex items-center gap-x-2 px-5">
            <div className="flex items-center gap-x-1">
              <div className="px-[9px] bg-stone-400 py-2 rounded-full">
                <LinkOutlined style={{ fontSize: 21 }} />
              </div>
              <div className="px-[9px] bg-stone-400 py-2 rounded-full">
                <FaMicrophone size={21} />
              </div>
            </div>
            <div className="flex items-center w-full  relative">
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createNewMessage();
                  }
                }}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="bg-white pr-5 w-full text-lg py-1 px-2 rounded-3xl placeholder:font-semibold outline-none"
                placeholder="Type messsage here"
              />
              <button
                onClick={createNewMessage}
                className=" flex items-center justify-center p-2 absolute right-0 rounded-full -rotate-45 bg-[#a586ff] active:scale-95 active:transition-all"
              >
                <SendOutlined style={{ fontSize: 20, color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
