import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipeContext } from "../hook/RecipeContext";

export const SingleRecipe = () => {
  const { allRecipe } = useContext(RecipeContext);
  const { recipeID } = useParams();

  const RecipeDetail = allRecipe.find((item) => item.id == recipeID);

  const {
    recipeName,
    ingredients,
    cookingInstructions,
    cuisineType,
    imageUrl,
  } = RecipeDetail;

  return (
    <>
      <Link to="/">
        <button className="btn btn-secondary container m-2">G0 BACK</button>
      </Link>
      <div className="text-start">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={imageUrl}
                className="img-fluid rounded-start"
                alt={recipeName}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipeName}</h5>
                <p>{cuisineType}</p>
                <p className="card-text">
                  <strong>Ingredients</strong>
                  <br />
                  {ingredients}
                </p>
                <p className="card-text">
                  <strong>Cooking Instruction</strong>
                  <br />
                  <ol>
                    {cookingInstructions.map((cookIns) => {
                      return <li>{cookIns}</li>;
                    })}
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
