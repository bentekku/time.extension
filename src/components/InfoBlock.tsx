type Condition = "week" | "month" | "year";
type Days = {
  daysPassed?: number;
  totalDays?: number;
  unboundDays?: number;
};

interface InfoBlockProps {
  condition: Condition;
  days: Days;
}

const InfoBlock = ({ condition, days }: InfoBlockProps) => {
  // Safely handle the display for days remaining
  const daysRemaining =
    days?.totalDays && days?.daysPassed
      ? days.totalDays - days.daysPassed
      : "N/A"; // Display "N/A" if data is missing

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl mb-1">Time</h1>
      <h2 className="capitalize text-darkText text-3xl mb-1">
        <span className="text-lg text-gray-300">|</span> {condition}{" "}
        <span className="text-lg text-gray-300">|</span>
      </h2>
      <p className="text-2xl text-darkText">
        {/* Display the days remaining */}
        {typeof daysRemaining === "number" ? daysRemaining : days.unboundDays}
      </p>
    </div>
  );
};

export default InfoBlock;
