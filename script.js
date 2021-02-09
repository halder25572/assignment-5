const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(meals => displaySongs(meals.meals))
}

const displaySongs = songs => {
    const mealContainer = document.getElementById('meal-container');
    songs.forEach(meals => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "single-result row align-items-center";
        mealDiv.innerHTML = `
            
            <div class="col-md-12">
                <div class="css-extra">
                    <a onclick="getMeals('${meals.strDrinkAlternate}','${meals.         strIngredient1}')" href="#">
                    <img src="${meals.strMealThumb}" alt="${meals.strMeal}"/>
                    </a>
                    <h3 id="" class="">${meals.strMeal}</h3>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}

const getMeals = (meals) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
    fetch(url)
    .then(res => res.json())
    .then(meals => renderMealInfo(meals[0]));
}

const renderMealInfo = meals => {
    const mealDiv = document.getElementById('mealDetails');
    mealDiv.innerHTML = `
        <p>${meals.strMeasure1}</p>
        <p>${meals.strMeasure2}</p>
        <p>${meals.strMeasure3}</p>
        <p>${meals.strMeasure4}</p>
        <p>${meals.strMeasure5}</p>
    `
}