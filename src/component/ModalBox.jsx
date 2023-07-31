import { useContext } from "react";
import { RecipeContext } from "../hook/RecipeContext";

export const ModalBox = () => {
  const {
    apendRecipe,
    apendRecipe: { recipeName, cuisineType, ingredients, cookingInstructions },
    dispatchRecipeState,
    setIsModalOpen,
    isEdit,
    setIsEdit,
  } = useContext(RecipeContext);

  const formSubmitHandler = (event) => {
    if (isEdit) {
      dispatchRecipeState({
        type: "GET_UPDATE_RECIPE",
        payload: apendRecipe,
      });
      setIsEdit(false);
    } else {
      dispatchRecipeState({ type: "GET_RECIPE_DETAIL" });
    }
    event.preventDefault();
    setIsModalOpen(false);
    dispatchRecipeState({ type: "RESET_RECIPE_FIELDS" });
  };

  const recipeHandler = (event) => {
    const { name, value } = event.target;
    dispatchRecipeState({
      type: "SET_RECIPE_DETAIL",
      payload: { name, value },
    });
  };

  const selectRecipeImage = (event) => {
    dispatchRecipeState({
      type: "SELECT_IMAGE",
      payload: URL.createObjectURL(event.target.files[0]),
    });
  };

  return (
    <form id="modal-case" onSubmit={formSubmitHandler}>
      <div id="modal-content">
        <label htmlFor="choose">
          <strong className="button-33">Selcts Image</strong>
        </label>
        <input type="file" id="choose" onChange={selectRecipeImage} />

        <div class="input-group mb-3">
          <input
            required
            autoComplete="off"
            name="recipeName"
            value={recipeName}
            onChange={recipeHandler}
            type="text"
            class="form-control"
            placeholder="Enter Recipe Name"
          />
        </div>
        <div class="input-group mb-3">
          <input
            required
            autoComplete="off"
            name="ingredients"
            value={ingredients}
            onChange={recipeHandler}
            type="text"
            class="form-control"
            placeholder="Enter Ingredient"
          />
        </div>
        <div class="input-group mb-3">
          <input
            required
            autoComplete="off"
            name="cookingInstructions"
            value={cookingInstructions}
            onChange={recipeHandler}
            type="text"
            class="form-control"
            placeholder="Enter Cooking Instruction"
          />
        </div>
        <div class="input-group mb-3">
          <input
            required
            autoComplete="off"
            name="cuisineType"
            value={cuisineType}
            onChange={recipeHandler}
            type="text"
            class="form-control"
            placeholder="Enter Cuisine Type"
          />
        </div>
        <hr />
        <button className="btn btn-success m-2" type="submit">
          Save Recipe
        </button>
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          {" "}
          Discard
        </button>
      </div>
    </form>
  );
};
