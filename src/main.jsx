import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Statistics from "./pages/Statistics.jsx";
import UserContext from "./context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       index:true,
        element: <Dashboard/>,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
    <RouterProvider router={router} />
    </UserContext>
  </StrictMode>
);
