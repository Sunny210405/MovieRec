import { movies, personas } from './movies.js';
import {
  getContentRecommendations,
  getCollaborativeRecommendations,
  getPersonaSimilarities
} from './recommender.js';

const STORAGE = {
  ratings: 'cinefy_user_ratings',
  watchlist: 'cinefy_watchlist',
  legacyFavorites: 'cinefy_user_favorites'
};

const state = {
  activeView: 'home',
  activePersona: 'custom',
  searchQuery: '',
  libraryGenreFilter: 'All',
  librarySort: 'rating',
  kidsMode: false,
  heroIndex: 0,
  selectedMovieId: null,
  userRatings: {},
  watchlist: []
};

let customProfile = {
  ratings: {},
  watchlist: []
};

const $ = (id) => document.getElementById(id);
const mobileSidebarQuery = window.matchMedia('(max-width: 980px)');

const els = {
  sidebar: $('sidebar'),
  sidebarCollapse: $('sidebar-collapse'),
  menuToggle: $('menu-toggle'),
  searchInput: $('search-input'),
  searchClear: $('search-clear'),
  activePersonaName: $('active-persona-name'),
  personaSelector: $('persona-selector'),
  personaBars: $('persona-bars'),
  heroBackdrop: $('hero-backdrop'),
  heroTitle: $('hero-title'),
  heroYear: $('hero-year'),
  heroDuration: $('hero-duration'),
  heroStars: $('hero-stars'),
  heroMatch: $('hero-match'),
  heroGenres: $('hero-genres'),
  heroDesc: $('hero-desc'),
  heroProviders: $('hero-providers'),
  heroDots: $('hero-dots'),
  heroWatchlistBtn: $('hero-watchlist-btn'),
  heroWatchlistText: $('hero-watchlist-text'),
  heroInfoBtn: $('hero-info-btn'),
  heroPlayTrailer: $('hero-play-trailer'),
  watchlistRow: $('watchlist-row'),
  watchlistCarousel: $('watchlist-carousel'),
  collabCarousel: $('collab-carousel'),
  contentCarousel: $('content-carousel'),
  contentRowTitle: $('content-row-title'),
  trendingCarousel: $('trending-carousel'),
  indianCarousel: $('indian-carousel'),
  scifiCarousel: $('scifi-carousel'),
  dramaCarousel: $('drama-carousel'),
  thrillerCarousel: $('thriller-carousel'),
  libraryGrid: $('library-grid'),
  genreChips: $('genre-chips'),
  librarySort: $('library-sort'),
  watchlistGrid: $('watchlist-grid'),
  watchlistCount: $('watchlist-count'),
  watchlistBadge: $('watchlist-count-badge'),
  ratingsList: $('ratings-list'),
  ratingsCount: $('ratings-count'),
  detailModal: $('detail-modal'),
  detailClose: $('detail-close'),
  detailBackdrop: $('detail-backdrop-img'),
  detailPoster: $('detail-poster-img'),
  detailTitle: $('detail-title'),
  detailYear: $('detail-year'),
  detailDuration: $('detail-duration'),
  detailRating: $('detail-rating'),
  detailGenres: $('detail-genres'),
  detailDesc: $('detail-desc'),
  detailProviders: $('detail-providers'),
  detailDirector: $('detail-director'),
  detailCast: $('detail-cast'),
  detailStars: $('detail-stars'),
  detailStarLabel: $('detail-star-label'),
  detailWatchlistBtn: $('detail-watchlist-btn'),
  detailWatchlistText: $('detail-watchlist-text'),
  detailPlayTrailer: $('detail-play-trailer'),
  videoModal: $('video-modal'),
  videoClose: $('video-close'),
  videoIframe: $('video-iframe'),
  videoFallbackLink: $('video-fallback-link'),
  videoTitle: $('video-modal-title'),
  toastContainer: $('toast-container')
};

function init() {
  loadState();
  restoreSidebarState();
  bindEvents();
  render();
  startHeroRotation();
}

function restoreSidebarState() {
  if (!mobileSidebarQuery.matches && localStorage.getItem('cinefy_sidebar_collapsed') === 'true') {
    document.body.classList.add('sidebar-collapsed');
  }
  syncSidebarCollapseButton();
}

