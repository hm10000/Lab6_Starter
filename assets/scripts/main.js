// // main.js

// // Run the init() function when the page has loaded
// window.addEventListener("DOMContentLoaded", init);

// // Starts the program, all function calls trace back here
// function init() {
//   // Get the recipes from localStorage
//   let recipes = getRecipesFromStorage();
//   // Add each recipe to the <main> element
//   addRecipesToDocument(recipes);
//   // Add the event listeners to the form elements
//   initFormHandler();
// }

// /**
//  * Reads 'recipes' from localStorage and returns an array of
//  * all of the recipes found (parsed, not in string form). If
//  * nothing is found in localStorage for 'recipes', an empty array
//  * is returned.
//  * @returns {Array<Object>} An array of recipes found in localStorage
//  */
// function getRecipesFromStorage() {
//   // A9. TODO - Complete the functionality as described in this function
//   //           header. It is possible in only a single line, but should
//   //           be no more than a few lines.
//   let recipes = JSON.parse(localStorage.getItem("recipes"));
//   if (recipes == null) {
//     return [];
//   }
//   return recipes;
// }

// /**
//  * Takes in an array of recipes and for each recipe creates a
//  * new <recipe-card> element, adds the recipe data to that card
//  * using element.data = {...}, and then appends that new recipe
//  * to <main>
//  * @param {Array<Object>} recipes An array of recipes
//  */
// function addRecipesToDocument(recipes) {
//   // A10. TODO - Get a reference to the <main> element
//   const main = document.querySelector("main");

//   // A11. TODO - Loop through each of the recipes in the passed in array,
//   //            create a <recipe-card> element for each one, and populate
//   //            each <recipe-card> with that recipe data using element.data = ...
//   //            Append each element to <main>
//   recipes.forEach((el) => {
//     let recipeCard = document.createElement("recipe-card");

//     recipeCard.data = el;

//     main.appendChild(recipeCard);
//   });
// }

// /**
//  * Takes in an array of recipes, converts it to a string, and then
//  * saves that string to 'recipes' in localStorage
//  * @param {Array<Object>} recipes An array of recipes
//  */
// function saveRecipesToStorage(recipes) {
//   // EXPLORE - START (All explore numbers start with B)
//   // B1. TODO - Complete the functionality as described in this function
//   //            header. It is possible in only a single line, but should
//   //            be no more than a few lines.
//   localStorage.setItem("recipes", JSON.stringfy(recipes));
// }

// /**
//  * Takes in an array of recipes and for each recipe creates a
//  * new <recipe-card> element, adds the recipe data to that card
//  * using element.data = {...}, and then appends that new recipe
//  * to <main>
//  * @param {Array<Object>} recipes An array of recipes
//  */
// function addRecipesToDocument(recipes) {
//   // A10. TODO - Get a reference to the <main> element
//   const main = document.querySelector("main");
//   // A11. TODO - Loop through each of the recipes in the passed in array,
//   //            create a <recipe-card> element for each one, and populate
//   //            each <recipe-card> with that recipe data using element.data = ...
//   //            Append each element to <main>
//   for (const property in recipes) {
//     let newRecipe = document.createElement("recipe-card");
//     newRecipe.data = recipes[property];
//     main.appendChild(newRecipe);
//   }
// }

// /**
//  * Takes in an array of recipes, converts it to a string, and then
//  * saves that string to 'recipes' in localStorage
//  * @param {Array<Object>} recipes An array of recipes
//  */
// function saveRecipesToStorage(recipes) {
//   // EXPLORE - START (All explore numbers start with B)
//   // B1. TODO - Complete the functionality as described in this function
//   //            header. It is possible in only a single line, but should
//   //            be no more than a few lines.
//   localStorage.setItem("recipes", JSON.stringify(recipes));
// }

