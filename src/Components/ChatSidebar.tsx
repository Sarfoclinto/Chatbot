import { SearchOutlined } from "@ant-design/icons";
import ContactCard from "./ContactCard";
import { useQuery } from "react-query";
import { fetchUsers } from "../api/ApiServices";
import { UserTypes } from "../Modules/types";
import { useState } from "react";
import { AxiosError } from "axios";

const ChatSidebar = () => {
  const { data, isLoading, error } = useQuery<UserTypes[], AxiosError>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [searchUser, SetSearchUser] = useState("");

  if (isLoading) {
    return (
      <div className="flex items-center gap-x-2">
        <span className="loading loading-ring loading-lg"></span>
        <p className="text-lg font-bold">Loading Users</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-lg font-bold text-warning">Error: </p>
        <p>{error.message || "Sorry! Couldn't fetch users. Refresh!!"}</p>
      </div>
    );
  }

  return (
    <aside className="h-full flex flex-col justify-between w-fit rounded-l-lg p-3 bg-white">
      <div
        id="forSearch"
        className="w-full p-0.5 flex bg-stone-200 rounded-3xl"
      >
        <div className="p-2 px-3 rounded-full bg-white">
          <SearchOutlined style={{ color: "gray" }} />
        </div>
        <input
          type="text"
          value={searchUser}
          onChange={(e) => SetSearchUser(e.target.value)}
          className="w-full bg-stone-200 outline-none flex items-center pl-2 rounded-3xl placeholder:text-lg"
          placeholder="Search"
        />
      </div>
      <div className="contacts overflow-auto h-[480px] ">
        {(searchUser
          ? data?.filter((contact: UserTypes) =>
              contact.name.toLowerCase().includes(searchUser.toLowerCase())
            )
          : data
        )?.map((contact: UserTypes) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
            avatar={contact.avatar}
          />
        ))}
        {/* {!searchUser
          ? data?.map((contact: UserTypes) => (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                avatar={contact.avatar}
              />
            ))
          : data
              ?.filter((contact: UserTypes) =>
                contact.name.toLowerCase().includes(searchUser.toLowerCase())
              )
              .map((contact: UserTypes) => (
                <ContactCard
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  avatar={contact.avatar}
                />
              ))} */}
      </div>
    </aside>
  );
};

export default ChatSidebar;