function loadPreferences() {
  try {
    state.kidsMode = localStorage.getItem('cinefy_kids_mode') === 'true';
  } catch {
    state.kidsMode = false;
  }
}

function toggleSidebarCollapse() {
  document.body.classList.toggle('sidebar-collapsed');
  localStorage.setItem('cinefy_sidebar_collapsed', document.body.classList.contains('sidebar-collapsed'));
  syncSidebarCollapseButton();
}

function syncSidebarCollapseButton() {
  const collapsed = document.body.classList.contains('sidebar-collapsed');
  if (!els.sidebarCollapse) return;
  els.sidebarCollapse.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
  els.sidebarCollapse.setAttribute('title', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
}

function loadState() {
  try {
    state.userRatings = JSON.parse(localStorage.getItem(STORAGE.ratings) || '{}');
    state.watchlist = JSON.parse(
      localStorage.getItem(STORAGE.watchlist) ||
      localStorage.getItem(STORAGE.legacyFavorites) ||
      '[]'
    );
  } catch {
    state.userRatings = {};
    state.watchlist = [];
  }

  customProfile = {
    ratings: { ...state.userRatings },
    watchlist: [...state.watchlist]
  };
}

function savePreferences() {
  try {
    localStorage.setItem('cinefy_kids_mode', state.kidsMode ? 'true' : 'false');
  } catch {}
}

function saveState() {
  if (state.activePersona === 'custom') {
    localStorage.setItem(STORAGE.ratings, JSON.stringify(state.userRatings));
    localStorage.setItem(STORAGE.watchlist, JSON.stringify(state.watchlist));
    customProfile = {
      ratings: { ...state.userRatings },
      watchlist: [...state.watchlist]
    };
  }
}

function bindEvents() {
  document.querySelectorAll('.nav-item, .see-all-btn').forEach((button) => {
    button.addEventListener('click', () => switchView(button.dataset.view));
  });

  els.menuToggle.addEventListener('click', () => {
    if (mobileSidebarQuery.matches) {
      els.sidebar.classList.toggle('open');
      return;
    }

    toggleSidebarCollapse();
  });

  els.sidebarCollapse.addEventListener('click', toggleSidebarCollapse);

  els.searchInput.addEventListener('input', (event) => {
    state.searchQuery = event.target.value.trim();
    els.searchClear.style.display = state.searchQuery ? 'grid' : 'none';
    renderActiveView();
  });

  els.searchClear.addEventListener('click', () => {
    state.searchQuery = '';
    els.searchInput.value = '';
    els.searchClear.style.display = 'none';
    renderActiveView();
  });

  els.personaSelector.addEventListener('click', (event) => {
    const chip = event.target.closest('.persona-chip');
    if (!chip) return;
    setPersona(chip.dataset.persona);
  });

  // Kids mode toggle
  const kidsToggle = document.getElementById('kids-mode-toggle');
  if (kidsToggle) {
    kidsToggle.checked = state.kidsMode;
    kidsToggle.addEventListener('change', (e) => {
      state.kidsMode = !!e.target.checked;
      savePreferences();
      render();
    });
  }

  els.genreChips.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;
    state.libraryGenreFilter = chip.dataset.genre;
    els.genreChips.querySelectorAll('.chip').forEach((item) => item.classList.toggle('active', item === chip));
    renderLibrary();
  });

  els.librarySort.addEventListener('change', () => {
    state.librarySort = els.librarySort.value;
    renderLibrary();
  });

  document.querySelectorAll('.carousel-wrap').forEach((wrap) => {
    const viewport = wrap.querySelector('.carousel-viewport');
    wrap.querySelector('.arrow-left')?.addEventListener('click', () => viewport.scrollBy({ left: -760, behavior: 'smooth' }));
    wrap.querySelector('.arrow-right')?.addEventListener('click', () => viewport.scrollBy({ left: 760, behavior: 'smooth' }));
  });

  els.heroWatchlistBtn.addEventListener('click', () => toggleWatchlist(heroMovies()[state.heroIndex].id));
  els.heroInfoBtn.addEventListener('click', () => openDetail(heroMovies()[state.heroIndex].id));
  els.heroPlayTrailer.addEventListener('click', () => openTrailer(heroMovies()[state.heroIndex].id));

  els.detailClose.addEventListener('click', closeDetail);
  els.detailModal.addEventListener('click', (event) => {
    if (event.target === els.detailModal) closeDetail();
  });

  els.detailWatchlistBtn.addEventListener('click', () => {
    if (state.selectedMovieId) toggleWatchlist(state.selectedMovieId);
  });

  els.detailPlayTrailer.addEventListener('click', () => {
    if (state.selectedMovieId) openTrailer(state.selectedMovieId);
  });

  els.detailStars.addEventListener('click', (event) => {
    const star = event.target.closest('.rating-star');
    if (!star || !state.selectedMovieId) return;
    rateMovie(state.selectedMovieId, Number(star.dataset.value));
  });

  els.detailStars.addEventListener('mouseover', (event) => {
    const star = event.target.closest('.rating-star');
    if (star) paintStars(Number(star.dataset.value));
  });

  els.detailStars.addEventListener('mouseleave', () => {
    paintStars(state.userRatings[state.selectedMovieId] || 0);
  });

  els.videoClose.addEventListener('click', closeTrailer);
  els.videoModal.addEventListener('click', (event) => {
    if (event.target === els.videoModal) closeTrailer();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTrailer();
      closeDetail();
    }
  });
}

