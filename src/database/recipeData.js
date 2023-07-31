import { v4 as uuid } from "uuid";
export const recipeData = [
  {
    id: uuid(),
    recipeName: "Spaghetti Bolognese",
    ingredients: [
      "500g spaghetti",
      "400g minced beef",
      "1 onion",
      "2 garlic cloves",
      "400g canned tomatoes",
      "2 tbsp tomato paste",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "Salt and pepper to taste"
    ],
    cookingInstructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, brown minced beef with chopped onion and garlic.",
      "Add canned tomatoes, tomato paste, oregano, basil, salt, and pepper.",
      "Simmer for 20 minutes, stirring occasionally.",
      "Serve sauce over cooked spaghetti."
    ],
    cuisineType: "Italian",
    imageUrl:
      "https://www.chefkunalkapur.com/wp-content/uploads/2022/09/Schezwan-Chilli-Potato-1300x731.jpg?v=1663910746"
  },
  {
    id: uuid(),
    recipeName: "Chicken Stir-Fry",
    ingredients: [
      "500g chicken breast",
      "1 red bell pepper",
      "1 yellow bell pepper",
      "1 broccoli head",
      "1 carrot",
      "4 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "2 cloves garlic",
      "1-inch piece ginger",
      "2 tbsp vegetable oil"
    ],
    cookingInstructions: [
      "Slice chicken and marinate with soy sauce and minced garlic.",
      "Chop vegetables into bite-sized pieces.",
      "Stir-fry chicken in a hot pan until cooked.",
      "Add vegetables and stir-fry until tender-crisp.",
      "Season with oyster sauce and grated ginger.",
      "Serve hot with steamed rice."
    ],
    cuisineType: "Asian",
    imageUrl:
      "https://images.news18.com/ibnkhabar/uploads/2021/02/Chilli-Potato.jpg?im=FitAndFill,width=1200,height=1200"
  },
  {
    id: uuid(),
    recipeName: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "200g mozzarella cheese",
      "Fresh basil leaves",
      "Tomato sauce",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    cookingInstructions: [
      "Preheat oven to the highest temperature.",
      "Roll out pizza dough and spread tomato sauce over it.",
      "Add mozzarella cheese and torn basil leaves.",
      "Drizzle with olive oil, season with salt and pepper.",
      "Bake for 10-15 minutes or until crust is golden.",
      "Slice and enjoy the Margherita pizza!"
    ],
    cuisineType: "Italian",
    imageUrl:
      "https://i2-prod.dailyrecord.co.uk/incoming/article27276232.ece/ALTERNATES/s1200b/281427932_523031429355203_8526132440610086071_n.jpg"
  },
  {
    id: uuid(),
    recipeName: "Chicken Caesar Salad",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "Romaine lettuce",
      "1 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "Caesar dressing",
      "1 lemon",
      "Salt and pepper to taste"
    ],
    cookingInstructions: [
      "Season chicken with salt and pepper.",
      "Grill or pan-fry chicken until fully cooked.",
      "Slice chicken into strips.",
      "In a bowl, toss lettuce with Caesar dressing and lemon juice.",
      "Top with sliced chicken, croutons, and grated Parmesan.",
      "Serve the Chicken Caesar Salad."
    ],
    cuisineType: "American",
    imageUrl:
      "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=2000"
  },
  {
    id: uuid(),
    recipeName: "Vegetable Biryani",
    ingredients: [
      "1 cup basmati rice",
      "Assorted vegetables (potatoes, carrots, beans, peas)",
      "1 large onion",
      "2 tbsp biryani masala",
      "1/2 cup yogurt",
      "1/4 cup mint leaves",
      "1/4 cup coriander leaves",
      "Ghee or vegetable oil",
      "Whole spices (cinnamon, cardamom, cloves)"
    ],
    cookingInstructions: [
      "Soak rice for 30 minutes and partially cook it.",
      "In a pot, sauté onions and whole spices in ghee/oil.",
      "Add assorted vegetables and cook with biryani masala.",
      "Layer partially cooked rice, vegetables, and mint-coriander leaves.",
      "Drizzle yogurt on top and cook on low heat until rice is fully cooked.",
      "Serve flavorful Vegetable Biryani."
    ],
    cuisineType: "Indian",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
  },
  {
    id: uuid(),
    recipeName: "Chicken Alfredo Pasta",
    ingredients: [
      "8 oz fettuccine pasta",
      "1 lb boneless chicken breast",
      "2 cups heavy cream",
      "1 cup grated Parmesan cheese",
      "3 garlic cloves, minced",
      "1/4 cup butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    cookingInstructions: [
      "Cook fettuccine pasta according to package instructions.",
      "Season chicken breast with salt and pepper, then cook and slice.",
      "In a saucepan, melt butter and sauté minced garlic.",
      "Stir in heavy cream and grated Parmesan cheese until creamy.",
      "Add cooked pasta and sliced chicken, toss to coat.",
      "Garnish with fresh parsley and serve Chicken Alfredo Pasta hot."
    ],
    cuisineType: "Italian",
    imageUrl: "https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg"
  },
  {
    id: uuid(),
    recipeName: "Avocado Toast",
    ingredients: [
      "2 slices whole-grain bread",
      "1 ripe avocado",
      "1 small lime",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "Fresh cilantro or parsley for garnish"
    ],
    cookingInstructions: [
      "Toast whole-grain bread slices until lightly browned.",
      "Mash the ripe avocado with lime juice, salt, and pepper.",
      "Spread avocado mixture on toasted bread slices.",
      "Sprinkle red pepper flakes for added spice (optional).",
      "Garnish with fresh cilantro or parsley.",
      "Enjoy the delicious and healthy Avocado Toast."
    ],
    cuisineType: "International",
    imageUrl: "https://simplyfreshfoodie.com/wp-content/uploads/2021/08/DSC_0546.jpg"
  },
  {
    id: uuid(),
    recipeName: "Greek Salad",
    ingredients: [
      "2 large tomatoes, chopped",
      "1 cucumber, diced",
      "1 red bell pepper, chopped",
      "1/2 red onion, thinly sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Extra virgin olive oil",
      "Fresh lemon juice",
      "Dried oregano",
      "Salt and pepper to taste"
    ],
    cookingInstructions: [
      "In a large bowl, combine tomatoes, cucumber, bell pepper, and red onion.",
      "Add Kalamata olives and crumbled Feta cheese.",
      "Drizzle extra virgin olive oil and fresh lemon juice.",
      "Sprinkle dried oregano, salt, and pepper.",
      "Toss the ingredients to mix well.",
      "Serve refreshing Greek Salad chilled."
    ],
    cuisineType: "Greek",
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2-786x1024.jpg"
  },
  {
    id: uuid(),
    recipeName: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup unsalted butter, softened",
      "1 cup granulated sugar",
      "1 cup packed brown sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups semisweet chocolate chips",
      "1 cup chopped nuts (optional)"
    ],
    cookingInstructions: [
      "Preheat oven to 375°F (190°C).",
      "In a large bowl, cream together softened butter, granulated sugar, and brown sugar.",
      "Add eggs one at a time, then stir in vanilla extract.",
      "In a separate bowl, whisk together flour, baking soda, and salt.",
      "Gradually add the dry ingredients to the wet mixture, mixing well.",
      "Fold in chocolate chips and chopped nuts (optional).",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes until lightly golden around the edges.",
      "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.",
      "Enjoy the scrumptious Chocolate Chip Cookies."
    ],
    cuisineType: "American",
    imageUrl: "https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
  }
  
];
