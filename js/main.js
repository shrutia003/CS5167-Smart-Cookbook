const recipes = [{
    "name": "Buckwheat Noodle Salad",
    "diet": "Vegetarian",
    "complexity": "Easy",
    "timeTaken": "25",
    "cuisine": "Japanese",
    "data": "Chewy buckwheat noodles and crunchy vegetables all tossed together in a creamy, umami-rich peanut sauce.",
    "ingredients": ["Buckwheat noodles", "carrots", "cucumber", "soy sauce", "hot sauce"]
},
{
    "name": "BBQ Chicken Pizza",
    "diet": "Non-Vegetarian",
    "complexity": "Intermediate",
    "timeTaken": "35",
    "cuisine": "American",
    "data": "It has a spicy barbecue sauce, diced chicken, peppers, onion, and cilantro, all covered with cheese and baked to bubbly goodness!",
    "ingredients": ["Flour", "marinara", "seasonings", "cheese of choice", "BBQ sauce"]
},
{
    "name": "Vegan Burger/Sandwich",
    "diet": "Vegan",
    "complexity": "Intermediate",
    "timeTaken": "40",
    "cuisine": "American",
    "data": "The best vegan burger loaded with flavor and suitable for the grill or stovetop. Hearty and satisfying with a delicious texture.",
    "ingredients": ["Burger buns", "Tomatoes", "Lettuce", "Vegan patties", "Onions", "Vegan mayo"]
},
{
    "name": "Vegetarian Enchiladas",
    "diet": "Vegetarian",
    "complexity": "Easy",
    "timeTaken": "70",
    "cuisine": "Mexican",
    "data": "Amazing vegetarian enchiladas stuffed with black beans, broccoli, bell pepper and spinach, topped with homemade red sauce.",
    "ingredients": ["Tortillas", "cheese", "Black beans", "Tomatoes", "Taco seasoning"]
},
{
    "name": "Fish and Chips",
    "diet": "Pescatarian",
    "complexity": "Easy",
    "timeTaken": "45",
    "cuisine": "English",
    "data": "A classic dish of the British Isles, consisting of battered and deep-fried fish, usually cod or haddock, and french fries.",
    "ingredients": ["Cod", "Flour", "Seasonings", "Potatoes", "Oil"]
},
{
    "name": "Falafel",
    "diet": "Vegetarian",
    "complexity": "Intermediate",
    "timeTaken": "35",
    "cuisine": "Mediterranean",
    "data": "Deep-fried balls or patties made from chickpeas or fava beans, sometimes both, plus fresh herbs and spices.",
    "ingredients": ["Chickpeas", "Flour", "Yogurt", "Seasonings", "Oil", "Cilantro", "Basil"]
},
{
    "name": "Cajun Shrimp",
    "diet": "Pescatarian",
    "complexity": "Easy",
    "timeTaken": "25",
    "cuisine": "American",
    "data": "Shrimp seasoned with paprika, thyme, oregano, garlic, and red pepper.",
    "ingredients": ["Shrimp", "Cajun seasoning", "Oil", "Red pepper", "Garlic"]
},
{
    "name": "Butter Chicken",
    "diet": "Non-Vegetarian",
    "complexity": "Intermediate",
    "timeTaken": "45",
    "cuisine": "Indian",
    "data": "Aromatic golden chicken pieces in an incredible creamy curry sauce.",
    "ingredients": ["Chicken thighs", "Yogurt", "Cream/Butter", "Spices", "Tomoatoes", "Ginger Garlic paste"]
},
{
    "name": "Butternut Squash Soup",
    "diet": "Vegan",
    "complexity": "Easy",
    "timeTaken": "45",
    "cuisine": "American",
    "data": "This butternut squash soup is both savory and sweet, packed with apples, ginger, and your favorite winter squash.",
    "ingredients": ["Butternut Squash", "Rosemary", "Thyme", "Potatoes", "Ginger", "Apples"]
},
{
    "name": "Chicken Parmesan",
    "diet": "Non-Vegetarian",
    "complexity": "Hard",
    "timeTaken": "90",
    "cuisine": "Italian",
    "data": " Breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese.",
    "ingredients": ["Chicken breast", "Breadcrumbs", "Mozzarella/Parmesan", "Marinara", "Oregano", "Oil"]
}]

