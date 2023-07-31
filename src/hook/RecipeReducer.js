import { v4 as uuid } from "uuid";

export const RecipeReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOCAL_DATA":
      return {
        ...state,
        allRecipe: payload,
      };
    case "SEARCH":
      return {
        ...state,
        search: payload,
      };
    case "FILTER_ACCORDINGLY":
      return {
        ...state,
        searchType: payload,
      };
    case "SET_RECIPE_DETAIL":
      const { name, value } = payload;
      return {
        ...state,
        apendRecipe: { ...state.apendRecipe, [name]: value },
      };
    case "GET_RECIPE_DETAIL":
      const getRecipeDetail = [
        ...state.allRecipe,
        {
          ...state.apendRecipe,
          id: uuid(),
          cookingInstructions:
            state.apendRecipe.cookingInstructions.split(", "),
        },
      ];
      localStorage.setItem("recipe", JSON.stringify(getRecipeDetail));
      return {
        ...state,
        allRecipe: getRecipeDetail,
      };
    case "SELECT_IMAGE":
      return {
        ...state,
        apendRecipe: {
          ...state.apendRecipe,
          imageUrl: payload,
        },
      };
    case "DELETE_RECIPE":
      const deleteRecipe = state.allRecipe.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem("recipe", JSON.stringify(deleteRecipe));
      return {
        ...state,
        allRecipe: deleteRecipe,
      };

    case "SET_UPDATE_RECIPE":
      return {
        ...state,
        apendRecipe: payload,
      };
    case "GET_UPDATE_RECIPE":
      const getRecipeField = state.allRecipe.map((dbItem) =>
        dbItem.id === payload.id ? payload : dbItem
      );
      localStorage.setItem("recipe", JSON.stringify(getRecipeField));

      return {
        ...state,
        allRecipe: getRecipeField,
      };
    case "RESET_RECIPE_FIELDS":
      return {
        ...state,
        apendRecipe: {
          id: "",
          imageUrl: "",
          recipeName: "",
          cuisineType: "",
          ingredients: [],
          cookingInstructions: [],
        },
      };
    default:
      state;
  }
};
