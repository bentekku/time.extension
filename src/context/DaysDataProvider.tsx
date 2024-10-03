import { createContext, useContext, ReactNode } from "react";
import { DaysDataContextType } from "@/types/types";
import { useCondition } from "@/hooks/useCondtion";

const DaysDataContext = createContext<DaysDataContextType | null>(null);

const DaysDataProvider = ({ children }: { children: ReactNode }) => {
  const { condition, setCondition } = useCondition();

  return (
    <DaysDataContext.Provider value={{ condition, setCondition }}>
      {children}
    </DaysDataContext.Provider>
  );
};

// Custom hook to use the DaysDataContext
export const useDaysData = () => {
  const context = useContext(DaysDataContext);
  if (!context) {
    throw new Error("useDaysData must be used within a DaysDataProvider");
  }
  return context;
};

export default DaysDataProvider;
