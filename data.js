// ReviewHub prototype data — fictional demo content only.

const VERDICTS = {
  must:    { label: 'Must Watch',      color: '#2f8f5b' },
  good:    { label: 'Good Watch',      color: '#6a9e2f' },
  onetime: { label: 'One-Time Watch',  color: '#c98a1c' },
  wait:    { label: 'Wait for OTT',    color: '#3b6ea5' },
  skip:    { label: 'Skip',            color: '#b3402f' },
};
const VERDICT_ORDER = ['must', 'good', 'onetime', 'wait', 'skip'];

const MOVIES = [
  { id: 1, title: 'Silver Monsoon', industry: 'Bollywood', language: 'Hindi', releaseDate: '15 Aug 2026', score: 8.4, reviewCount: 18, verdictKey: 'must', posterGrad: 'linear-gradient(135deg,#6b7280,#374151)',
    synopsis: 'A family drama set across three monsoons in a Mumbai chawl, following a father and daughter rebuilding trust after a decade apart.',
    pros: ['Lead performances carry the emotional weight', 'Restrained, unhurried direction', 'Sound design in the monsoon scenes is exceptional'],
    cons: ['Runtime sags in the second act', 'Subplot with the neighbour feels unresolved', 'Background score is occasionally intrusive'] },
  { id: 2, title: 'Court No. 4', industry: 'Tollywood', language: 'Telugu', releaseDate: '14 Aug 2026', score: 7.6, reviewCount: 14, verdictKey: 'good', posterGrad: 'linear-gradient(135deg,#92400e,#451a03)',
    synopsis: 'A courtroom procedural following a young public prosecutor taking on a politically connected land-grab case.',
    pros: ['Sharp, well-researched courtroom writing', 'Strong supporting cast', 'Ending avoids easy resolution'],
    cons: ['Pacing drags before the interval', 'A few legal shortcuts strain credibility'] },
  { id: 3, title: 'Veyilodu', industry: 'Kollywood', language: 'Tamil', releaseDate: '14 Aug 2026', score: 6.2, reviewCount: 11, verdictKey: 'onetime', posterGrad: 'linear-gradient(135deg,#b45309,#78350f)',
    synopsis: 'A small-town heist comedy about three friends trying to fund a wedding in 48 hours.',
    pros: ['Genuinely funny first half', 'Fresh faces in the lead cast'],
    cons: ['Loses steam after the interval', 'Comedy leans on repeated gags', 'Predictable climax'] },
  { id: 4, title: 'Kaggada Beedi', industry: 'Sandalwood', language: 'Kannada', releaseDate: '13 Aug 2026', score: 5.1, reviewCount: 9, verdictKey: 'wait', posterGrad: 'linear-gradient(135deg,#1e3a5f,#0f1f33)',
    synopsis: 'A noir-tinted thriller about a beat cop investigating disappearances in a Bengaluru back-alley market.',
    pros: ['Strong atmosphere and cinematography', 'Interesting premise'],
    cons: ['Plot logic falls apart in the final act', 'Underwritten side characters', 'Uneven pacing throughout'] },
  { id: 5, title: 'The Last Ledger', industry: 'Indie', language: 'English', releaseDate: '12 Aug 2026', score: 4.0, reviewCount: 7, verdictKey: 'skip', posterGrad: 'linear-gradient(135deg,#57534e,#292524)',
    synopsis: 'A startup-founder drama about a fintech collapse, told through depositions and flashbacks.',
    pros: ['Ambitious non-linear structure'],
    cons: ['Dialogue feels like a first draft', 'Central performance is flat', 'Twist is telegraphed early'] },
  { id: 6, title: 'Rangeen Raaste', industry: 'Bollywood', language: 'Hindi', releaseDate: '08 Aug 2026', score: 7.9, reviewCount: 22, verdictKey: 'good', posterGrad: 'linear-gradient(135deg,#9d174d,#500724)',
    synopsis: 'A road-trip musical following three sisters driving from Jaipur to Goa for a family wedding.',
    pros: ['Soundtrack is the best of the year so far', 'Warm, believable sibling chemistry', 'Gorgeous location work'],
    cons: ['A few musical numbers overstay their welcome', 'Side plot with the fiance is thin'] },
  { id: 7, title: 'Nadhi Kadhalan', industry: 'Kollywood', language: 'Tamil', releaseDate: '07 Aug 2026', score: 8.8, reviewCount: 8, verdictKey: 'must', posterGrad: 'linear-gradient(135deg,#155e63,#0b3335)',
    synopsis: 'A quiet, riverside coming-of-age story about a fisherman’s son choosing between tradition and a music scholarship.',
    pros: ['Career-best lead performance', 'Cinematography frames the river beautifully', 'Score by a debut composer is remarkable'],
    cons: ['Very slow first thirty minutes', 'Some viewers may find the ending too quiet'] },
  { id: 8, title: 'Chandamama Nights', industry: 'Tollywood', language: 'Telugu', releaseDate: '01 Aug 2026', score: 6.8, reviewCount: 13, verdictKey: 'onetime', posterGrad: 'linear-gradient(135deg,#4c1d95,#2e1065)',
    synopsis: 'An anthology of three loosely connected ghost stories set in a single apartment building.',
    pros: ['Third segment is genuinely unsettling', 'Strong production design'],
    cons: ['First segment is forgettable', 'Uneven tone between segments', 'Framing device feels tacked on'] },
  { id: 9, title: 'Belaku', industry: 'Sandalwood', language: 'Kannada', releaseDate: '31 Jul 2026', score: 8.1, reviewCount: 10, verdictKey: 'must', posterGrad: 'linear-gradient(135deg,#a16207,#713f12)',
    synopsis: 'A biopic of a rural schoolteacher who built a library from discarded books over three decades.',
    pros: ['Deeply humane, unsentimental writing', 'Lead performance avoids biopic cliches', 'Ends on an earned, quiet note'],
    cons: ['Some archival-style scenes feel dated'] },
];

