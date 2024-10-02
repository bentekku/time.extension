// Utility function to check if a year is a leap year
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Function to get the total number of days in the current month
const getTotalDaysOfMonth = (): number => {
  const { month, year } = getYearAndMonth();
  const daysInMonth = [
    31, // January
    isLeapYear(year) ? 29 : 28, // February
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31, // March to December
  ];
  return daysInMonth[month];
};

// Function to get the number of days remaining based on the input type
const getDaysRemaining = (input: "week" | "month" | "year"): number => {
  return getTheDay(input);
};

// Function to calculate days passed and remaining based on the input type
const getTheDay = (input: "month" | "week" | "year"): number => {
  const today = new Date();

  if (input === "month") {
    const totalDays = getTotalDaysOfMonth();
    return totalDays - today.getDate(); // Days remaining in the month
  }

  if (input === "week") {
    const adjustedToday = (today.getDay() + 6) % 7; // Returns 0 (Sun) to 6 (Sat) // Adjust so that Monday is 0 and Sunday is 6
    const totalDays: number = 7;
    const result: number = totalDays - 1 - adjustedToday; // Subtract 1 to count today

    return result;
  }

  if (input === "year") {
    const totalDaysInYear = isLeapYear(today.getFullYear()) ? 366 : 365;
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const differenceInMilliseconds = today.getTime() - startOfYear.getTime();
    const daysPassed =
      Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)) + 1; // +1 for today
    return totalDaysInYear - daysPassed; // Days remaining in the year
  }

  throw new Error("Invalid input provided"); // Error handling for unexpected input
};

// Function to get the name of the current month
const getMonthName = (): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { month } = getYearAndMonth();
  return months[month];
};

// Function to get both current year and month as an object
const getYearAndMonth = (): { year: number; month: number } => {
  const date = new Date();
  return { year: date.getFullYear(), month: date.getMonth() };
};

export {
  getYearAndMonth,
  getMonthName,
  getTotalDaysOfMonth,
  getDaysRemaining,
  // getTheDay, // not really neccessary to export this function as it is called by getDaysRemaining()
};
