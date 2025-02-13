document.getElementById('search-box').addEventListener('input', function(event) {
    const query = event.target.value;
    const resultsContainer = document.getElementById('search-results');

    if (query.length > 2) {  // Solo busca si hay más de 2 caracteres
        searchMovies(query);
        resultsContainer.style.display = 'block'; // Muestra el contenedor de resultados
    } else {
        resultsContainer.innerHTML = '';  // Limpia los resultados si la búsqueda es muy corta
        resultsContainer.style.display = 'none'; // Oculta el contenedor de resultados
    }
});

function searchMovies(query) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjcwYjI4Njk5ODA5YzYyZDY5OTZjN2YzYzc3OTY3NSIsIm5iZiI6MTcwODQ4MjQ4NC42MDUsInN1YiI6IjY1ZDU1ZmI0MzNhMzc2MDE4Njc3ZDJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmv__rM0kALOyf6IxZpgi8aoUEbWSe4gs1-09EANg-0'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data); // Verifica la respuesta de la API
            displayResults(data.results);
        })
        .catch(err => console.error('Error:', err));
}

function displayResults(movies) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';  // Limpia los resultados anteriores

    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-card';
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div>
                <h3>${movie.title}</h3>
                <p>${movie.release_date}</p>
                <p>${movie.overview}</p>
            </div>
        `;
        resultsContainer.appendChild(movieElement);
    });
}