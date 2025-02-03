import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Meals from "../Meals/Meals";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  async function getCategories() {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => {
        const categoryList = [
          { strCategory: "All" },
          ...res.data?.meals?.map((meal) => ({
            strCategory: meal.strCategory,
          })),
        ];
        setCategories(categoryList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      <h1 className="categories-title">Learn, Cook, Eat Your Food</h1>
      <div className="sm:hidden mt-8"></div>
      <ul className="categories-list">
        {categories.map((category) => (
          <li key={category.strCategory} className="categories-item">
            <NavLink
              to={
                category.strCategory === "All"
                  ? "/"
                  : `/category/${category.strCategory}`
              }
              className="categories-link"
              onClick={() => setSelectedCategory(category.strCategory)}
            >
              {category.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
      <Meals category={selectedCategory} />
    </div>
  );
}