const REVIEW_CHANNELS = [
  { name: 'Kadhal Katta Talks',   color: '#155e63' },
  { name: 'Frame by Frame',       color: '#57534e' },
  { name: 'Cinema Chai',          color: '#92400e' },
  { name: 'Kollywood Katta',      color: '#9d174d' },
  { name: 'Review Adda',          color: '#4c1d95' },
  { name: 'PlayBack Podcast',     color: '#1e3a5f' },
  { name: 'Movie Raja',           color: '#a16207' },
  { name: 'FDFS Vibes',           color: '#b3402f' },
  { name: 'Silver Screen Diaries',color: '#3b6ea5' },
  { name: 'Talkies Talk',         color: '#6a9e2f' },
];

const CROSSOVER_LANGS = { Hindi: 'English', Telugu: 'Hindi', Tamil: 'Hindi', Kannada: 'Telugu', English: 'Hindi' };

const QUOTES = {
  must: [
    'One of the best films this year, no contest.',
    "Career-best work all around — don't skip this one.",
    'Everything clicks: writing, performances, craft.',
  ],
  good: [
    'Solidly entertaining, worth a theatre watch.',
    'A few rough edges, but the good outweighs the bad.',
    'Strong enough to recommend without hesitation.',
  ],
  onetime: [
    'Fun once, but unlikely to rewatch.',
    'Good for a lazy weekend watch, nothing more.',
    "Decent enough, though it won't stay with you.",
  ],
  wait: [
    'Save your ticket money, this works fine on a smaller screen.',
    'Nothing here demands the big screen.',
    'Watch it eventually, just not urgently.',
  ],
  skip: [
    'Hard to recommend, even with lowered expectations.',
    "Doesn't come together — skip it.",
    'One of the weaker releases this month.',
  ],
};

const RATING_BASE = { must: 9, good: 7.5, onetime: 6, wait: 4.5, skip: 3 };

function getMovieById(id) {
  return MOVIES.find((m) => m.id === Number(id));
}

function generateVideosForMovie(movie) {
  const idx = VERDICT_ORDER.indexOf(movie.verdictKey);
  const neighborLow = VERDICT_ORDER[Math.max(0, idx - 1)];
  const neighborHigh = VERDICT_ORDER[Math.min(VERDICT_ORDER.length - 1, idx + 1)];
  const pattern = [movie.verdictKey, movie.verdictKey, movie.verdictKey, neighborLow, neighborHigh];

  const videos = [];
  for (let i = 0; i < movie.reviewCount; i++) {
    const channel = REVIEW_CHANNELS[i % REVIEW_CHANNELS.length];
    const language = (i % 4 === 0 && movie.language !== 'English') ? CROSSOVER_LANGS[movie.language] : movie.language;
    const verdictKey = pattern[i % pattern.length];
    const jitter = (((i * 13) % 5) - 2) / 10;
    const rating = Math.max(1, Math.min(10, RATING_BASE[verdictKey] + jitter)).toFixed(1) + '/10';
    const quote = QUOTES[verdictKey][i % 3];
    videos.push({
      channel: channel.name,
      avatarColor: channel.color,
      language,
      verdictKey,
      rating,
      quote,
    });
  }
  return videos;
}

function buildSummaryText(movie, counts) {
  const v = VERDICTS[movie.verdictKey] || VERDICTS.onetime;
  const total = counts && counts.total ? counts.total : 0;
  const positiveRatio = total ? counts.positive / total : 0;
  const lead = positiveRatio > 0.6 ? 'Reviewers largely agree that' : 'Reviewers are split on whether';
  const outcome = v.label === 'Skip' ? 'falls short of expectations' : 'delivers on its premise';
  const pros = (movie.pros || []).filter(Boolean);
  const cons = (movie.cons || []).filter(Boolean);
  let text = `${lead} ${movie.title || 'this film'} ${outcome}.`;
  if (pros[0]) {
    text += ` ${pros[0]} stands out across multiple reviews`;
    if (pros[1]) text += `, alongside ${pros[1].charAt(0).toLowerCase() + pros[1].slice(1)}`;
    text += '.';
  }
  if (cons[0]) {
    text += ` The main reservation is that ${cons[0].charAt(0).toLowerCase() + cons[0].slice(1)}`;
    if (cons[1]) text += `, and ${cons[1].charAt(0).toLowerCase() + cons[1].slice(1)}`;
    text += '.';
  }
  return text;
}

// A video "counts" once it has an actual verdict entered — either seeded
// demo data, or an admin has watched it and filled in the form.
function countVerdicts(videos) {
  const reviewed = (videos || []).filter((v) => v.verdictKey);
  const positive = reviewed.filter((v) => v.verdictKey === 'must' || v.verdictKey === 'good').length;
  const mixed = reviewed.filter((v) => v.verdictKey === 'onetime').length;
  const negative = reviewed.filter((v) => v.verdictKey === 'wait' || v.verdictKey === 'skip').length;
  return { positive, mixed, negative, total: reviewed.length };
}

function dominantVerdict(counts) {
  if (!counts.total) return 'onetime';
  if (counts.positive >= counts.total * 0.7) return 'must';
  if (counts.positive > counts.mixed && counts.positive > counts.negative) return 'good';
  if (counts.negative > counts.positive && counts.negative > counts.mixed) return counts.negative > counts.total * 0.5 ? 'skip' : 'wait';
  return 'onetime';
}