function isKidFriendly(movie) {
  if (!movie) return false;
  const allowed = new Set(['Family', 'Animation', 'Adventure', 'Fantasy', 'Kids', 'Children']);
  const blocked = new Set(['Horror', 'Thriller', 'Crime', 'Adult']);
  const genres = movie.genres || [];
  // If any blocked genre present, reject
  if (genres.some((g) => blocked.has(g))) return false;
  // Accept if any allowed genre present
  if (genres.some((g) => allowed.has(g))) return true;
  // fallback: check keywords for kid-friendly hints
  const keywords = movie.keywords || [];
  if (keywords.some((k) => ['family','children','kids','animation','cartoon'].includes(k.toLowerCase()))) return true;
  return false;
}

function applyKidsFilter(list) {
  if (!state.kidsMode) return list;
  return list.filter(isKidFriendly);
}

function render() {
  renderHero();
  renderHome();
  renderLibrary();
  renderWatchlist();
  renderRatings();
  renderPersonaBars();
  updateCounters();
  switchView(state.activeView);
}

function renderActiveView() {
  if (state.activeView === 'home') renderHome();
  if (state.activeView === 'library') renderLibrary();
  if (state.activeView === 'watchlist') renderWatchlist();
  if (state.activeView === 'ratings') renderRatings();
}

function switchView(view) {
  state.activeView = view;
  document.querySelectorAll('.view-pane').forEach((pane) => {
    pane.style.display = pane.id === `view-${view}` ? 'block' : 'none';
  });
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.view === view);
  });
  els.sidebar.classList.remove('open');
  els.searchInput.placeholder = view === 'home'
    ? 'Search movies, directors, genres...'
    : `Search ${view}...`;
  renderActiveView();
}

function heroMovies() {
  return movies
    .filter((movie) => movie.backdrop && movie.poster)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}

function renderHero() {
  const picks = heroMovies();
  const movie = picks[state.heroIndex % picks.length];
  const match = getMatchScore(movie);
  const heroImages = [
    movie.backdrop,
    movie.poster,
    generatedMedia(movie, 'backdrop')
  ].filter(Boolean);

  els.heroBackdrop.style.backgroundImage = `linear-gradient(90deg, rgba(6,8,16,.96) 0%, rgba(6,8,16,.72) 43%, rgba(6,8,16,.18) 100%), ${heroImages.map((url) => `url("${url}")`).join(', ')}`;
  els.heroTitle.textContent = movie.title;
  els.heroYear.textContent = movie.year;
  els.heroDuration.textContent = movie.duration;
  els.heroStars.innerHTML = starIcons(Math.round(movie.rating / 2));
  els.heroMatch.textContent = `${match}% match`;
  els.heroGenres.innerHTML = movie.genres.map((genre) => `<span>${genre}</span>`).join('');
  els.heroDesc.textContent = movie.description;
  els.heroProviders.innerHTML = movie.watchProviders.map(providerTag).join('');
  updateHeroWatchlist(movie.id);

  els.heroDots.innerHTML = picks.map((_, index) => (
    `<button class="${index === state.heroIndex ? 'active' : ''}" aria-label="Show spotlight ${index + 1}" data-index="${index}"></button>`
  )).join('');
  els.heroDots.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.heroIndex = Number(button.dataset.index);
      renderHero();
    });
  });
}

