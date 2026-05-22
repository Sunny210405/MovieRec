// recommender.js - Content-Based & Collaborative Filtering algorithms
import { movies, personas } from './movies.js';

/**
 * Calculates Jaccard Similarity between two sets
 * @param {Set} setA 
 * @param {Set} setB 
 * @returns {number} similarity between 0 and 1
 */
function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

/**
 * Generates Content-Based Recommendations
 * @param {Object} userRatings - Map of movieId -> rating (1-5)
 * @param {Array<number>} userFavorites - List of favorite movieIds
 * @param {number} limit - Maximum number of recommendations
 * @returns {Array<Object>} Recommended movies with scores and explanations
 */
export function getContentRecommendations(userRatings, userFavorites, limit = 6) {
  // 1. Identify "liked" movies: Rated 4+ stars or explicitly favorited
  const likedMovieIds = new Set([
    ...userFavorites,
    ...Object.entries(userRatings)
      .filter(([_, rating]) => rating >= 4)
      .map(([id, _]) => parseInt(id))
  ]);

  // If no liked movies, provide top-rated movies as fallback (cold-start)
  if (likedMovieIds.size === 0) {
    return movies
      .filter(m => !userRatings[m.id]) // Not rated yet
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
      .map(movie => ({
        ...movie,
        score: 0.5,
        reason: "Highly rated by users on the platform (Trending)"
      }));
  }

  // 2. Build User Preference Profile (genres, directors, keywords)
  const preferredGenres = new Set();
  const preferredDirectors = new Set();
  const preferredKeywords = new Set();
  const likedTitles = [];

  likedMovieIds.forEach(id => {
    const movie = movies.find(m => m.id === id);
    if (movie) {
      movie.genres.forEach(g => preferredGenres.add(g));
      preferredDirectors.add(movie.director);
      movie.keywords.forEach(k => preferredKeywords.add(k));
      likedTitles.push(movie.title);
    }
  });

  // 3. Compute similarity score for all OTHER movies
  const recommendations = [];

  movies.forEach(movie => {
    // Skip if already rated or favorited (assuming watched/known)
    if (userRatings[movie.id] !== undefined) return;

    const movieGenres = new Set(movie.genres);
    const movieKeywords = new Set(movie.keywords);

    // Compute sub-scores
    const genreScore = jaccardSimilarity(preferredGenres, movieGenres);
    const keywordScore = jaccardSimilarity(preferredKeywords, movieKeywords);
    const directorScore = preferredDirectors.has(movie.director) ? 1.0 : 0.0;

    // Weighted average score
    // 50% genres, 30% keywords, 20% director
    const finalScore = (genreScore * 0.5) + (keywordScore * 0.3) + (directorScore * 0.2);

    if (finalScore > 0.05) {
      // Find matching items to generate explanation
      const matchingGenres = movie.genres.filter(g => preferredGenres.has(g));
      const matchingKeywords = movie.keywords.filter(k => preferredKeywords.has(k));
      
      let reason = "";
      if (preferredDirectors.has(movie.director)) {
        reason = `Directed by ${movie.director}, who directed movies you liked.`;
      } else if (matchingKeywords.length >= 2) {
        reason = `Matches your interest in themes like ${matchingKeywords.slice(0, 2).join(', ')}.`;
      } else if (matchingGenres.length > 0) {
        reason = `Fits your favorite genres: ${matchingGenres.join(', ')}.`;
      } else {
        reason = `Shares storytelling elements with movies you rated highly.`;
      }

      recommendations.push({
        ...movie,
        score: finalScore,
        reason
      });
    }
  });

  // Sort by score descending and return top matches
  return recommendations
    .sort((a, b) => b.score - a.score || b.rating - a.rating)
    .slice(0, limit);
}

/**
 * Calculates Cosine Similarity between user rating map and a persona rating map
 * @param {Object} userRatings - Map of movieId -> rating (1-5)
 * @param {Object} personaRatings - Map of movieId -> rating (1-5)
 * @returns {number} similarity score [-1, 1]
 */
