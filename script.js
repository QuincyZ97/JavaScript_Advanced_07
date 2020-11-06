const movieDisplayList = document.getElementById("movieDisplay") // get UL 

//#######Make LI elements###########//
const addMoviesToDom = (moviedb) => {

    let moviesLiArray = moviedb.map(movie => {
        const newLi = document.createElement("li"); // make li
        const newATag = document.createElement("a"); // make a
        const newImg = document.createElement("img"); // make img
        newATag.appendChild(newImg) // IMG in A
        newLi.appendChild(newATag) // A in li
        const moviePoster = movie.Poster; // get poster from movie.js
        const posterID = movie.imdbID; // get imdbID
        newATag.setAttribute("href", "https://www.imdb.com/title/"+posterID); // change img src to poster
        newImg.src = moviePoster; // change img src to poster
        return newLi; //return li elemtents with movieTitleNames
    })

    moviesLiArray.forEach(movie => {
        movieDisplayList.appendChild(movie); // li in ul
    })

}
addMoviesToDom(movies);

//#######radio btn###########//
const radioBtns = document.querySelectorAll(".radioFilter__option"); // get btns

radioBtns.forEach(btn => { 
    btn.addEventListener("change", (event) => {
        switch (event.target.value) {
            case "all":
                addMoviesToDom(movies); // Displays all movies
                delActiveClass();   // removes all active classes
                btn.classList.add('radioFilter__option--active'); // add active class to clicked btn
                break;
            case "latest":
                filterLatestMovies();
                delActiveClass();
                btn.classList.add('radioFilter__option--active'); 
                break;
            case "avengers":
                filterMovies("Avengers");
                delActiveClass();
                btn.classList.add('radioFilter__option--active');
                break;
            case "xmen":
                filterMovies("X-Men");
                delActiveClass();
                btn.classList.add('radioFilter__option--active');
                break;
            case "princess":
                filterMovies("Princess");
                delActiveClass();
                btn.classList.add('radioFilter__option--active');
                break;
            case "batman":
                filterMovies("Batman");
                delActiveClass();
                btn.classList.add('radioFilter__option--active');
                break;
            default:
                addMoviesToDom(movies); // if radio btn break > default
                break;
        } 
    });
}); 

//#######filter function#########//
const filterMovies = (wordInMovieTitle) => {
    const movieFilterResult = movies.filter(movie => { return movie.Title.includes(wordInMovieTitle); }); // filter using parameter word
    movieDisplayList.querySelectorAll('li').forEach(movie => movie.remove()); // removes current list
    addMoviesToDom(movieFilterResult); //make list with filtered items
}

//#######Latest movies function ###########//
const filterLatestMovies = () => {
    const latestMovies = movies.filter(movie => { return parseInt(movie.Year) >= 2014 }); // check if bigger or same as 2014
    movieDisplayList.querySelectorAll('li').forEach(movie => movie.remove()); // removes current list
    addMoviesToDom(latestMovies); //make list with filtered items
}

//===========================================================================================BONUS SEARCH=================================================================================================

const getInputValue = () => { // get current input
    let getSearchValue = document.getElementById("searchInput").value;
    const inputValue = getSearchValue.charAt(0).toUpperCase() + getSearchValue.slice(1); // get uppercase input
    filterMovies(inputValue);
    console.log(inputValue);
}

let inputValue = document.getElementById("searchInput"); // get input box
inputValue.addEventListener("keyup", getInputValue); // active search each letter (onkeyup) | werkt ook met search icon (zie html)



//===========================================================================================OPTIONAL STYLING=================================================================================================
const delActiveClass = () => {
    radioBtns.forEach(item => item.classList.remove('radioFilter__option--active')); // remove all active classes
}
//===========================================================================================DONE=================================================================================================
// Een lijst van beschikbare films met de poster van de film.
// 5 verschillende filters in de vorm van radio-buttons. + 1 filter tegelijk
// Gebruik arraymethods voor je filters | .includes() method.
// Meerdere filter functies in 1
// elke film in de database heeft een link naar de juiste poster. + clickable poster
//===============BONUS=============
// Input field search funtion
//====================================================================================NOTES + TO DO + DEVELOP======================================================================================

// Omdat de database gebruik maakt van capital letters op elk key woord is de search function daarop toegepast
// Niet duidelijk = "Schrijf dus een aparte functie die imdbID van de movie als argument krijgt en de juiste URL returned"
// Geen fully responive html gemaakt i.v.m tijd :) misschien later..

// Voor later:
    //Advanced search functionality + radio checks

    //Sort on release dates
    /* let sortAscending = movies.map(movie => {
        const movieYear = parseInt(movie.Year);
        return movieYear
    })
    const sortedArray = sortAscending.sort();
    console.log(sortedArray)
    */



