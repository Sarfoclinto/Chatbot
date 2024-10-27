import { useQuery } from "react-query";
import { fetchUserById } from "../api/ApiServices";
import { Avatar, Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

interface Props {
  receipient: string | undefined;
}

const ChatGeneralInfo = ({ receipient }: Props) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: [receipient],
    queryFn: () => fetchUserById(receipient),
  });

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
        <p className="text-lg font-bold text-warning">Oops</p>
        <p className="text-lg font-bold text-stone-400">User not found</p>
      </div>
    );
  }

  return (
    <div className=" w-1/3">
      {user && (
        <Collapse
          ghost
          expandIconPosition="right"
          defaultActiveKey={["generalinfo"]}
        >
          <CollapsePanel
            key="generalinfo"
            header={<span className="text-lg font-bold">General Info</span>}
          >
            <div className="w-full p-3 bg-[#e7e5e4] rounded-xl">
              <div className="flex items-center gap-x-1">
                <Avatar src={user.avatar} />
                <div>
                  <p className="text-base font-bold">{user.name}</p>
                  <p className="text-stone-700">{user.phone}</p>
                </div>
              </div>
              <div className="py-1">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div className="py-1">
                <p className="text-sm text-gray-400">Date Created</p>
                <p className="font-medium">{user.dateCreated}</p>
              </div>
              <div className="py-1">
                <p className="text-sm text-gray-400">Status</p>
                <p className="font-medium text-white px-3 py-1 w-fit rounded-xl bg-[#a384fc]">
                  {user.status}
                </p>
              </div>
            </div>
          </CollapsePanel>
        </Collapse>
      )}
    </div>
  );
};

export default ChatGeneralInfo;
