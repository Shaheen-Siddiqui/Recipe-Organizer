import { useContext } from "react";
import { Recipe } from "../component/Recipes";
import { RecipeContext } from "../hook/RecipeContext";
import { SearchFilter } from "../component/SearchFilter";
import { ModalBox } from "../component/ModalBox";

export const RecipeListing = () => {
  const { allRecipe, FilteredRecipe, isModalOpen } =
    useContext(RecipeContext);
  return (
    <>
      <SearchFilter />
      {isModalOpen && <ModalBox />}

      
      <div className="d-flex flex-wrap gap-3">
        {FilteredRecipe.map((recipeItem) => {
          return <Recipe key={recipeItem.id} recipeItem={recipeItem} />;
        })}
      </div>
    </>
  );
};
