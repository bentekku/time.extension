import {
  getTheDay,
  getMonth,
  getTotalDaysOfMonth,
  getMonthName,
  getYear,
} from "./lib/date-lib";

const App = () => {
  const condition: string = "month";

  return (
    <div>
      Year:{getYear()}. Month:{getMonth()}, {getMonthName()}. Day:{getTheDay()}/
      {getTotalDaysOfMonth()}
    </div>
  );
};

export default App;
