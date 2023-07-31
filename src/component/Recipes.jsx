import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../hook/RecipeContext";

export const Recipe = ({ recipeItem }) => {
  const { dispatchRecipeState, setIsModalOpen, isEdit, setIsEdit } =
    useContext(RecipeContext);
  const { id, recipeName, cuisineType, imageUrl } = recipeItem;

  const deleteRecipe = () =>
    dispatchRecipeState({ type: "DELETE_RECIPE", payload: recipeItem.id });

  const updateRecipe = () => {
    setIsEdit(true);
    setIsModalOpen(true);
    dispatchRecipeState({ type: "SET_UPDATE_RECIPE", payload: recipeItem });
  };

  return (
    <>
      <div className="card" id="card-main-case" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt={recipeName} />
        <div className="card-body">
          <h5 className="card-title">{recipeName}</h5>

          <div>
            <strong>Cuisine Type</strong>&nbsp;&nbsp;&nbsp;&nbsp;
            {cuisineType} <br />
            <strong>Ingredients</strong> &nbsp;
            <Link to={`/${recipeItem.id}`}>
              <span>See Detail</span>
            </Link>
            <br />
            <strong> Instructions</strong> &nbsp;{" "}
            <Link to={`/${recipeItem.id}`}>
              <span>See Detail</span>
            </Link>
            <br />
          </div>
        </div>

        <div className="action-icon">
          <span onClick={deleteRecipe}>&times;</span> <hr />
          <span onClick={updateRecipe}>&#9998;</span>
        </div>
      </div>
    </>
  );
};
