import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { About } from "./screens/About";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <About />
  </StrictMode>,
);