function startHeroRotation() {
  window.setInterval(() => {
    if (state.activeView !== 'home' || els.detailModal.classList.contains('show') || els.videoModal.classList.contains('show')) return;
    state.heroIndex = (state.heroIndex + 1) % heroMovies().length;
    renderHero();
  }, 9000);
}

function renderHome() {
  const queryResults = filterBySearch(movies);
  const source = state.searchQuery ? queryResults : null;

  renderWatchlistRow();
  renderMovieRail(els.collabCarousel, source || getCollaborativeRecommendations(state.userRatings, 12), { showReason: true });

  const contentRecs = getContentRecommendations(state.userRatings, state.watchlist, 12);
  els.contentRowTitle.textContent = state.searchQuery ? 'Search Results' : contentTitle();
  renderMovieRail(els.contentCarousel, source || contentRecs, { showReason: !state.searchQuery });

  renderMovieRail(els.trendingCarousel, topMovies(14));
  renderMovieRail(els.indianCarousel, byGenre(['Indian Cinema'], 14));
  renderMovieRail(els.scifiCarousel, byGenre(['Sci-Fi', 'Action'], 14));
  renderMovieRail(els.dramaCarousel, byGenre(['Drama'], 14));
  renderMovieRail(els.thrillerCarousel, byGenre(['Thriller', 'Mystery'], 14));
}

function renderWatchlistRow() {
  const saved = movies.filter((movie) => state.watchlist.includes(movie.id));
  els.watchlistRow.style.display = saved.length ? 'block' : 'none';
  renderMovieRail(els.watchlistCarousel, saved);
}

function renderLibrary() {
  let filtered = filterBySearch(movies);

  if (state.libraryGenreFilter !== 'All') {
    filtered = filtered.filter((movie) => movie.genres.includes(state.libraryGenreFilter));
  }

  filtered = sortMovies(filtered, state.librarySort);

  renderGrid(
    els.libraryGrid,
    filtered,
    'No titles found',
    'Try a different search, genre, or sort.'
  );
}

function renderWatchlist() {
  const saved = filterBySearch(movies.filter((movie) => state.watchlist.includes(movie.id)));
  els.watchlistCount.textContent = saved.length;
  renderGrid(
    els.watchlistGrid,
    saved,
    'Your watchlist is empty',
    'Add a title from Home or Browse to keep it here.'
  );
}

function renderRatings() {
  const rated = Object.entries(state.userRatings)
    .map(([id, rating]) => ({ ...movies.find((movie) => movie.id === Number(id)), userRating: rating }))
    .filter((movie) => movie.id)
    .filter((movie) => matchesSearch(movie, state.searchQuery))
    .sort((a, b) => b.userRating - a.userRating || b.rating - a.rating);

  els.ratingsCount.textContent = rated.length;

  if (!rated.length) {
    els.ratingsList.innerHTML = emptyState('No ratings yet', 'Open any movie and mark it from one to five stars.');
    return;
  }

  els.ratingsList.innerHTML = rated.map((movie) => `
    <article class="rating-row" data-id="${movie.id}">
      <img src="${mediaUrl(movie, 'poster')}" alt="${movie.title} poster" loading="lazy" data-media-kind="poster" data-movie-id="${movie.id}">
      <button class="rating-title" data-action="detail">${movie.title}</button>
      <span>${movie.year}</span>
      <span>${movie.director}</span>
      <div class="rating-row-stars">${starIcons(movie.userRating)}</div>
      <button class="icon-btn" data-action="delete" aria-label="Remove rating">
        <svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/></svg>
      </button>
    </article>
  `).join('');

  bindMediaFallbacks(els.ratingsList);

  els.ratingsList.querySelectorAll('.rating-row').forEach((row) => {
    const id = Number(row.dataset.id);
    row.querySelector('[data-action="detail"]').addEventListener('click', () => openDetail(id));
    row.querySelector('[data-action="delete"]').addEventListener('click', () => {
      delete state.userRatings[id];
      saveState();
      render();
      toast('Rating removed');
    });
  });
}

