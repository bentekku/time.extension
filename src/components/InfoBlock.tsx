import { useDaysData } from "@/context/DaysDataProvider";
import { conditionArrayType, conditionType } from "@/types/types";

const InfoBlock = () => {
  const { condition, setCondition } = useDaysData();

  const conditionArray: conditionArrayType[] = [
    { name: "week" },
    { name: "month" },
    { name: "year" },
  ];

  const handleClick = () => {
    // Find the current condition index whenever the button is clicked
    let conditionIndex = conditionArray.findIndex(
      (item) => item.name === condition
    );

    // Cycle to the next condition or wrap back to 0
    if (conditionIndex < conditionArray.length - 1) {
      conditionIndex++;
    } else {
      conditionIndex = 0;
    }

    // Update the condition with the new value
    const newCondition = conditionArray[conditionIndex].name as conditionType;
    setCondition(newCondition);
  };

  return (
    <div className="flex flex-col items-center select-none">
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
