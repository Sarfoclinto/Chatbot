import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Avatar, Layout } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import ChatSidebar from "../Components/ChatSidebar";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("chat");
  return (
    <Layout className="mainlayout h-dvh overflow-auto bg-[#f5f6fa]">
      <Sidebar />
      <Layout className="">
        <header className="bg-[#f5f6fa] flex items-center justify-between pr-7 h-fit pl-10 py-4">
          <nav className="headerNav bg-white  flex w-2/3 p-1 items-center justify-between rounded-3xl">
            <button
              onClick={() => setActiveTab("chat")}
              className={` px-10 font-semibold h-11 flex items-center rounded-3xl text- ${
                activeTab === "chat"
                  ? "bg-[#24252d] text-white"
                  : "text-[#24252d]"
              } base`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={` px-10 font-semibold h-11 flex items-center rounded-3xl text-base ${
                activeTab === "contacts"
                  ? "bg-[#24252d] text-white"
                  : "text-[#24252d]"
              } `}
            >
              Contacts
            </button>
            <button
              onClick={() => setActiveTab("templates")}
              className={` px-10 font-semibold h-11 flex items-center rounded-3xl text-base ${
                activeTab === "templates"
                  ? "bg-[#24252d] text-white"
                  : "text-[#24252d]"
              } `}
            >
              Templates
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={` px-10 font-semibold h-11 flex items-center rounded-3xl text-base ${
                activeTab === "projects"
                  ? "bg-[#24252d] text-white"
                  : "text-[#24252d]"
              } `}
            >
              My Projects
            </button>
          </nav>
          <div className="p-1 rounded-3xl flex items-center gap-x-7 bg-white">
            <div className="flex items-center gap-x-2 ">
              <Avatar
                src="https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg"
                size="default"
              />
              <p className="font-bold text-black">Ashly Boldwin</p>
            </div>
            <div className="flex items-center gap-x-1">
              <div className=" p-1 rounded-full bg-stone-200/35 px-2">
                <BellOutlined />
              </div>
              <div className=" p-1 rounded-full bg-stone-200/35 px-2">
                <SettingOutlined />
              </div>
            </div>
          </div>
        </header>
        <Content className=" pl-10 pt-4 pr-7 pb-6 flex gap-x-1">
          <ChatSidebar />
          <section
            id="chat-content"
            className="w-full h-full rounded-r-lg flex bg-white "
          >
            <Outlet />
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