function renderPersonaBars() {
  const similarities = getPersonaSimilarities(state.userRatings).slice(0, 5);
  els.personaBars.innerHTML = similarities.map((persona) => `
    <div class="taste-row">
      <div>
        <span>${persona.name}</span>
        <strong>${persona.percentage}%</strong>
      </div>
      <div class="taste-meter"><span style="width:${persona.percentage}%"></span></div>
    </div>
  `).join('');
}

function renderMovieRail(container, list, options = {}) {
  const filteredList = applyKidsFilter(list);
  if (!filteredList.length) {
    container.innerHTML = emptyState('Nothing here yet', 'Rate or save a few movies to tune this row.');
    return;
  }

  container.innerHTML = filteredList.map((movie) => movieCard(movie, options)).join('');
  bindCards(container);
}

function renderGrid(container, list, title, copy) {
  const filteredList = applyKidsFilter(list);
  if (!filteredList.length) {
    container.innerHTML = emptyState(title, copy);
    return;
  }

  container.innerHTML = filteredList.map((movie) => movieCard(movie, { grid: true })).join('');
  bindCards(container);
}

function movieCard(movie, options = {}) {
  const match = movie.matchScore || getMatchScore(movie);
  const reason = movie.reason ? `<p class="card-reason">${movie.reason}</p>` : '';
  const saved = state.watchlist.includes(movie.id);
  const userRating = state.userRatings[movie.id] || 0;

  return `
    <article class="movie-card ${options.grid ? 'grid-card' : ''}" data-id="${movie.id}">
      <div class="poster-frame">
        <img src="${mediaUrl(movie, 'poster')}" alt="${movie.title} poster" loading="lazy" data-media-kind="poster" data-movie-id="${movie.id}">
        <div class="poster-overlay">
          <button class="quick-play" data-action="trailer" aria-label="Play ${movie.title} trailer">
            <svg viewBox="0 0 24 24"><path d="M7 4l12 8-12 8V4z"/></svg>
          </button>
        </div>
        <button class="save-btn ${saved ? 'saved' : ''}" data-action="watchlist" aria-label="Toggle watchlist">
          <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
        </button>
        <span class="match-chip">${match}%</span>
      </div>
      <div class="card-info">
        <h3>${movie.title}</h3>
        <p>${movie.year} · ${movie.duration}</p>
        <div class="mini-genres">${movie.genres.slice(0, 2).map((genre) => `<span>${genre}</span>`).join('')}</div>
        <div class="card-stars">${starIcons(userRating || Math.round(movie.rating / 2))}</div>
        ${options.showReason ? reason : ''}
      </div>
    </article>
  `;
}

function bindCards(container) {
  bindMediaFallbacks(container);
  container.querySelectorAll('.movie-card').forEach((card) => {
    const id = Number(card.dataset.id);
    card.addEventListener('click', () => openDetail(id));
    card.querySelector('[data-action="watchlist"]').addEventListener('click', (event) => {
      event.stopPropagation();
      toggleWatchlist(id);
    });
    card.querySelector('[data-action="trailer"]').addEventListener('click', (event) => {
      event.stopPropagation();
      openTrailer(id);
    });
  });
}

function openDetail(movieId) {
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) return;

  state.selectedMovieId = movieId;
  setImage(els.detailBackdrop, movie, 'backdrop');
  els.detailBackdrop.alt = `${movie.title} backdrop`;
  setImage(els.detailPoster, movie, 'poster');
  els.detailPoster.alt = `${movie.title} poster`;
  els.detailTitle.textContent = movie.title;
  els.detailYear.textContent = movie.year;
  els.detailDuration.textContent = movie.duration;
  els.detailRating.textContent = movie.rating;
  els.detailGenres.innerHTML = movie.genres.map((genre) => `<span>${genre}</span>`).join('');
  els.detailDesc.textContent = movie.description;
  els.detailProviders.innerHTML = movie.watchProviders.map(providerTag).join('');
  els.detailDirector.textContent = movie.director;
  els.detailCast.textContent = movie.cast.join(', ');
  updateDetailWatchlist(movieId);
  paintStars(state.userRatings[movieId] || 0);
  els.detailModal.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeDetail() {
  els.detailModal.classList.remove('show');
  document.body.classList.remove('modal-open');
}

