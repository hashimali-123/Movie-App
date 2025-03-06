document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const searchInput = document.getElementById('search-input');
    const movieList = document.getElementById('movie-list');
    const noResults = document.createElement('div');
    noResults.classList.add('no-results');
    noResults.textContent = 'No movies found.';
    movieList.parentNode.insertBefore(noResults, movieList.nextSibling);
  
    // Movie data (for additional details)
    const moviesData = {
      1: {
        title: 'Inception',
        description: 'An exciting adventure movie.',
        details: 'Release Year: 2021 | Genre: Adventure | Rating: 8.5/10',
      },
      2: {
        title: 'Interstellar',
        description: 'A thrilling action-packed movie.',
        details: 'Release Year: 2022 | Genre: Action | Rating: 9.0/10',
      },
      3: {
        title: 'The Dark Knight',
        description: 'A heartwarming romantic movie.',
        details: 'Release Year: 2023 | Genre: Romance | Rating: 7.8/10',
      },
      4: {
        title: 'Joker',
        description: 'A psychological thriller movie.',
        details: 'Release Year: 2019 | Genre: Crime | Rating: 5/5',
      },
      5: {
        title: 'Krrish',
        description: 'A Superhero Sci-Fi Action movie.',
        details: 'Release Year: 2006 | Genre: Action Sci-Fi | Rating: 4/5',
      },
      6: {
        title: 'Shrek',
        description: 'A hilarious animated adventure movie.',
        details: 'Release Year: 2001 | Genre: Animation Fantasy | Rating: 5/5',
      },
    };
  
    
    movieCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const movie = moviesData[id];
  
        modalImage.src = card.querySelector('.movie-image').src;
        modalTitle.textContent = movie.title;
        modalDescription.textContent = movie.description;
        modalDetails.textContent = movie.details;
  
        modal.style.display = 'flex';
      });
    });
  
    
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Search functionality
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      let hasResults = false;
  
      movieCards.forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = 'block';
          hasResults = true;
        } else {
          card.style.display = 'none';
        }
      });
  
      noResults.style.display = hasResults ? 'none' : 'block';
    });
  });