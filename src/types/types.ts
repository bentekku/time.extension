import React from "react";

type conditionType = "week" | "month" | "year";

type daysType = {
  daysPassed?: number;
  totalDays?: number;
  unboundDays?: number;
};

type DaysDataContextType = {
  condition: conditionType;
  setCondition: React.Dispatch<React.SetStateAction<conditionType>>;
};

type conditionArrayType = {
  name: string;
};

export type {
  conditionType,
  daysType,
  DaysDataContextType,
  conditionArrayType,
};
