import DaysDisplay from "./components/DaysDisplay";
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";
import { useDaysData } from "./context/DaysDataProvider";
import { getDaysRemaining } from "./lib/date-lib";
import { daysType } from "./types/types";

const App = () => {
  // const condition: "week" | "month" | "year" = "year"; // No need for it anymore
  const { condition } = useDaysData();
  const result = getDaysRemaining(condition);

  let daysData: daysType = {
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
    <div className="font-medium h-screen w-full flex flex-col items-center justify-between bg-darkMode text-lightText font-jetBrain">
      {/* HEADER */}
      <div className="w-4/5 flex items-center justify-center py-5">
        <InfoBlock />
      </div>
      <div className="w-4/5 flex justify-center">
        <DaysDisplay days={daysData} />
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
};

export default App;
