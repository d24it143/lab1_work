// Create an array of movie objects
const movies = [
    { title: "Chhichhore", genre: "Comedy", rating: 8.3, releaseYear: 2019 },
    { title: "Fighter", genre: "Action", rating: 6.2, releaseYear: 2024 },
    { title: "Jawan", genre: "Action", rating: 6.9, releaseYear: 2023 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Ram-Leela", genre: "Romance", rating: 6.4, releaseYear: 2013 });
console.log("Movies after adding a new one:");
console.log(movies);

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

console.log("Action movies:");
console.log(listMoviesByGenre(movies, "Action"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

console.log("Highest-rated movie:");
console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

console.log("List of all movie titles:");
console.log(getMovieTitles(movies));

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

console.log("Movies released after 2010:");
console.log(moviesAfterYear(movies, 2010));

console.log("Detailed movie list:");
movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});
