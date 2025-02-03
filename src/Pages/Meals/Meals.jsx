import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Meals.css";
import MealItem from "../../Components/MealItem/MealItem";
import { ImSpinner } from "react-icons/im";

export default function Meals({category}) {
  const [meals, setMeals] = useState([]);
  async function getMeals(selectedCategory) {
    const url =
      selectedCategory === "All"
        ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    const res = await axios
      .get(url)
      .then((res) => {
        setMeals(res.data?.meals || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    getMeals(category);
  }, [category]);
  return (
    <div className="meals-container">
      <div className="meals-grid">
        {meals.length ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-item-container">
              <MealItem meal={meal} />
            </div>
          ))
        ) : (
          <ImSpinner className="spinner" />
        )}
      </div>
    </div>
  );
}
