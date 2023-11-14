import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Main/Dashboard";
import App from "../App";
import Summary from "../pages/components/Summary";
import Welcome from "../pages/components/Welcome";
import Behavior from "../pages/components/Behavior";
import Attendance from "../pages/components/Attendance";
import Academic from "../pages/components/Academic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: "/behavior",
        element: <Behavior />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/academic",
        element: <Academic />,
      },
    ],
  },
]);