// /**
//  * Adds the necesarry event handlers to <form> and the clear storage
//  * <button>.
//  */
// // function initFormHandler() {
// //   // B2. TODO - Get a reference to the <form> element
// //   const form = document.getElementById("form");
// //   // B3. TODO - Add an event listener for the 'submit' event, which fires when the
// //   //            submit button is clicked
// //   // Steps B4-B9 will occur inside the event listener from step B3
// //   // B4. TODO - Create a new FormData object from the <form> element reference above
// //   // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
// //   //            make this easier to read), and then extract the keys and corresponding
// //   //            values from the FormData object and insert them into recipeObject
// //   // B6. TODO - Create a new <recipe-card> element
// //   // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
// //   // B8. TODO - Append this new <recipe-card> to <main>
// //   // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
// //   //            then save the recipes array back to localStorage
// //   const submitButton = document.querySelector('[type="submit"]');
// //   submitButton.addEventListener("click", function () {
// //     // const imgSrc1 = form.elements["imgSrc"];
// //     // const imgAlt1 = form.elements["imgAlt"];
// //     // const titleTxt1 = form.elements["titleTxt"];
// //     // const titleLnk1 = form.elements["titleLnk"];
// //     // const rating1 = form.elements["rating"];
// //     // const numRatings1 = form.elements["numRatings"];
// //     // const organization1 = form.elements["organization"];
// //     // const lengthTime1 = form.elements["lengthTime"];
// //     // const ingredients1 = form.elements["ingredients"];
// //     const main = document.querySelector("main");

// //     let formData = new FormData(form);

// //     let recipeObject = {};

// //     recipeObject["imgSrc"] = formData.get("imgSrc");
// //     recipeObject["imgAlt"] = formData.get("imgAlt");
// //     recipeObject["titleLnk"] = formData.get("titleLnk");
// //     recipeObject["titleTxt"] = formData.get("titleTxt");
// //     recipeObject["organization"] = formData.get("organization");
// //     recipeObject["rating"] = formData.get("rating");
// //     recipeObject["numRatings"] = formData.get("numRatings");
// //     recipeObject["lengthTime"] = formData.get("lengthTime");
// //     recipeObject["ingredients"] = formData.get("ingredients");

// //     let recipeArr = [];
// //     recipeArr.push(recipeObject);
// //     addRecipesToDocument(recipeArr);
// //     let recipesLoc = getRecipesFromStorage();
// //     recipesLoc.push(recipeObject);
// //     saveRecipesToStorage(recipesLoc);
// //   });

// */
// function initFormHandler() {

//   // B2. TODO - Get a reference to the <form> element
//   const formElem = document.querySelector('form');
//   // B3. TODO - Add an event listener for the 'submit' event, which fires when the
//   //            submit button is clicked
//   const submitButton = document.querySelector('[type="submit"]');
//   submitButton.addEventListener('click', function(){
//     // B4. TODO - Create a new FormData object from the <form> element reference above
//     let formData = new FormData(formElem);
//     // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
//     //            make this easier to read), and then extract the keys and corresponding
//     //            values from the FormData object and insert them into recipeObject
//     let recipeObject = {};
//     recipeObject['imgSrc'] = formData.get('imgSrc');
//     recipeObject['imgAlt'] = formData.get('imgAlt');
//     recipeObject['titleLnk'] = formData.get('titleLnk');
//     recipeObject['titleTxt'] = formData.get('titleTxt');
//     recipeObject['organization'] = formData.get('organization');
//     recipeObject['rating'] = formData.get('rating');
//     recipeObject['numRatings'] = formData.get('numRatings');
//     recipeObject['lengthTime'] = formData.get('lengthTime');
//     recipeObject['ingredients'] = formData.get('ingredients');

//     // B6. TODO - Create a new <recipe-card> element
//     // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
//     // B8. TODO - Append this new <recipe-card> to <main>
//     // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
//     //            then save the recipes array back to localStorage
//     let recipeArr = [];
//     recipeArr.push(recipeObject);
//     addRecipesToDocument(recipeArr);
//     let recipeFromLocal = getRecipesFromStorage();
//     recipeFromLocal.push(recipeObject);
//     saveRecipesToStorage(recipeFromLocal);

