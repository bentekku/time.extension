import { useDaysData } from "@/context/DaysDataProvider";
import { getTotalDaysOfMonth } from "@/lib/date-lib";
import { daysType } from "@/types/types";

interface Props {
  days: daysType;
}

const DaysDisplay = ({ days }: Props) => {
  const { condition } = useDaysData();

  let total: number;
  let passed: number;

  if (condition === "week") {
    total = 7;
    passed = new Date().getDay();
  } else if (condition === "month") {
    total = getTotalDaysOfMonth();
    passed = new Date().getDate();
  } else {
    total = days?.totalDays !== undefined ? days.totalDays : 0;
    passed = days?.daysPassed !== undefined ? days.daysPassed : 0;
  }

  const left: number = total - passed;

  return (
    // border border-red-600
    <div className="w-2/3 h-full p-5 rounded-lg flex items-center justify-center select-none">
      <div className="flex">
        <h1 className="text-[64px] font-semibold animate-pulse -translate-y-1 translate-x-3">
          {left}
        </h1>
        <span className="text-[72px] opacity-[11%] font-thin">/</span>
        <h2 className="text-[20px] opacity-[62%] font-extralight translate-y-14 -translate-x-3">
          {total}
        </h2>
      </div>
    </div>
  );
};
export default DaysDisplay;
