import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import MealDetails from "./Pages/MealDetails/MealDetails";
import Categories from "./Pages/Categories/Categories";

export default function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "mealdetails/:mealId",
          element: <MealDetails />,
        },
        {
          path: "category/:category",
          element: <Categories />,
        }
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