function showFilterRes() {
    const Diet = document.getElementById("Diet");
    const Complexity = document.getElementById("Complexity");
    const Cuisine = document.getElementById("Cuisine");

    Diet.addEventListener("change", filterRecipes);
    Complexity.addEventListener("change", filterRecipes);
    Cuisine.addEventListener("change", filterRecipes);
    filterRecipes();

    function filterRecipes() {
        const selectedDiet = Diet.value;
        const selectedComplexity = Complexity.value;
        const selectedCuisine = Cuisine.value;

        const result_arr = [];
        for (let recipe of recipes) {
            if ((selectedDiet == recipe.diet) && (selectedComplexity == recipe.complexity) && (selectedCuisine == recipe.cuisine)) {
                result_arr.push(recipe.name);
            }
        }

        const rightGrid = document.getElementById("right-grid");
        rightGrid.innerHTML = result_arr.join("<br>");
    }
}

function closePages() {
    document.getElementById("default-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("search-page").style.display = "none";
    document.getElementById("find-page").style.display = "none";
}

function showDefaultPage() {
    closePages();
    document.getElementById("default-page").style.display = "grid";
}

function showHomePage() {
    closePages();
    document.getElementById("default-page").style.display = "none";
    document.getElementById("home-page").style.display = "grid";
}

function showSearchPage() {
    closePages();
    document.getElementById("default-page").style.display = "none";
    document.getElementById("search-page").style.display = "grid";
}

function showFindPage() {
    closePages();
    document.getElementById("default-page").style.display = "none";
    document.getElementById("find-page").style.display = "grid";
}

function closePhonePages() {
    var phoneScreen = document.getElementById("phoneScreen");
    phoneScreen.innerHTML = '';
    //document.getElementById("phoneScreen").style.display = "none";
}

function showHomeOnPhone(){
    // Example: Change phone screen content when home button is clicked
    closePhonePages();
    var phoneScreen = document.getElementById("phoneScreen");
    phoneScreen.innerText = "Home Screen Content";
}

function showRecipeOnPhone(){
    closePhonePages();
    var phoneScreen = document.getElementById("phoneScreen");
  
    for (let recipe of recipes) {
        var recipeDiv = document.createElement('div');
        var itemDiv = document.createElement('div');
        var recipeName = document.createElement('h5');
        var text = document.createElement('p');
    
        recipeName.innerText = recipe.name;
        text.innerText = recipe.data;
    
        recipeDiv.appendChild(recipeName);
        recipeDiv.appendChild(text);
        itemDiv.style.outline = "2px solid black";
        recipeDiv.appendChild(itemDiv);
        phoneScreen.appendChild(recipeDiv);
    }
}

function showIngredientsOnPhone() {
    closePhonePages();
    var phoneScreen = document.getElementById("phoneScreen");
  
    for (let recipe of recipes) {
        var ingredientsDiv = document.createElement('div');
        var itemDiv = document.createElement('div');
        var recipeName = document.createElement('h5');
        var ingredientsList = document.createElement('ul');

        recipeName.innerText = recipe.name;

        // Create list items for each ingredient
        recipe.ingredients.forEach(function (ingredient) {
        var ingredientItem = document.createElement('li');
        ingredientItem.innerText = ingredient;
        ingredientsList.appendChild(ingredientItem);
        });

        ingredientsDiv.appendChild(recipeName);
        ingredientsDiv.appendChild(ingredientsList);
        itemDiv.style.outline = "2px solid black";
        ingredientsDiv.appendChild(itemDiv);
        phoneScreen.appendChild(ingredientsDiv);
    }
}

