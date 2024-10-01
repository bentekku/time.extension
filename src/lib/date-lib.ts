const getYear = (): number => {
  const date: Date = new Date();
  return date.getFullYear();
};

const getDaysRemaining = (): number => {
  return -1;
};

const getMonth = (): number => {
  const date: Date = new Date();
  return date.getMonth();
};

const getMonthName = (): string => {
  const month: number = getMonth();

  let monthName: string = "";

  switch (month) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "Febuary";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;

    default:
      console.error("Wrong input to detect the month name");
      throw new Error("Wrong input to detect the month name");

      break; // It won't be called as an Error is being thrown, which automatically exits the program
  }

  return monthName;
};

const getTheDay = (): number => {
  const date: Date = new Date();
  return date.getDate();
};

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

export {
  getMonth,
  getMonthName,
  getTheDay,
  getTotalDaysOfMonth,
  getYear,
  getDaysRemaining,
};
