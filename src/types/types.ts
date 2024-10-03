import React from "react";

export type conditionType = "week" | "month" | "year";

export type daysType = {
  daysPassed?: number;
  totalDays?: number;
  unboundDays?: number;
};

export type DaysDataContextType = {
  condition: conditionType;
  setCondition: React.Dispatch<React.SetStateAction<conditionType>>;
};
