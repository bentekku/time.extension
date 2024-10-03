import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DaysDataProvider from "./context/DaysDataProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DaysDataProvider>
      <App />
    </DaysDataProvider>
  </StrictMode>
);
