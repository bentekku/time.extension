import { useDaysData } from "@/context/DaysDataProvider";
import { conditionArrayType, conditionType } from "@/types/types";

const InfoBlock = () => {
  const { condition, setCondition } = useDaysData();

  const conditionArray: conditionArrayType[] = [
    {
      name: "week",
    },
    {
      name: "month",
    },
    {
      name: "year",
    },
  ];

  let conditionIndex: number = 0;

  for (let i = 0; i < conditionArray.length - 1; i++) {
    if (condition === conditionArray[i].name) {
      conditionIndex = i;
    } else {
      conditionIndex = 0;
    }
  }

  const handleClick = () => {
    if (conditionIndex > conditionArray.length) {
      conditionIndex++;
    } else {
      conditionIndex = 0;
    }
    const newCondition = conditionArray[conditionIndex].name as conditionType;
    setCondition(newCondition);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[37px] mb-1">Time.Keeper</h1>
      <h2
        className="capitalize text-darkText text-[18px] mb-1 cursor-pointer"
        onClick={handleClick}
      >
        | {condition} |
      </h2>
    </div>
  );
};

export default InfoBlock;
