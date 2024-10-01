const getTotalDaysOfMonth = (): number => {
  const month: number = getMonth();
  const year: number = getYear();

  // Checking if the month is Febuary
  if (month === 2) {
    // Checking if it's leap or not
    if (year % 4 === 0 && year % 100 != 0) {
      // Incase it's leap year, return 29 as total number days in the month of Febuary
      return 29;
      // Incase it's not leap year, return 28 as total number days in the month of Febuary
    } else return 28;
  }

  // Checking if the month is not Febuary and is divisible by 2 with no remainders
  if (month != 2 && month % 2 === 0) {
    // This month is has even number days, returning 30 as the number of the days
    return 30;
  } else if (month % 2 != 0) {
    // This month is has odd number days, returning 31 as the number of the days
    return 31;
  }

  // returning -1, incase things goes south
  return -1;
};

const getDaysRemaining = (input: string): number => {
  const totalDays = getTotalDaysOfMonth();
  const todayInNumber = getTheDay(input);

  return totalDays - todayInNumber;
  // if()
  // return -1;
};

const getYear = (): number => {
  const date: Date = new Date();
  return date.getFullYear();
};

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
  const month: number = getMonth();
  const monthName: string = months[month];

  return monthName;
};

const getMonth = (): number => {
  const date: Date = new Date();
  return date.getMonth();
};

const getTheDay = (input: string): number => {
  if (input === "month") {
    const date: number = new Date().getDate();
    const totalDays: number = getTotalDaysOfMonth();
    const result = ():number => {
      return totalDays - date;
    }
    }
    return { result() };
  }
  if (input === "week") {
    const date: number = new Date().getDay();
    const totalDays = 7;
    return { date, totalDays };
  }
  if (input === "year") {
    const date: Date = new Date();
    return date.getFullYear();
  }
  return -1;
};

export {
  getMonth,
  getMonthName,
  getTheDay,
  getTotalDaysOfMonth,
  getYear,
  getDaysRemaining,
};
