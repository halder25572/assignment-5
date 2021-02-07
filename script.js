const searchItemm = document.getElementById("search-food"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

function searchMeal(food) {
  food.preventDefault();
  resultHeading.innerHTML = "";
  const term = searchItemm.value;
  console.log(term);
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
            <div class="meal">
            <a>
              <img onclick="searchMeal()" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
             </a>
            <div class="meal-info" data-mealID="${meal.idMeal}">
            <h3>${meal.strMeal}</h3></div>
            </div>`
            )
            .join("");
        }
      });
      searchItemm.value = "";
  } else {
    alert("Please enter a search term");
  }
}
submit.addEventListener("submit", searchMeal);
