import { Avatar } from "antd";

interface Props {
  avatar: string;
  name: string;
  timeStamp: string;
  text: string;
}
const RecievingCard = ({ avatar, name, timeStamp, text }: Props) => {
  return (
    <div className="px-3 ">
      <div className="flex items-center gap-x-1 mb-1">
        <Avatar src={avatar} />
        <p className="text-bold">{name}</p>
        <p className="text-[10px] text-stone-500">{timeStamp}</p>
      </div>
      <p className="p-2 rounded-r-xl rounded-bl-xl bg-white max-w-[240px] text-pretty">
        {text}
      </p>
    </div>
  );
};

export default RecievingCard;
