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
        mealDiv.className = "single-result row align-items-center my-3 p-3";
        mealDiv.innerHTML = `
            
            <div class="col-md-12">
                <div class="css-extra">
                <a href="#">
                <img src="${meals.strMealThumb}" alt="${meals.strMeal}"/>
                </a>
                <h3 id="" class="">${meals.strMeal}</h3>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}