function openTrailer(movieId) {
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) return;
  els.videoTitle.textContent = `${movie.title} Official Trailer`;
  const trailerUrl = getTrailerUrl(movie);
  els.videoFallbackLink.href = trailerUrl;
  if (movie.trailerId) {
    els.videoIframe.src = `https://www.youtube-nocookie.com/embed/${movie.trailerId}?autoplay=1&rel=0`;
  } else {
    els.videoIframe.src = trailerFallbackFrame(movie, trailerUrl);
  }
  els.videoModal.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeTrailer() {
  els.videoModal.classList.remove('show');
  els.videoIframe.src = '';
  if (!els.detailModal.classList.contains('show')) {
    document.body.classList.remove('modal-open');
  }
}

function toggleWatchlist(movieId) {
  if (state.activePersona !== 'custom') restoreCustomProfile();

  const index = state.watchlist.indexOf(movieId);
  const movie = movies.find((item) => item.id === movieId);
  if (index >= 0) {
    state.watchlist.splice(index, 1);
    toast(`${movie.title} removed from watchlist`);
  } else {
    state.watchlist.push(movieId);
    toast(`${movie.title} added to watchlist`);
  }

  saveState();
  render();
  if (state.selectedMovieId === movieId) updateDetailWatchlist(movieId);
  updateHeroWatchlist(heroMovies()[state.heroIndex].id);
}

function rateMovie(movieId, rating) {
  if (state.activePersona !== 'custom') restoreCustomProfile();
  state.userRatings[movieId] = rating;
  saveState();
  paintStars(rating);
  render();
  toast(`Rated ${rating} star${rating > 1 ? 's' : ''}`);
}

function setPersona(persona) {
  if (persona === state.activePersona) return;

  if (persona === 'custom') {
    restoreCustomProfile(false);
    toast('Restored your profile');
  } else {
    if (state.activePersona === 'custom') {
      customProfile = {
        ratings: { ...state.userRatings },
        watchlist: [...state.watchlist]
      };
    }
    state.activePersona = persona;
    state.userRatings = { ...personas[persona] };
    state.watchlist = Object.entries(personas[persona])
      .filter(([, rating]) => rating >= 4.5)
      .map(([id]) => Number(id));
    toast(`Viewing as ${persona}`);
  }

  els.personaSelector.querySelectorAll('.persona-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.persona === state.activePersona);
  });
  els.activePersonaName.textContent = state.activePersona === 'custom' ? 'You' : state.activePersona;
  render();
}

function restoreCustomProfile(show = true) {
  state.activePersona = 'custom';
  state.userRatings = { ...customProfile.ratings };
  state.watchlist = [...customProfile.watchlist];
  els.personaSelector.querySelectorAll('.persona-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.persona === 'custom');
  });
  els.activePersonaName.textContent = 'You';
  if (show) toast('Switched back to your profile');
}

function updateCounters() {
  const count = state.watchlist.length;
  els.watchlistBadge.textContent = count;
  els.watchlistBadge.style.display = count ? 'inline-grid' : 'none';
  if (els.watchlistCount) els.watchlistCount.textContent = count;
}

function updateHeroWatchlist(movieId) {
  const saved = state.watchlist.includes(movieId);
  els.heroWatchlistBtn.classList.toggle('saved', saved);
  els.heroWatchlistText.textContent = saved ? 'Saved' : 'Watchlist';
}

function updateDetailWatchlist(movieId) {
  const saved = state.watchlist.includes(movieId);
  els.detailWatchlistBtn.classList.toggle('saved', saved);
  els.detailWatchlistText.textContent = saved ? 'Saved to Watchlist' : 'Add to Watchlist';
}

