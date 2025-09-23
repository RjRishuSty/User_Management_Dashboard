import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";

const App = () => {

  //* Define the all routes.........
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
