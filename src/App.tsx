import ConditionDropDown from "./components/ConditionDropDown";
import DaysDisplay from "./components/DaysDisplay";
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";
import ThemeToggler from "./components/ThemeToggler";
import { getDaysRemaining } from "./lib/date-lib";

type Days = {
  daysPassed?: number;
  totalDays?: number;
  unboundDays?: number;
};

const App = () => {
  const condition: "week" | "month" | "year" = "year";
  const result = getDaysRemaining(condition);

  let daysData: Days = {
    daysPassed: 0,
    totalDays: 0,
    unboundDays: 0,
  }; // Initialize as an empty object

  // Check if the result is an object for the "year" condition
  if (typeof result === "object" && result !== null) {
    const { daysPassed, totalDays } = result as {
      daysPassed: number;
      totalDays: number;
    }; // Destructure the result

    daysData = {
      daysPassed,
      totalDays,
    };

    // console.log(`daysPassed:${daysData.daysPassed}. totalDays:${daysData.totalDays}`);
  } else {
    daysData.unboundDays = result;
  }

  return (
    <div className="font-medium h-screen w-full flex flex-col items-center justify-between bg-lightText">
      {/* HEADER */}
      <div className="w-4/5 flex flex-1 justify-between py-5">
        <ConditionDropDown />
        <InfoBlock
          condition={condition}
          days={daysData} // Pass daysData as prop
        />
        <ThemeToggler />
      </div>
      <div className="w-4/5 flex flex-[4] justify-center">
        <DaysDisplay condition={condition} days={daysData} />
      </div>
      <div className="flex flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default App;