function paintStars(rating) {
  els.detailStars.querySelectorAll('.rating-star').forEach((star) => {
    star.classList.toggle('active', Number(star.dataset.value) <= rating);
  });
  els.detailStarLabel.textContent = rating ? `You rated this ${rating}/5` : 'Not rated yet';
}

function contentTitle() {
  const likedId = Object.entries(state.userRatings).sort((a, b) => b[1] - a[1])[0]?.[0] || state.watchlist[0];
  const liked = movies.find((movie) => movie.id === Number(likedId));
  return liked ? `Because You Liked ${liked.title}` : 'Because You Liked';
}

function providerTag(provider) {
  return `<span class="provider">${provider}</span>`;
}

function bindMediaFallbacks(root = document) {
  root.querySelectorAll('img[data-movie-id]').forEach((img) => {
    const movie = movies.find((item) => item.id === Number(img.dataset.movieId));
    const kind = img.dataset.mediaKind || 'poster';
    if (movie) {
      img.addEventListener('error', () => setImageFallback(img, movie, kind), { once: true });
    }
  });
}

function setImage(img, movie, kind) {
  img.dataset.mediaKind = kind;
  img.dataset.movieId = movie.id;
  img.onerror = () => setImageFallback(img, movie, kind);
  img.src = mediaUrl(movie, kind);
}

function setImageFallback(img, movie, kind) {
  img.onerror = null;

  // Attempt a list of alternative sources before falling back to generated SVG.
  const current = img.src || '';
  const candidates = [];

  if (kind === 'poster') {
    if (movie.poster && !current.includes(movie.poster)) candidates.push(movie.poster);
    if (movie.poster && movie.poster.includes('/w500/')) {
      const w780 = movie.poster.replace('/w500/', '/w780/');
      const original = movie.poster.replace('/w500/', '/original/');
      if (!current.includes(w780)) candidates.push(w780);
      if (!current.includes(original)) candidates.push(original);
    }
    if (movie.backdrop && !current.includes(movie.backdrop)) candidates.push(movie.backdrop);
  } else {
    if (movie.backdrop && !current.includes(movie.backdrop)) candidates.push(movie.backdrop);
    if (movie.backdrop && movie.backdrop.includes('/original/')) {
      const w1280 = movie.backdrop.replace('/original/', '/w1280/');
      if (!current.includes(w1280)) candidates.push(w1280);
    }
    if (movie.poster && !current.includes(movie.poster)) candidates.push(movie.poster);
  }

  // Always try a generated SVG last
  candidates.push(generatedMedia(movie, kind));

  const index = Number(img.dataset.fallbackIndex || 0);
  if (index < candidates.length) {
    img.dataset.fallbackIndex = index + 1;
    img.classList.toggle('generated-media', candidates[index].startsWith('data:image/svg+xml'));
    img.onerror = () => setImageFallback(img, movie, kind);
    img.src = candidates[index];
    return;
  }

  // If all attempts exhausted, use generated media
  img.classList.add('generated-media');
  img.src = generatedMedia(movie, kind);
}

function mediaUrl(movie, kind) {
  return kind === 'backdrop'
    ? (movie.backdrop || movie.poster || generatedMedia(movie, kind))
    : (movie.poster || generatedMedia(movie, kind));
}

