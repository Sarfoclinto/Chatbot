import { BiEnvelope } from "react-icons/bi";

interface Props {
  text: string;
  via: string;
  timeStamp: string;
}

const SendingCard = ({ text, via, timeStamp }: Props) => {
  return (
    <div className="flex flex-col items-end w-full px-3">
      <div className="flex items-center py-1 gap-x-1 pb-2">
        <p className="text-[10px] text-stone-500 self-end">{timeStamp}</p>
        <div className="flex items-center gap-x-1">
          <BiEnvelope />
          <p className="font-semibold">
            <span className="text-xs self-center">via</span> {via}
          </p>
        </div>
      </div>
      <p className="text-pretty rounded-l-xl rounded-br-xl bg-[#b5cfe3] p-2 flex items-center justify-center max-w-[240px]">
        {text}
      </p>
    </div>
  );
};

export default SendingCard;
