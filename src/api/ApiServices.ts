import axios from "axios";
const BASE_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: BASE_URL,
});
export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(console.error(`Error fetching user with id='${id}':`, error));
    throw error;
  }
};

export const getConversation = async () => {
  try {
    const response = await api.get("/conversations");
    return response.data;
  } catch (error) {
    console.error("Error fetching conversation:", error);
    throw error;
  }
};

export type SendMessage = {
  sender: string;
  receiver: string;
  message: string;
};

export const sendmessage = async ({
  message,
  sender,
  receiver,
}: SendMessage) => {
  const newMessage = {
    id: Math.ceil(Math.random() * 100),
    senderId: sender,
    text: message,
    via: "SMS",
    timestamp: new Date().toDateString(),
  };

  try {
    const response = api.post(
      `/conversation/${sender},${receiver}/messages`,
      newMessage
    );
    return (await response).data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getConversationByID = async (id: string) => {
  try {
    const response = await api.get(`/conversation/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching coversation with id='${id}':`, error);
    throw error;
  }
};

/*
will contain request to api

like {
  api call fetch a  conversation
  api call to delete message(delete message)
  api call to fetch a specific user
}
*/
