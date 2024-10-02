import { getTotalDaysOfMonth } from "@/lib/date-lib";
import { ReactNode } from "react";

type Condition = "week" | "month" | "year";
type Days = {
  daysPassed?: number;
  totalDays?: number;
  unboundDays?: number;
};

interface Props {
  condition: Condition;
  days: Days;
}
interface BlocksProps {
  children: ReactNode;
}

const DaysDisplay = ({ condition, days }: Props) => {
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
    <div className="w-2/3 h-full border border-red-600 p-5">
      <div className="flex h-full w-full items-center justify-center">
        {" "}
        <div className="flex flex-wrap justify-center">
          {" "}
          {/* Passed days blocks */}
          {Array.from({ length: passed }).map((_, index) => (
            <PassedBlocks key={index}>{index + 1}</PassedBlocks>
          ))}
          {/* Remaining days blocks */}
          {Array.from({ length: left }).map((_, index) => (
            <LeftBlocks key={index}>{index + 1}</LeftBlocks>
          ))}
        </div>
      </div>
    </div>
  );
};

const PassedBlocks: React.FC<BlocksProps> = ({ children }) => {
  // min-w-10 min-h-10
  return (
    <div
      className={`bg-passedDay m-2 transition-all flex flex-1 items-center justify-center text-lightText`}
    >
      {children}
    </div>
  );
};

const LeftBlocks: React.FC<BlocksProps> = ({ children }) => {
  // min-w-10 min-h-10
  return (
    <div className=" bg-remainingDay m-2 transition-all p-1 flex flex-1 items-center justify-center text-darkMode">
      {children}
    </div>
  );
};

export default DaysDisplay;
