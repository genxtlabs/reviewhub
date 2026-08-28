// ReviewHub prototype persistence layer.
// NOTE: this is a static, file:// prototype — there is no real server, database,
// or auth. "Publishing" writes to the browser's localStorage, which is why the
// admin pages and the public site (index.html / movie.html) must be opened from
// the same browser profile to see each other's data. Depends on data.js.

// Bumped to v2 when movie ids were renumbered from the legacy 10-28 range
// down to 1-19 — any v1 cache would otherwise carry forward orphaned
// entries under the old ids alongside the same movies under their new ids.
const STORE_KEY = 'reviewhub_movies_v2';
const LANG_KEY = 'reviewhub_languages_v1';
const AUTH_KEY = 'reviewhub_admin_session';

function uid() {
  return 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Movies with real videos already attached (pulled from cinemaip.ai) keep
// them as-is; the original 9 demo movies get the simulated generator.
// `existing` is this movie's previously-cached copy, if any — its admin-set
// posterImage/summaryText survive a refresh instead of being wiped back to defaults.
function seedOneMovie(m, existing) {
  const rawVideos = (m.videos && m.videos.length) ? m.videos : generateVideosForMovie(m);
  const videos = rawVideos.map((v, i) => ({
    id: uid(),
    url: `https://www.youtube.com/watch?v=seed-${m.id}-${i}`,
    ...v,
  }));
  const counts = countVerdicts(videos);
  return {
    ...m,
    posterImage: (existing && existing.posterImage) || null,
    status: 'published',
    summaryText: (existing && existing.summaryText) || m.summaryText || buildSummaryText(m, counts),
    videos,
  };
}

function reviewedVideoCount(m) {
  return (m.videos || []).filter((v) => v.verdictKey).length;
}

function seedStore() {
  const seeded = MOVIES.map(seedOneMovie);
  localStorage.setItem(STORE_KEY, JSON.stringify(seeded));
  return seeded;
}

// A returning visitor's localStorage was seeded before new movies were added
// to data.js's MOVIES list (or before a since-cached movie had its reviews
// written) — reconcile it: refresh any cached movie that data.js has since
// gained more reviews for, and append whichever real ones are missing
// entirely (by id), without touching anything else they've published/edited.
function migrateNewSeedMovies(existing) {
  const sourceById = new Map(MOVIES.map((m) => [String(m.id), m]));
  const existingIds = new Set(existing.map((m) => String(m.id)));

  let changed = false;
  const refreshed = existing.map((m) => {
    const src = sourceById.get(String(m.id));
    if (src && reviewedVideoCount(src) > reviewedVideoCount(m)) {
      changed = true;
      return seedOneMovie(src, m);
    }
    return m;
  });

  const missing = MOVIES.filter((m) => !existingIds.has(String(m.id)));
  if (missing.length) changed = true;

  if (!changed) return existing;
  const merged = [...refreshed, ...missing.map((m) => seedOneMovie(m))];
  saveMovies(merged);
  return merged;
}

function getMovies() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return seedStore();
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error('bad store');
    return migrateNewSeedMovies(parsed);
  } catch (e) {
    return seedStore();
  }
}

function getPublishedMovies() {
  return getMovies().filter((m) => m.status === 'published');
}

function saveMovies(list) {
  localStorage.setItem(STORE_KEY, JSON.stringify(list));
}

function getMovie(id) {
  return getMovies().find((m) => String(m.id) === String(id));
}

function upsertMovie(movie) {
  const list = getMovies();
  const idx = list.findIndex((m) => String(m.id) === String(movie.id));
  if (idx >= 0) list[idx] = movie; else list.push(movie);
  saveMovies(list);
  return movie;
}

function deleteMovieById(id) {
  saveMovies(getMovies().filter((m) => String(m.id) !== String(id)));
}

function nextMovieId() {
  const list = getMovies();
  return list.length ? Math.max(...list.map((m) => Number(m.id) || 0)) + 1 : 1;
}

// --- Cars vertical: same shape and reconciliation logic as movies above,
// stored under its own key so the two verticals never collide. ---
const CAR_STORE_KEY = 'reviewhub_cars_v1';

