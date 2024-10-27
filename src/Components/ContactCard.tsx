import { Avatar, Badge, Image } from "antd";
import { UserTypes } from "../Modules/types";
import { Link } from "react-router-dom";

const ContactCard = ({ id, name, phone, avatar }: UserTypes) => {
  return (
    <div className="py-2 border-b">
      <div className="flex items-center gap-x-2">
        <Badge count={3} size="small" color="#a181fb" offset={[-23, 1]}>
          <div className="w-9 h-9 rounded overflow-hidden">
            <Image
              src={avatar}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
          </div>
        </Badge>
        <Link to={`${id}`} className="flex  flex-col w-full">
          <div className="flex items-center justify-between">
            <p className="font-medium">{name}</p>
            <p className="text-stone-400">12:38</p>
          </div>
          <p className="text-stone-400">{phone}</p>
        </Link>
      </div>
      <p className="w-[244px] overflow-hidden">
        Hello! I am looking for a new partn...
      </p>
    </div>
  );
};

export default ContactCard;
