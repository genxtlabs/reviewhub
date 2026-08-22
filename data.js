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
  { id: 10, title: "Irumudi", industry: "Tollywood", language: "Telugu", releaseDate: "21 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#6b7280,#374151)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/38511", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/38511", trailerId: "CSXhb2zhfLc",
    synopsis: "Irumudi follows an alcohol-addicted auto driver and small-business owner with a violent past who lives peacefully with his young daughter. At her request, he undertakes an Ayyappa Deeksha pilgrimage, setting him on an intense journey of personal redemption, trust, and protecting his community.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=8S5ndDhgt5E", channel: "Adi Reddy", avatarColor: "#155e63", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 425075, subscriberCount: 940000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=yRzUCo6dedA", channel: "Poolachokka", avatarColor: "#57534e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 363415, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=h0ShCsVbAQ0", channel: "SRR TV ", avatarColor: "#92400e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 295607, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Mz4oa6FRwGM", channel: "Review Talks", avatarColor: "#9d174d", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 295525, subscriberCount: 111000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=FaXPzsZb7DA", channel: "SRR TV ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 264225, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=dUp-6G2Q-Ak", channel: "Barbell Pitch Meetings", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 233354, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=b3LFoKES0O0", channel: "Mahidhar Vibes", avatarColor: "#a16207", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 205053, subscriberCount: 1000000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=eERpieYsJBE", channel: "Movie Manishi", avatarColor: "#b3402f", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 192048, subscriberCount: 10100, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=kjyPLnr2i9k", channel: "KARTHIKS FILM FEED", avatarColor: "#155e63", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 172196, subscriberCount: 67000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=AtLgrMSGjww", channel: "Cinemapicha", avatarColor: "#57534e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 140801, subscriberCount: 170000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=i-NfQT7gRnI", channel: "Thyview", avatarColor: "#92400e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 96259, subscriberCount: 1060000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=8V4mghBMDCw", channel: "iDream Media", avatarColor: "#9d174d", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 55362, subscriberCount: 5840000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=QLe1J2ehTKY", channel: "NTV Entertainment ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 8502, subscriberCount: 2540000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=chmCSUv9tQ4", channel: "YT18", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 6667, subscriberCount: 1710000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=UlZHyz8XK7Q", channel: "Mana Stars", avatarColor: "#a16207", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 2977, subscriberCount: 3720000, matchedBy: ["subscribers"] },
    ] },
  { id: 11, title: "DC", industry: "Kollywood", language: "Tamil", releaseDate: "07 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#155e63,#0b3335)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/639885", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/639885", trailerId: "2kntxizQIFI",
    synopsis: "Outcast Devadas and his companions fight to protect an innocent family destroyed by police brutality while evading a ruthless cop, discovering justice, redemption, and unlikely bonds along the way.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=hakSWZ7eL2w", channel: "Newston Cinema", avatarColor: "#155e63", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 1251871, subscriberCount: 206000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=B2tV8no0FJ0", channel: "YOGI BOLTA HAI", avatarColor: "#57534e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 801866, subscriberCount: 1590000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=OzWTtp3O3vU", channel: "Tamil Talkies", avatarColor: "#92400e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 723907, subscriberCount: 1790000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=vE_Aapoi1p0", channel: "Aswanth Kok", avatarColor: "#9d174d", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 595028, subscriberCount: 509000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CIqalCiVHPU", channel: "Empty Hand", avatarColor: "#4c1d95", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 477974, subscriberCount: 2140000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=5TU3vj46-ts", channel: "Filmi Indian", avatarColor: "#1e3a5f", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 463259, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=96xNsFgpQ0c", channel: "Cinemads", avatarColor: "#a16207", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 400863, subscriberCount: 929000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=gi1RcjiXwE8", channel: "Poolachokka", avatarColor: "#b3402f", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 392452, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=k1fxHsRW_Gk", channel: "Thi Cinemas", avatarColor: "#155e63", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 338935, subscriberCount: 874000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=YDmQnPKp8Rg", channel: "BrotherHud", avatarColor: "#57534e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 312391, subscriberCount: 802000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=vBEcsVm6564", channel: "Bingoo Box", avatarColor: "#92400e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 95991, subscriberCount: 2000000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=b9_W_CAxQu8", channel: "Telugu Filmnagar", avatarColor: "#9d174d", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 75916, subscriberCount: 16800000, matchedBy: ["subscribers"] },
    ] },
  { id: 12, title: "Hanuman Ansh", industry: "Bollywood", language: "Hindi", releaseDate: "07 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#9d174d,#500724)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/639884", bannerUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanuman-ansh-et00507738-1785940712.jpg", trailerId: "PXUuh3VJvWY",
    synopsis: "Hanuman Ansh is a Hindi-language movie starring Shobhinaw Satyaa and Vihaan Shedge in leading roles. It is a spiritual drama movie, written & directed by Vishal Chaturvedi",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=UNQfDL7rn_8", channel: "Screenwala", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 219140, subscriberCount: 1310000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=1iwfp6yrJwo", channel: "सत्य सनातन Satya Sanatan", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 117934, subscriberCount: 2150000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=IU9DDjJWfdM", channel: "Hanuman Ansh", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 65236, subscriberCount: 4400, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=tFPrWQ9crfM", channel: "Suraj Kumar", avatarColor: "#9d174d", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 52716, subscriberCount: 1080000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=x5ghmtwyd6o", channel: "Reviewwala", avatarColor: "#4c1d95", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 30337, subscriberCount: 13100, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=NvKC8Be4CII", channel: "सत्य सनातन Satya Sanatan", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 27684, subscriberCount: 2150000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=_uN0H_0A25c", channel: "Movie Mandal by Sanjay ", avatarColor: "#a16207", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 26635, subscriberCount: 1420, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=7uTVD-N1qRc", channel: "MOHIT NARWARIYA ", avatarColor: "#b3402f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 26218, subscriberCount: 136, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=YbASvMPvN1M", channel: "Buzzzooka Showtimes", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 21064, subscriberCount: 68200, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Dp6bTvT_p5c", channel: "City Lights Hindi", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 7440, subscriberCount: 27800, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=JDtxN5-IrsA", channel: "All in One by Digvijay Bonawate", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 4140, subscriberCount: 89900, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=miSJ5sbLZ2k", channel: "Zee News", avatarColor: "#9d174d", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 1123, subscriberCount: 42400000, matchedBy: ["subscribers"] },
    ] },
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
