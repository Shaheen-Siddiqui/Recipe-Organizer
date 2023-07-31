import { useContext } from "react";
import { RecipeContext } from "../hook/RecipeContext";

export const SearchFilter = () => {
  const { searchType, dispatchRecipeState, search, setIsModalOpen } =
    useContext(RecipeContext);
  return (
    <div className="header-case mb-5 p-2">
      <div className="parent-main">
        <div className="input-case">
          <input
            value={search}
            type="text"
            className="form-control input-size"
            placeholder="Search by name"
            onChange={(event) =>
              dispatchRecipeState({
                type: "SEARCH",
                payload: event.target.value,
              })
            }
          />
        </div>
        <div className="">
          <input
            checked={searchType != "ingredients" && "cuisineType"}
            type="radio"
            id="name"
            name="filter"
            onChange={() =>
              dispatchRecipeState({
                type: "FILTER_ACCORDINGLY",
                payload: "recipeName",
              })
            }
          />
          <label htmlFor="name">Name</label>
        </div>

        <div>
          <input
            type="radio"
            id="ingredients"
            name="filter"
            onChange={() =>
              dispatchRecipeState({
                type: "FILTER_ACCORDINGLY",
                payload: "ingredients",
              })
            }
          />
          <label htmlFor="ingredients">Ingredient</label>
        </div>

        <div>
          <input
            type="radio"
            id="cuisinetype"
            name="filter"
            onChange={() =>
              dispatchRecipeState({
                type: "FILTER_ACCORDINGLY",
                payload: "cuisineType",
              })
            }
          />
          <label htmlFor="cuisinetype">Cuisine Type</label>
        </div>
      </div>

      <div className="icon" onClick={() => setIsModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M12 4v16m8-8H4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
