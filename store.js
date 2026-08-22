// ReviewHub prototype persistence layer.
// NOTE: this is a static, file:// prototype — there is no real server, database,
// or auth. "Publishing" writes to the browser's localStorage, which is why the
// admin pages and the public site (index.html / movie.html) must be opened from
// the same browser profile to see each other's data. Depends on data.js.

const STORE_KEY = 'reviewhub_movies_v1';
const LANG_KEY = 'reviewhub_languages_v1';
const AUTH_KEY = 'reviewhub_admin_session';

function uid() {
  return 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function seedStore() {
  const seeded = MOVIES.map((m) => {
    const videos = generateVideosForMovie(m).map((v, i) => ({
      id: uid(),
      url: `https://www.youtube.com/watch?v=seed-${m.id}-${i}`,
      ...v,
    }));
    const counts = countVerdicts(videos);
    return {
      ...m,
      posterImage: null,
      status: 'published',
      summaryText: buildSummaryText(m, counts),
      videos,
    };
  });
  localStorage.setItem(STORE_KEY, JSON.stringify(seeded));
  return seeded;
}

function getMovies() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return seedStore();
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error('bad store');
    return parsed;
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