function generatedMedia(movie, kind = 'poster') {
  const width = kind === 'backdrop' ? 1280 : 500;
  const height = kind === 'backdrop' ? 720 : 750;
  const year = escapeXml(String(movie.year));
  const genre = escapeXml(movie.genres[0] || 'Movie');
  const colors = paletteFor(movie.title);
  const textLayer = kind === 'backdrop' ? '' : `
      <rect x="8%" y="8%" width="84%" height="84%" rx="18" fill="rgba(0,0,0,.18)" stroke="rgba(255,255,255,.22)"/>
      <text x="10%" y="52%" fill="white" font-family="Arial, sans-serif" font-size="44" font-weight="800">
        ${wrapSvgText(movie.title, 16)}
      </text>
      <text x="10%" y="76%" fill="rgba(255,255,255,.72)" font-family="Arial, sans-serif" font-size="22" font-weight="700">${year} / ${genre}</text>
  `;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${colors[0]}"/>
          <stop offset="1" stop-color="${colors[1]}"/>
        </linearGradient>
        <radialGradient id="r" cx=".75" cy=".2" r=".75">
          <stop offset="0" stop-color="rgba(255,255,255,.28)"/>
          <stop offset="1" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#r)"/>
      <circle cx="78%" cy="36%" r="24%" fill="rgba(255,255,255,.09)"/>
      <circle cx="62%" cy="62%" r="16%" fill="rgba(0,0,0,.16)"/>
      ${textLayer}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function wrapSvgText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);

  return lines.slice(0, 3).map((line, index) => (
    `<tspan x="10%" dy="${index === 0 ? 0 : 1.12}em">${escapeXml(line)}</tspan>`
  )).join('');
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function paletteFor(seed) {
  const palettes = [
    ['#7f1d1d', '#111827'],
    ['#0f766e', '#111827'],
    ['#4338ca', '#0f172a'],
    ['#9f1239', '#1f2937'],
    ['#92400e', '#111827'],
    ['#155e75', '#18181b']
  ];
  const index = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length;
  return palettes[index];
}

function getTrailerUrl(movie) {
  if (movie.trailerUrl) return movie.trailerUrl;
  if (movie.trailerId) return `https://www.youtube.com/watch?v=${movie.trailerId}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} official trailer`)}`;
}

function trailerFallbackFrame(movie, trailerUrl) {
  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#05060a;color:white;font-family:Arial,sans-serif;text-align:center">
        <div>
          <div style="font-size:22px;font-weight:800;margin-bottom:10px">${escapeXml(movie.title)}</div>
          <div style="color:#a1a8b5;margin-bottom:18px">Trailer opens on YouTube for this title.</div>
          <a href="${escapeXml(trailerUrl)}" target="_blank" rel="noopener" style="color:white;background:#f43f5e;padding:12px 16px;border-radius:8px;text-decoration:none;font-weight:800">Open on YouTube</a>
        </div>
      </body>
    </html>
  `;
  return `data:text/html;charset=UTF-8,${encodeURIComponent(html)}`;
}

function starIcons(rating) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return Array.from({ length: 5 }, (_, index) => (
    `<svg class="${index < full ? 'active' : ''}" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  )).join('');
}

function getMatchScore(movie) {
  const rated = state.userRatings[movie.id];
  if (rated) return Math.min(99, 58 + rated * 8);
  const genreHits = Object.entries(state.userRatings).reduce((hits, [id, rating]) => {
    if (rating < 4) return hits;
    const liked = movies.find((item) => item.id === Number(id));
    return hits + (liked ? movie.genres.filter((genre) => liked.genres.includes(genre)).length : 0);
  }, 0);
  return Math.min(98, 78 + genreHits * 4 + Math.round((movie.rating - 7) * 3));
}

function topMovies(limit) {
  return [...movies].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

function byGenre(genres, limit) {
  return movies
    .filter((movie) => movie.genres.some((genre) => genres.includes(genre)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

function sortMovies(list, sort) {
  const sorted = [...list];
  if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
  if (sort === 'year-desc') sorted.sort((a, b) => b.year - a.year);
  if (sort === 'year-asc') sorted.sort((a, b) => a.year - b.year);
  if (sort === 'title') sorted.sort((a, b) => a.title.localeCompare(b.title));
  return sorted;
}

function filterBySearch(list) {
  return list.filter((movie) => matchesSearch(movie, state.searchQuery));
}

function matchesSearch(movie, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return [
    movie.title,
    movie.director,
    movie.cast.join(' '),
    movie.genres.join(' '),
    movie.keywords.join(' ')
  ].some((value) => value.toLowerCase().includes(q));
}

function emptyState(title, copy) {
  return `
    <div class="empty-state">
      <strong>${title}</strong>
      <span>${copy}</span>
    </div>
  `;
}

function toast(message) {
  const note = document.createElement('div');
  note.className = 'toast';
  note.textContent = message;
  els.toastContainer.appendChild(note);
  window.setTimeout(() => note.classList.add('show'), 20);
  window.setTimeout(() => {
    note.classList.remove('show');
    window.setTimeout(() => note.remove(), 250);
  }, 2400);
}

window.addEventListener('DOMContentLoaded', init);
