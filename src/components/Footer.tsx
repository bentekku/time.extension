import { useState, useEffect } from "react";

// Helper function to get the ordinal suffix for the day of the month
const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const Footer = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Custom date format
  const formatDate = (date: Date) => {
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = date.getDate();
    const year = date.getFullYear();
    const ordinalSuffix = getOrdinalSuffix(day);

    // Format time
    const timeString = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    }).format(date);

    return `${dayName}, ${month} ${day}${ordinalSuffix}, ${year}. ${timeString}`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 group py-3 transition-opacity duration-300 select-none">
      <h1 className="text-[22px] text-darkText opacity-[30%] font-light">
        {formatDate(time)}
      </h1>
      <p className="group-hover:opacity-[35%] opacity-0 text-darkText">
        Made with &lt;3 by{" "}
        <a
          href="http://www.github.com/bentekku"
          target="_blank"
          className="hover:underline"
        >
          Shadab Khan
        </a>
      </p>
    </div>
  );
};

export default Footer;
