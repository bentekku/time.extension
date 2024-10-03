import { conditionType } from "@/types/types";
import { useEffect, useState } from "react";

export const useCondition = () => {
  // Function to get the initial condition from localStorage
  const getInitialCondition = () => {
    const savedCondition = localStorage.getItem("condition");
    return savedCondition ? (savedCondition as conditionType) : "week"; // Default to "week"
  };

  // State for the condition
  const [condition, setCondition] = useState(getInitialCondition());

  // Effect to update localStorage whenever condition changes
  useEffect(() => {
    localStorage.setItem("condition", condition);
  }, [condition]);

  return { condition, setCondition };
};
