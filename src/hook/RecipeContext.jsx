import React, { createContext, useEffect, useReducer, useState } from "react";

import { recipeData } from "../database/recipeData";
import { RecipeReducer } from "./RecipeReducer";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const RecipeDetail = {
    id: "",
    imageUrl: "",
    recipeName: "",
    cuisineType: "",
    ingredients: [],
    cookingInstructions: [],
  };

  const [state, dispatchRecipeState] = useReducer(RecipeReducer, {
    allRecipe: recipeData,
    searchType: "",
    search: "",
    apendRecipe: RecipeDetail,
  });
  const { allRecipe, searchType, search, apendRecipe } = state;

  const CheckCondition = search.length > 0;

  const FilteredRecipe =
    CheckCondition && searchType === "ingredients"
      ? allRecipe.filter((item) =>
          item.ingredients.some((recipe) =>
            recipe.toLowerCase().includes(search.toLowerCase())
          )
        )
      : CheckCondition && searchType === "cuisineType"
      ? allRecipe.filter((item) =>
          item.cuisineType.toLowerCase().includes(search.toLowerCase())
        )
      : search.length >= 0
      ? allRecipe.filter((item) =>
          item.recipeName.toLowerCase().includes(search.toLowerCase())
        )
      : allRecipe;

  useEffect(() => {
    const isInsideLocal = localStorage.getItem("recipe");
    if (isInsideLocal) {
      dispatchRecipeState({
        type: "LOCAL_DATA",
        payload: JSON.parse(isInsideLocal),
      });
    } else {
      localStorage.setItem("recipe", JSON.stringify(recipeData));
      dispatchRecipeState({ type: "LOCAL_DATA", payload: recipeData });
    }
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        allRecipe,
        searchType,
        dispatchRecipeState,
        search,
        FilteredRecipe,
        apendRecipe,
        isModalOpen,
        setIsModalOpen,
        isEdit, setIsEdit
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
