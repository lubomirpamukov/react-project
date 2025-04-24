import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavigationProvider } from "./components/context/NavigationContext";

import "./index.css";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
