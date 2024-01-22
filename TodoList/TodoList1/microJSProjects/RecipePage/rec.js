let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let mainHeadingElement = document.getElementById("mainHeading");
let headingEl = document.createElement("h1");
headingEl.textContent = recipeObj.title;
headingEl.classList.add("recipe-title");
mainHeadingElement.appendChild(headingEl);

let pastaImgElement = document.getElementById("pastaImg");
let ImgElement = document.createElement("img");
ImgElement.setAttribute("src", recipeObj.imgSrc);
pastaImgElement.appendChild(ImgElement);

let ingredientsListElement = document.getElementById("ingredientsList");
let ingredientsArray = recipeObj.ingredients;

for (eachIngredient of ingredientsArray) {
    let listElement = document.createElement("li");
    listElement.textContent = eachIngredient;
    listElement.classList.add("ingredients");
    ingredientsListElement.appendChild(listElement);

}