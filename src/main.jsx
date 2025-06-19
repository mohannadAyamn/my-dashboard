import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import "./index.css";

// ? pages
import App from "./App.jsx";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";

const route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={route} />
    </ThemeProvider>
  </StrictMode>
);
