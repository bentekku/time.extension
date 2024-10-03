import { useDaysData } from "@/context/DaysDataProvider";

const InfoBlock = () => {
  const { condition } = useDaysData();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[37px] mb-1">Time.Keeper</h1>
      <h2 className="capitalize text-darkText text-[18px] mb-1 cursor-pointer">
        | {condition} |
      </h2>
    </div>
  );
};

export default InfoBlock;