function calculateCosineSimilarity(userRatings, personaRatings) {
  // Find movies rated by BOTH
  const userRatedIds = Object.keys(userRatings).map(Number);
  const commonIds = userRatedIds.filter(id => personaRatings[id] !== undefined);

  // If there's no overlap, we can't establish similarity directly.
  // Return 0 or fallback value.
  if (commonIds.length === 0) return 0.0;

  let dotProduct = 0;
  let userNormSq = 0;
  let personaNormSq = 0;

  // We mean-center the ratings (subtract 3.0, the midpoint of 1-5 scale) to represent positive/negative affinity
  commonIds.forEach(id => {
    const u = userRatings[id] - 3.0;
    const p = personaRatings[id] - 3.0;
    dotProduct += u * p;
    userNormSq += u * u;
    personaNormSq += p * p;
  });

  if (userNormSq === 0 || personaNormSq === 0) return 0.0;
  return dotProduct / (Math.sqrt(userNormSq) * Math.sqrt(personaNormSq));
}

/**
 * Generates User-User Collaborative Filtering Recommendations
 * @param {Object} userRatings - Map of movieId -> rating (1-5)
 * @param {number} limit - Maximum number of recommendations
 * @returns {Array<Object>} Recommended movies with predicted ratings and match percentage
 */
export function getCollaborativeRecommendations(userRatings, limit = 6) {
  const ratedMovieIds = Object.keys(userRatings).map(Number);

  // Cold start: if user hasn't rated enough movies (e.g., < 2), return movies that have high ratings in general
  if (ratedMovieIds.length < 2) {
    return movies
      .filter(m => !userRatings[m.id])
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
      .map(movie => ({
        ...movie,
        predictedRating: movie.rating / 2, // Scale to 5-star predicted
        matchScore: 75 + Math.round(movie.rating * 2.5), // Simulated match score percentage
        reason: "Recommended based on overall popular choices (Cold-Start)"
      }));
  }

  // 1. Calculate similarity with all 5 personas
  const similarities = {};
  let hasValidSim = false;

  Object.entries(personas).forEach(([personaName, personaRatings]) => {
    const sim = calculateCosineSimilarity(userRatings, personaRatings);
    similarities[personaName] = sim;
    if (sim !== 0) hasValidSim = true;
  });

  // If we couldn't find any similarity, fall back to content-based or global popularity
  if (!hasValidSim) {
    return movies
      .filter(m => !userRatings[m.id])
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
      .map(movie => ({
        ...movie,
        predictedRating: 4.0,
        matchScore: 80,
        reason: "Recommended based on community ratings"
      }));
  }

  // 2. Predict ratings for all UNRATED movies using weighted average of personas' ratings
  const predictions = [];

  movies.forEach(movie => {
    // Skip if already rated
    if (userRatings[movie.id] !== undefined) return;

    let weightedSum = 0;
    let similaritySum = 0;
    const contributingPersonas = [];

    Object.entries(personas).forEach(([personaName, personaRatings]) => {
      const rating = personaRatings[movie.id];
      const sim = similarities[personaName];

      // Only consider positive similarities (or highly correlated ones) and active ratings
      if (rating !== undefined && sim > 0) {
        weightedSum += sim * rating;
        similaritySum += sim;
        contributingPersonas.push({ name: personaName, sim });
      }
    });

    if (similaritySum > 0) {
      const predictedRating = weightedSum / similaritySum;
      
      // Calculate match percentage (predicted rating scaled to 100%)
      const matchScore = Math.min(100, Math.max(50, Math.round((predictedRating / 5) * 100)));

      // Find the most similar persona that liked this movie for the explanation
      contributingPersonas.sort((a, b) => b.sim - a.sim);
      const primaryPersona = contributingPersonas[0].name;

      predictions.push({
        ...movie,
        predictedRating: Math.round(predictedRating * 10) / 10,
        matchScore,
        reason: `Highly rated by users like "${primaryPersona}" who share your movie tastes.`
      });
    }
  });

  // Sort by predicted rating descending, then global rating descending
  return predictions
    .sort((a, b) => b.predictedRating - a.predictedRating || b.rating - a.rating)
    .slice(0, limit);
}

/**
 * Gets a summary of persona similarities for the current user's profile
 * @param {Object} userRatings 
 * @returns {Array<Object>} list of personas and their similarity scores
 */
export function getPersonaSimilarities(userRatings) {
  return Object.entries(personas).map(([name, ratings]) => {
    const sim = calculateCosineSimilarity(userRatings, ratings);
    // Convert similarity [-1, 1] to a readable percentage [0, 100]
    const pct = Math.round(((sim + 1) / 2) * 100);
    return { name, similarity: sim, percentage: pct };
  }).sort((a, b) => b.similarity - a.similarity);
}
