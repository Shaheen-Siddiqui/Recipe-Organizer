import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RecipeListing } from "./page/RecipeListing";
import { SingleRecipe } from "./page/SingleRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeListing />} />
        <Route path="/:recipeID" element={<SingleRecipe />} />
      </Routes>
    </>
  );
}

export default App;
