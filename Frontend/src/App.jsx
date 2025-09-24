import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import { UserProvider } from "./context_Api/UserContext";
import { FilterProvider } from "./context_Api/UserFilterContext";
import { DialogProvider } from "./context_Api/DialogContext";

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
  return (
    <UserProvider>
      <FilterProvider>
      <DialogProvider>
        <RouterProvider router={router} />
        </DialogProvider>
      </FilterProvider>
    </UserProvider>
  );
};

export default App;