function seedOneCar(c, existing) {
  const videos = (c.videos || []).map((v, i) => ({
    id: uid(),
    url: `https://www.youtube.com/watch?v=seed-${c.id}-${i}`,
    ...v,
  }));
  const counts = countVerdicts(videos);
  return {
    ...c,
    posterImage: (existing && existing.posterImage) || null,
    status: 'published',
    summaryText: (existing && existing.summaryText) || c.summaryText || buildSummaryText(c, counts),
    videos,
  };
}

function seedCarStore() {
  const seeded = CARS.map((c) => seedOneCar(c));
  localStorage.setItem(CAR_STORE_KEY, JSON.stringify(seeded));
  return seeded;
}

function migrateNewSeedCars(existing) {
  const sourceById = new Map(CARS.map((c) => [String(c.id), c]));
  const existingIds = new Set(existing.map((c) => String(c.id)));

  let changed = false;
  const refreshed = existing.map((c) => {
    const src = sourceById.get(String(c.id));
    if (src && reviewedVideoCount(src) > reviewedVideoCount(c)) {
      changed = true;
      return seedOneCar(src, c);
    }
    return c;
  });

  const missing = CARS.filter((c) => !existingIds.has(String(c.id)));
  if (missing.length) changed = true;

  if (!changed) return existing;
  const merged = [...refreshed, ...missing.map((c) => seedOneCar(c))];
  saveCars(merged);
  return merged;
}

function getCars() {
  const raw = localStorage.getItem(CAR_STORE_KEY);
  if (!raw) return seedCarStore();
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error('bad store');
    return migrateNewSeedCars(parsed);
  } catch (e) {
    return seedCarStore();
  }
}

function getPublishedCars() {
  return getCars().filter((c) => c.status === 'published');
}

function saveCars(list) {
  localStorage.setItem(CAR_STORE_KEY, JSON.stringify(list));
}

function getCar(id) {
  return getCars().find((c) => String(c.id) === String(id));
}

function upsertCar(car) {
  const list = getCars();
  const idx = list.findIndex((c) => String(c.id) === String(car.id));
  if (idx >= 0) list[idx] = car; else list.push(car);
  saveCars(list);
  return car;
}

function deleteCarById(id) {
  saveCars(getCars().filter((c) => String(c.id) !== String(id)));
}

function nextCarId() {
  const list = getCars();
  return list.length ? Math.max(...list.map((c) => Number(c.id) || 0)) + 1 : 1;
}

function getLanguages() {
  const raw = localStorage.getItem(LANG_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through */ }
  }
  const defaults = ['Hindi', 'Telugu', 'Tamil', 'Kannada', 'English'];
  localStorage.setItem(LANG_KEY, JSON.stringify(defaults));
  return defaults;
}

function addLanguage(name) {
  const langs = getLanguages();
  const clean = (name || '').trim();
  if (!clean || langs.some((l) => l.toLowerCase() === clean.toLowerCase())) return langs;
  langs.push(clean);
  localStorage.setItem(LANG_KEY, JSON.stringify(langs));
  return langs;
}

const HERO_KEY = 'reviewhub_hero_images_v1';

// One custom hero image per vertical (e.g. "movies"), base64 data URL.
// Falls back to null (caller uses the shipped default asset) if never set.
function getHeroImage(vertical) {
  const raw = localStorage.getItem(HERO_KEY);
  if (!raw) return null;
  try {
    const map = JSON.parse(raw);
    return map[vertical] || null;
  } catch (e) {
    return null;
  }
}

function setHeroImage(vertical, dataUrl) {
  const raw = localStorage.getItem(HERO_KEY);
  let map = {};
  if (raw) {
    try { map = JSON.parse(raw); } catch (e) { map = {}; }
  }
  map[vertical] = dataUrl;
  localStorage.setItem(HERO_KEY, JSON.stringify(map));
}

function clearHeroImage(vertical) {
  const raw = localStorage.getItem(HERO_KEY);
  if (!raw) return;
  try {
    const map = JSON.parse(raw);
    delete map[vertical];
    localStorage.setItem(HERO_KEY, JSON.stringify(map));
  } catch (e) { /* ignore */ }
}

function isLoggedIn() {
  return sessionStorage.getItem(AUTH_KEY) === '1';
}
function login() { sessionStorage.setItem(AUTH_KEY, '1'); }
function logout() { sessionStorage.removeItem(AUTH_KEY); }
function requireLogin() {
  if (!isLoggedIn()) location.href = 'admin-login.html';
}
