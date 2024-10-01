import {
  getTheDay,
  getMonth,
  getTotalDaysOfMonth,
  getMonthName,
  getYear,
  getDaysRemaining,
} from "./lib/date-lib";

const App = () => {
  const condition: string = "year";

  return (
    <div className="text-3xl font-medium">
      {/* Year:{getYear()}. Month:{getMonth()}, {getMonthName()}. Day:
      {getTheDay("month")}/{getTotalDaysOfMonth()}.<br /> */}
      Days remaining for the year: {getDaysRemaining(condition)}
    </div>
  );
};

export default App;