//     /*
//     let newRecipe = document.createElement("recipe-card");
//     newRecipe.data = recipeObject;
//     let mainElem = document.querySelector('main');
//     mainElem.appendChild(newRecipe);
//     let recipeFromLocal = localStorage.get
//     */
//   });
//   // // Steps B4-B9 will occur inside the event listener from step B3
//   // // B10. TODO - Get a reference to the "Clear Local Storage" button
//   // const buttonClear = document.querySelector(".danger");
//   // // B11. TODO - Add a click event listener to clear local storage button
//   // // Steps B12 & B13 will occur inside the event listener from step B11
//   // // B12. TODO - Clear the local storage
//   // // B13. TODO - Delete the contents of <main>
//   // buttonClear.addEventListener("click", (event) => {
//   //   localStorage.clear();
//   //   let mainElem = document.querySelector("main");
//   //   mainElem.innerHTML = "";
//   // });

//   // // B10. TODO - Get a reference to the "Clear Local Storage" button
//   // let clearLocalStorage = document.querySelector('.danger');
//   // // B11. TODO - Add a click event listener to clear local storage button
//   // clearLocalStorage.addEventListener('click', function(){
//   //   // Steps B12 & B13 will occur inside the event listener from step B11
//   //   // B12. TODO - Clear the local storage
//   //   localStorage.clear();
//   //   // B13. TODO - Delete the contents of <main>
//   //   let mainElem =  document.querySelector('main');
//   //   mainElem.innerHTML = "";
//   // })
// }

//// Kevin's whole code
// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  let recipe = JSON.parse(localStorage.getItem("recipes"));
  if (recipe === null) {
    return [];
  }
  return recipe;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  const main = document.querySelector("main");
  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  for (const property in recipes) {
    let newRecipe = document.createElement("recipe-card");
    newRecipe.data = recipes[property];
    main.appendChild(newRecipe);
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
  // B2. TODO - Get a reference to the <form> element
  const formElem = document.querySelector("form");
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  const submitButton = document.querySelector('[type="submit"]');
  submitButton.addEventListener("click", function () {
    // B4. TODO - Create a new FormData object from the <form> element reference above
    let formData = new FormData(formElem);
    // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
    //            make this easier to read), and then extract the keys and corresponding
    //            values from the FormData object and insert them into recipeObject
    let recipeObject = {};
    recipeObject["imgSrc"] = formData.get("imgSrc");
    recipeObject["imgAlt"] = formData.get("imgAlt");
    recipeObject["titleLnk"] = formData.get("titleLnk");
    recipeObject["titleTxt"] = formData.get("titleTxt");
    recipeObject["organization"] = formData.get("organization");
    recipeObject["rating"] = formData.get("rating");
    recipeObject["numRatings"] = formData.get("numRatings");
    recipeObject["lengthTime"] = formData.get("lengthTime");
    recipeObject["ingredients"] = formData.get("ingredients");

    // B6. TODO - Create a new <recipe-card> element
    // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
    // B8. TODO - Append this new <recipe-card> to <main>
    // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
    let recipeArr = [];
    recipeArr.push(recipeObject);
    addRecipesToDocument(recipeArr);
    let recipeFromLocal = getRecipesFromStorage();
    recipeFromLocal.push(recipeObject);
    saveRecipesToStorage(recipeFromLocal);

    /*
    let newRecipe = document.createElement("recipe-card");
    newRecipe.data = recipeObject;
    let mainElem = document.querySelector('main');
    mainElem.appendChild(newRecipe); 
    let recipeFromLocal = localStorage.get
    */
  });
  // Steps B4-B9 will occur inside the event listener from step B3

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  let clearLocalStorage = document.querySelector(".danger");
  // B11. TODO - Add a click event listener to clear local storage button
  clearLocalStorage.addEventListener("click", function () {
    // Steps B12 & B13 will occur inside the event listener from step B11
    // B12. TODO - Clear the local storage
    localStorage.clear();
    // B13. TODO - Delete the contents of <main>
    let mainElem = document.querySelector("main");
    mainElem.innerHTML = "";
  });
}
