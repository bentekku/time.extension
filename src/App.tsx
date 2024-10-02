import { getDaysRemaining } from "./lib/date-lib";

const App = () => {
  const condition: "week" | "month" | "year" = "year";

  return (
    <div className="text-3xl font-medium">
      Days remaining for the year's end: {getDaysRemaining(condition)}
    </div>
  );
};

export default App;
