// List of genres
const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family",
    "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction",
    "Thriller", "War", "Western"
];

// Function to populate genre dropdown
function populateGenres() {
    const genreSelect = document.getElementById('genre-select');
    
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.toLowerCase().replace(' ', '-');
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', populateGenres);