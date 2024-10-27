import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  FileExcelOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  MessageOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { IoContract } from "react-icons/io5";
import { Link } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "all",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        All
      </Link>
    ),
    icon: <FileTextOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: "assigntedToMe",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        Assigned To Me
      </Link>
    ),
    icon: <FileDoneOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: "unassigned",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        Unassigned
      </Link>
    ),
    icon: <FileExcelOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: "livechat",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        Live Chat
      </Link>
    ),
    icon: <MessageOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: "blocked",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        Blocked
      </Link>
    ),
    icon: <CloseCircleOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: "trash",
    label: (
      <Link to="" className="text-stone-200 text-base font-normal">
        Trash
      </Link>
    ),
    icon: <DeleteOutlined style={{ fontSize: 16 }} />,
  },
];
const Sidebar = () => {
  return (
    <aside>
      <Sider className="bg-[#24252d] h-full flex flex-col py-5">
        <Link
          to="/"
          className="logo flex items-center justify-center py-2 mb-6"
        >
          <IoContract size={30} />
          <h3 className="text-xl font-bold text-stone-200 hover:text-blue-300 transition-all">
            Attmosfire
          </h3>
        </Link>
        <Menu
          items={items}
          defaultSelectedKeys={["all"]}
          className="custom-menu bg-[#24252d]"
          theme="dark"
        />
      </Sider>
    </aside>
  );
};

export default Sidebar;
