// OTT Releases This Week — real, dated, verified releases across Indian streaming platforms,
// newest week first. Purely informational: platform, language, genre, and a factual synopsis —
// never a review, score, or recommendation on its own (if a title also has a full ReviewHub
// entry in ../data.js, link to it via existingMovieId to surface our real score/verdict).
// SCHEMA:
//   weekLabel: "DD Mon YYYY" — the Friday release date this entry covers
//   entries: array of { title, platform, language, genre, synopsis, existingMovieId? }
//     platform: one of "Netflix" | "Prime Video" | "ZEE5" | "SonyLIV" | "Sun NXT" | "JioHotstar" |
//               "Lionsgate Play" | "Aha" | "JioCinema" (extend as needed — always a real, named
//               platform, never invented)
//     existingMovieId: optional — the numeric id of this title in ../data.js, if we've already
//                      reviewed it (renders a "Read our review" link with its real score/verdict)
const OTT_RELEASES = [
  {
    weekLabel: "02 Oct 2026",
    entries: [
      { title: "Sardar 2", platform: "Prime Video", language: "Tamil (dubbed Telugu, Kannada, Malayalam, Hindi)", genre: "Spy action thriller", synopsis: "Master spy Sardar is forced out of the shadows once more when a new global threat emerges, facing ruthless enemies in a mission where a single wrong move could be fatal.", existingMovieId: 29 },
      { title: "Romanchakam", platform: "Netflix", language: "Telugu (dubbed Tamil, Kannada, Malayalam, Hindi)", genre: "Romantic comedy drama", synopsis: "A young entrepreneur who launches a dating startup falls in love with a woman, and their relationship quickly spirals into chaos involving romance, humor, emotion and suspense.", existingMovieId: 25 },
      { title: "Bethlehem Kudumba Unit", platform: "JioHotstar", language: "Malayalam (dubbed Tamil, Telugu, Hindi, Kannada)", genre: "Romantic comedy drama", synopsis: "Ashley's homecoming from abroad takes an emotional turn when a wedding next door stirs memories of her first love, Justin - a heartwarming rom-com about first love, second chances, and the kind of love worth waiting for.", existingMovieId: 11 },
      { title: "#Love", platform: "Netflix", language: "Tamil (dubbed Telugu, Hindi, Malayalam, Kannada)", genre: "Romantic comedy series", synopsis: "A Tamil dating-app dramedy series starring Aishwarya Lekshmi and Arjun Das as rival founders of competing dating apps, 'Found' and 'Find My Bae', who've built businesses matching everyone else except themselves." }
    ]
  },
  {
    weekLabel: "25 Sep 2026",
    entries: [
      { title: "Agadha", platform: "ZEE5", language: "Telugu", genre: "Supernatural thriller", synopsis: "A spiritually gifted woman searches for answers after a disturbing death leads her toward a forbidden forest cave and a mysterious dark entity." },
      { title: "Hi", platform: "ZEE5", language: "Tamil", genre: "Romantic drama", synopsis: "A Nayanthara and Kavin-starrer romantic drama, premiering on Tamil ZEE5.", existingMovieId: 20 },
      { title: "Bhootam Bhayyam", platform: "ZEE5", language: "Marathi", genre: "Horror comedy", synopsis: "A quirky supernatural adventure built around a century-old curse, arriving on ZEE5 two months after its theatrical release." },
      { title: "Habeebi", platform: "SonyLIV", language: "Tamil (dubbed Telugu, Kannada, Malayalam, Hindi)", genre: "Period romance drama", synopsis: "Set in 1980s southern Tamil Nadu, a young Muslim man falls for his cousin, navigating family opposition and social tradition." },
      { title: "Angikaaram", platform: "Sun NXT", language: "Tamil & Telugu", genre: "Sports courtroom drama", synopsis: "A 200-metre runner fights in court after losing a Commonwealth Games opportunity." },
      { title: "Mango Pachcha", platform: "JioHotstar", language: "Kannada (dubbed Tamil, Telugu, Hindi, Malayalam)", genre: "Crime action drama", synopsis: "A CD shop owner uncovers family secrets, including an unknown half-brother, after his father's death." },
      { title: "Don't Be Shy", platform: "Prime Video", language: "Hindi", genre: "Coming-of-age romance", synopsis: "A young woman's carefully planned future is disrupted by heartbreak." },
      { title: "Photographer", platform: "Prime Video", language: "Tamil", genre: "Drama", synopsis: "A regional drama release — limited public synopsis available ahead of streaming." },
      { title: "Ramba Oorvasi Menaka", platform: "Prime Video", language: "Telugu", genre: "Comedy drama", synopsis: "A comedy-drama making the move from theatres to streaming.", existingMovieId: 26 },
      { title: "UNABOMBER", platform: "Netflix", language: "English", genre: "Crime biographical thriller", synopsis: "Explores Ted Kaczynski's bombing campaign and the FBI investigation that ended it." },
      { title: "The Godfather Coda: The Death of Michael Corleone", platform: "Netflix", language: "English", genre: "Crime drama", synopsis: "Francis Ford Coppola's own re-edited final cut of The Godfather Part III." },
      { title: "This Tempting Madness", platform: "Lionsgate Play", language: "English", genre: "Thriller drama", synopsis: "An international thriller release, available with several Indian-language subtitle/dub options." }
    ]
  }
];
