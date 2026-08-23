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
  { id: 10, title: "Irumudi", industry: "Tollywood", language: "Telugu", releaseDate: "21 Aug 2026", score: 7.6, reviewCount: 15, verdictKey: 'must', posterGrad: "linear-gradient(135deg,#6b7280,#374151)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/38511", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/38511", trailerId: "CSXhb2zhfLc",
    synopsis: "Irumudi follows an alcohol-addicted auto driver and small-business owner with a violent past who lives peacefully with his young daughter. At her request, he undertakes an Ayyappa Deeksha pilgrimage, setting him on an intense journey of personal redemption, trust, and protecting his community.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=8S5ndDhgt5E", channel: "Adi Reddy", avatarColor: "#155e63", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "Ravi Teja delivers a genuine hit, with acting and locations that impress and suspense that holds from start to finish — even the Ayyappa songs get the theatre dancing. Bottom line: a solid, feel-good family watch, just short of an all-time blockbuster.", viewCount: 425075, subscriberCount: 940000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=yRzUCo6dedA", channel: "Poolachokka", avatarColor: "#57534e", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "Ravi Teja's restrained father act, real-location shooting, and clean, jerk-free camerawork stand out in this village-set mystery about an alcohol-addicted father and his daughter. Bottom line: a visually confident, well-shot drama worth your time.", viewCount: 363415, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=h0ShCsVbAQ0", channel: "SRR TV ", avatarColor: "#92400e", language: "Telugu", verdictKey: 'must', rating: "9/10", quote: "A genuine blockbuster with fresh direction, strong production value, and a jarring, unconventional interval cut that's mind-blowing. The second half turns into pure mass energy for Ravi Teja's fans. Bottom line: mass-hero fans should not skip this one.", viewCount: 295607, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Mz4oa6FRwGM", channel: "Review Talks", avatarColor: "#9d174d", language: "Telugu", verdictKey: 'good', rating: "7/10", quote: "No item song needed — the devotional 'Mallipoola Pallaki' track carries that weight instead, and Ravi Teja gets a genuine career-bracket comeback here, tipped to cross 350 crores. Bottom line: a strong, message-driven hit for Ravi Teja.", viewCount: 295525, subscriberCount: 111000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=FaXPzsZb7DA", channel: "SRR TV ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: 'must', rating: "9/10", quote: "Goosebump-worthy fights, three mind-blowing songs, and one of Ravi Teja's career-best performances since Krack — the second half never lets up. Bottom line: a proper mass-masala festival for Ravi Teja fans.", viewCount: 264225, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=dUp-6G2Q-Ak", channel: "Barbell Pitch Meetings", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: 'wait', rating: "5/10", quote: "A matured Ravi Teja performance, but the thriller structure leans too closely on a Vijay Sethupathi film and over-stretches its twist. A subplot involving a schoolgirl is handled with more intensity than needed — keep young kids away. Bottom line: a sincere attempt, not a fully successful one.", viewCount: 233354, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=b3LFoKES0O0", channel: "Mahidhar Vibes", avatarColor: "#a16207", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "A message-driven, performance-first film rather than mass spectacle, with genuinely unexpected twists and excellent Ayyappa-devotion music. Pacing dips a little mid-film and the ending leans on convenient writing. Bottom line: a good family film — the reviewer's own score, 4/5.", viewCount: 205053, subscriberCount: 1000000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=eERpieYsJBE", channel: "Movie Manishi", avatarColor: "#b3402f", language: "Telugu", verdictKey: 'onetime', rating: "6/10", quote: "Ravi Teja's transformation and the father-daughter bond genuinely work, but the villain is obvious the moment he appears, and the plot leans on one emotional beat with little else. Bottom line: an above-average, if overly familiar, watch.", viewCount: 192048, subscriberCount: 10100, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=kjyPLnr2i9k", channel: "KARTHIKS FILM FEED", avatarColor: "#155e63", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "A genuine hit — mind-blowing pre-interval and interval twists, a moving second half, and next-level screen presence from Ravi Teja in the action scenes. Bottom line: a strong, confident entry worth watching on the big screen.", viewCount: 172196, subscriberCount: 67000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=AtLgrMSGjww", channel: "Cinemapicha", avatarColor: "#57534e", language: "Telugu", verdictKey: 'good', rating: "7/10", quote: "Ravi Teja's most restrained, stable performance in years, with genuinely heart-touching father-daughter scenes and a standout Sai Kumar. The tone turns unusually heavy and disturbing in the second half. Bottom line: worth watching, tonal reservations aside.", viewCount: 140801, subscriberCount: 170000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=i-NfQT7gRnI", channel: "Thyview", avatarColor: "#92400e", language: "Telugu", verdictKey: 'onetime', rating: "6.5/10", quote: "A genuinely tricky watch — the devotional family drama is handled beautifully, but the thriller twist takes too long to land, and the last 40 minutes push its characters' suffering further than feels earned. Bottom line: a lot to like, a lot that overreaches.", viewCount: 96259, subscriberCount: 1060000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=8V4mghBMDCw", channel: "iDream Media", avatarColor: "#9d174d", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "Real word-of-mouth craze, genuine on-location shooting in Seeleru, and a clever blend of devotion with a father-daughter thriller plot. First half runs a little familiar before a tense second half. Bottom line: feels like Ravi Teja's real comeback hit.", viewCount: 55362, subscriberCount: 5840000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=QLe1J2ehTKY", channel: "NTV Entertainment ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: 'must', rating: "8.5/10", quote: "Disciplined writing keeps devotion, family drama, and thriller moving together without losing grip, anchored by a genuinely powerful Sai Kumar-Ravi Teja conversation about raising daughters. A couple of convenient villain-track beats don't derail it. Bottom line: a genuine, earned hit.", viewCount: 8502, subscriberCount: 2540000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=chmCSUv9tQ4", channel: "YT18", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "Played more like a crowd celebration than a critique — real audience emotion around the father-daughter bond and the 'Mallipoola Pallaki' song. The film's message about protecting daughters clearly landed with viewers. Bottom line: a blockbuster-level family watch.", viewCount: 6667, subscriberCount: 1710000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=UlZHyz8XK7Q", channel: "Mana Stars", avatarColor: "#a16207", language: "Telugu", verdictKey: 'good', rating: "7.5/10", quote: "An uncharacteristically toned-down Ravi Teja works better here than his usual high-octane roles, backed by a few effective twists near the climax. Could have leaned deeper into its emotional core. Bottom line: a good, socially relevant family film.", viewCount: 2977, subscriberCount: 3720000, matchedBy: ["subscribers"] },
    ] },
  { id: 11, title: "DC", industry: "Kollywood", language: "Tamil", releaseDate: "07 Aug 2026", score: 6.8, reviewCount: 12, verdictKey: 'good', posterGrad: "linear-gradient(135deg,#155e63,#0b3335)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/639885", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/639885", trailerId: "2kntxizQIFI",
    synopsis: "Outcast Devadas and his companions fight to protect an innocent family destroyed by police brutality while evading a ruthless cop, discovering justice, redemption, and unlikely bonds along the way.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=hakSWZ7eL2w", channel: "Newston Cinema", avatarColor: "#155e63", language: "Tamil", verdictKey: 'wait', rating: "4/10", quote: "Feels stitched together from Nayakan and old Devadas beats without a story of its own, and it's very raw and disappointing. Bottom line: the director should stick to directing.", viewCount: 1251871, subscriberCount: 206000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=B2tV8no0FJ0", channel: "YOGI BOLTA HAI", avatarColor: "#57534e", language: "Tamil", verdictKey: 'good', rating: "7/10", quote: "Lokesh Kanagaraj is a genuinely powerful screen presence as an actor, backed by viral music and Vamika's performance, but the story is a thin, generic revenge-and-gangster plot. Bottom line: worth it for Lokesh fans, the reviewer's own score 3.5/5.", viewCount: 801866, subscriberCount: 1590000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=OzWTtp3O3vU", channel: "Tamil Talkies", avatarColor: "#92400e", language: "Tamil", verdictKey: 'skip', rating: "3/10", quote: "Leans entirely on genre-checklist violence with no real suspense, a muddled villain reveal, and oddly mismatched Carnatic music over the gore. Bottom line: a satirical pass — style over any real substance.", viewCount: 723907, subscriberCount: 1790000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=vE_Aapoi1p0", channel: "Aswanth Kok", avatarColor: "#9d174d", language: "Tamil", verdictKey: 'must', rating: "9/10", quote: "One of the best theatre experiences this year — Anirudh's score and the emotional opening are genuinely out of this world, and Lokesh's screen presence is a revelation. Bottom line: an instant, must-watch peak.", viewCount: 595028, subscriberCount: 509000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CIqalCiVHPU", channel: "Empty Hand", avatarColor: "#4c1d95", language: "Tamil", verdictKey: 'good', rating: "7/10", quote: "Anirudh's music and the fight choreography carry the film; Lokesh's acting is flat and monotone but oddly fits the silent character. A few logic gaps hold it back. Bottom line: a good, R-rated watch, not for kids.", viewCount: 477974, subscriberCount: 2140000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=5TU3vj46-ts", channel: "Filmi Indian", avatarColor: "#1e3a5f", language: "Tamil", verdictKey: 'onetime', rating: "6/10", quote: "Anirudh's music is a class of its own, and Lokesh brings his usual action-crime-emotion mix as an actor, though awareness in the North seemed thin. Bottom line: a decent watch, mainly for the music.", viewCount: 463259, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=96xNsFgpQ0c", channel: "Cinemads", avatarColor: "#a16207", language: "Tamil", verdictKey: 'must', rating: "8/10", quote: "A purely raw, rustic, violent gangster film with a genuinely unique story — the interval left the reviewer stunned, and Lokesh's screen presence is in a different league. Bottom line: don't miss this one.", viewCount: 400863, subscriberCount: 929000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=gi1RcjiXwE8", channel: "Poolachokka", avatarColor: "#b3402f", language: "Tamil", verdictKey: 'good', rating: "7/10", quote: "Genuinely gave the reviewer goosebumps, calling it a meaningful mass movie despite a first half that tests your patience. Bottom line: a solid watch worth catching in theatres.", viewCount: 392452, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=k1fxHsRW_Gk", channel: "Thi Cinemas", avatarColor: "#155e63", language: "Tamil", verdictKey: 'must', rating: "8/10", quote: "Anirudh's music and the cinematography elevate an admittedly familiar gangster plot into something gripping, with a standout interval and climax and a strong Vamika performance. Bottom line: a must-watch in theatres, just not for family audiences.", viewCount: 338935, subscriberCount: 874000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=YDmQnPKp8Rg", channel: "BrotherHud", avatarColor: "#57534e", language: "Tamil", verdictKey: 'onetime', rating: "6/10", quote: "Frames DC mainly around its already-viral title music and Lokesh's first outing as a lead against a crowded release week. Bottom line: worth a watch for the buzz alone.", viewCount: 312391, subscriberCount: 802000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=vBEcsVm6564", channel: "Bingoo Box", avatarColor: "#92400e", language: "Tamil", verdictKey: 'good', rating: "7/10", quote: "Anirudh's background score drew claps in the theatre and Lokesh's debut acting works, though the director's usual pattern of a strong start with a fading finish shows again. Bottom line: a good, violent watch — not for family.", viewCount: 95991, subscriberCount: 2000000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=b9_W_CAxQu8", channel: "Telugu Filmnagar", avatarColor: "#9d174d", language: "Tamil", verdictKey: 'must', rating: "9/10", quote: "A sure-hit revenge-and-love story elevated by Anirudh's background score and a strong Vamika performance, with the reviewer predicting it clears 200 crores easily. Bottom line: a confident, full 5-star recommendation.", viewCount: 75916, subscriberCount: 16800000, matchedBy: ["subscribers"] },
    ] },
  { id: 12, title: "Hanuman Ansh", industry: "Bollywood", language: "Hindi", releaseDate: "07 Aug 2026", score: 7.4, reviewCount: 12, verdictKey: 'must', posterGrad: "linear-gradient(135deg,#9d174d,#500724)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/639884", bannerUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanuman-ansh-et00507738-1785940712.jpg", trailerId: "PXUuh3VJvWY",
    synopsis: "Hanuman Ansh is a Hindi-language movie starring Shobhinaw Satyaa and Vihaan Shedge in leading roles. It is a spiritual drama movie, written & directed by Vishal Chaturvedi",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=UNQfDL7rn_8", channel: "Screenwala", avatarColor: "#155e63", language: "Hindi", verdictKey: 'good', rating: "8/10", quote: "Theatres are running full despite zero promotion, and Shobhinav Satya's performance as Baba is flawless — full marks. The music, especially the climax song, genuinely stays with you. Bottom line: a quiet word-of-mouth hit worth catching.", viewCount: 219140, subscriberCount: 1310000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=1iwfp6yrJwo", channel: "सत्य सनातन Satya Sanatan", avatarColor: "#57534e", language: "Hindi", verdictKey: 'good', rating: "8/10", quote: "Deliberately avoids VFX spectacle for a simple, grounded portrayal that still holds your attention scene to scene, especially for viewers on a spiritual path. Bottom line: a sincere, unhurried biopic worth watching with intent.", viewCount: 117934, subscriberCount: 2150000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=IU9DDjJWfdM", channel: "Hanuman Ansh", avatarColor: "#92400e", language: "Hindi", verdictKey: 'must', rating: "9/10", quote: "The Hanuman Chalisa scene alone is goosebump-worthy, and the background music makes you feel part of that era. Bottom line: a simple, straightforward film that gives far more than expected.", viewCount: 65236, subscriberCount: 4400, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=tFPrWQ9crfM", channel: "Suraj Kumar", avatarColor: "#9d174d", language: "Hindi", verdictKey: 'must', rating: "9/10", quote: "Reminds the reviewer of the beloved Gujarati hit 'Lalo' — the devotion never feels inserted for effect, and a scene about a TB patient's plea to Baba genuinely lands. Bottom line: a must-see the reviewer is already planning to revisit for part two.", viewCount: 52716, subscriberCount: 1080000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=x5ghmtwyd6o", channel: "Reviewwala", avatarColor: "#4c1d95", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "A rare Bollywood take on the 'ordinary person gains a god's power' premise usually reserved for South Indian cinema, led by an unknown cast. Bottom line: a fun, novel watch if you enjoy South-style films.", viewCount: 30337, subscriberCount: 13100, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=NvKC8Be4CII", channel: "सत्य सनातन Satya Sanatan", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "The trailer notably skips artificial spectacle for a restrained, atmospheric tone that matches its subject — the same simplicity that reportedly drew Zuckerberg and Steve Jobs to Neem Karoli Baba himself. Bottom line: promising, dignified anticipation for the film.", viewCount: 27684, subscriberCount: 2150000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=_uN0H_0A25c", channel: "Movie Mandal by Sanjay ", avatarColor: "#a16207", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "Expected a rough, low-budget effort given the small scale, but the film's craft on Neem Karoli Baba's story and miracles genuinely surprised the reviewer. Bottom line: better than its budget would suggest.", viewCount: 26635, subscriberCount: 1420, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=7uTVD-N1qRc", channel: "MOHIT NARWARIYA ", avatarColor: "#b3402f", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "A brief dramatized clip built around a roadside encounter with Baba, played mostly for its devotional punchline. Bottom line: a fun, thin teaser rather than a full review.", viewCount: 26218, subscriberCount: 136, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=YbASvMPvN1M", channel: "Buzzzooka Showtimes", avatarColor: "#155e63", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "Openly not a typical Bollywood entertainer — no action, no spectacle, just faith and the life of Neem Karoli Baba. Bottom line: worth it if you're genuinely curious about the subject, skippable otherwise.", viewCount: 21064, subscriberCount: 68200, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Dp6bTvT_p5c", channel: "City Lights Hindi", avatarColor: "#57534e", language: "Hindi", verdictKey: 'good', rating: "7.5/10", quote: "Real jungle locations, period-accurate costumes, and Shobhinav Satya's performance stand out, though the AI/CGI effects and some repeated reaction shots feel weak. Bottom line: a good, research-backed biopic worth the research it inspires.", viewCount: 7440, subscriberCount: 27800, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=JDtxN5-IrsA", channel: "All in One by Digvijay Bonawate", avatarColor: "#92400e", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "Strong character writing for an unusual, non-Bollywood-typical subject, but some scenes tip into overly dramatic, serial-like territory, especially in the second half. Bottom line: a one-time watch — the reviewer's own score, 3/5.", viewCount: 4140, subscriberCount: 89900, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=miSJ5sbLZ2k", channel: "Zee News", avatarColor: "#9d174d", language: "Hindi", verdictKey: 'good', rating: "8/10", quote: "Clearly well-researched, with no big stars needed to make Baba's story land — though the music and some heavy mid-film stretches are the weak points. Bottom line: worth watching once, the reviewer's own score, 4/5.", viewCount: 1123, subscriberCount: 42400000, matchedBy: ["subscribers"] },
    ] },
  { id: 13, title: "Awarapan 2", industry: "Bollywood", language: "Hindi", releaseDate: "14 Aug 2026", score: 6.0, reviewCount: 11, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#92400e,#451a03)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/36186", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/36186", trailerId: "1ya87ENCRj0",
    synopsis: "Drawn back into the underworld, Shivam finds his future hinging on redemption, love, and sacrifice. As bonds deepen and conflicts sharpen, each decision he makes tests his resolve and shapes the fate that awaits him.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=-kkNwSNCHWw", channel: "Filmi Indian", avatarColor: "#155e63", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "The theatrical craft feels top-class, and Emraan Hashmi's entry and closing scenes are genuinely social-media-worthy moments. The dialogues, though, don't match the original's catch-phrase writing. Bottom line: strong on presentation, weaker on words.", viewCount: 1362670, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=_yXevIoymuI", channel: "YOGI BOLTA HAI", avatarColor: "#57534e", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "A strong opening 10-15 minutes gives way to a slower middle stretch carried mostly by nostalgia and recycled old songs rather than new ones. Bottom line: family-safe and riding on nostalgia, the reviewer's own score 3/5.", viewCount: 986257, subscriberCount: 1590000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=pyKL66mjckU", channel: "Tata Play Binge", avatarColor: "#92400e", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "Emraan Hashmi's first 20 minutes are a genuine emotional gut-punch, and the reuse of 'Tera Mera Rishta' delivers real goosebumps. The story is less predictable than expected, though Mohit Suri's directorial touch from part one is missed. Bottom line: carried almost entirely by Emraan.", viewCount: 745221, subscriberCount: 100000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=v65qI6rCGj4", channel: "Sufyric Tune ", avatarColor: "#9d174d", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "A personal, nostalgic reflection from someone connected to the original film — praises the songs and calls Emraan's intensity here among his best work. Bottom line: a heartfelt, insider's take more than a critical review.", viewCount: 497007, subscriberCount: 1220, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=DKod13R7C1A", channel: "Suraj Kumar", avatarColor: "#4c1d95", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "A genuinely emotional comeback moment for Emraan, backed by visible physical dedication and one standout container-set action sequence, though the story stays predictable and the dialogues underwhelm. Bottom line: a good film, not a great one.", viewCount: 362033, subscriberCount: 1080000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=8dwB0Dt4LI4", channel: "FlickVerse", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: 'onetime', rating: "5/10", quote: "Disha Patani's flat performance undercuts the central romance entirely, action sequences lack clarity despite decent camerawork, and the nostalgia beats grow repetitive fast. Bottom line: Awarapan with a fresh coat of paint, not much more.", viewCount: 361604, subscriberCount: 532000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=E3xIjrXbrdI", channel: "Tried&Refused Productions.", avatarColor: "#a16207", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "Emraan anchors the film with real emotional weight, but the climax turns messy, the villain never feels genuinely threatening, and a supporting character's disability is written as broad caricature. Bottom line: watchable mainly for Emraan, forgettable beyond that.", viewCount: 276051, subscriberCount: 1310000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=p-m_m4cMqhE", channel: "FILMY MASALA", avatarColor: "#b3402f", language: "Hindi", verdictKey: 'skip', rating: "3/10", quote: "Calls the story incoherent and not worth the ticket price, though it credits Emraan Hashmi personally while blaming the writing entirely. Bottom line: a genuinely disappointed, blunt pass.", viewCount: 208798, subscriberCount: 187000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=IHw77dtSDWc", channel: "Kamaal R Khan - KRK", avatarColor: "#155e63", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "A tight, engaging screenplay with something happening every ten minutes, strong action, and a genuinely well-acted villain in Puran Gabbi. Bottom line: a great comeback for Emraan, the reviewer's own score, 3.5/5.", viewCount: 195507, subscriberCount: 1300000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=eHn2vtOhCaY", channel: "BrotherHud", avatarColor: "#57534e", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "Frames the sequel around the same heartbreak-and-longing appeal as the original, though this time expanding beyond a pure love story. Bottom line: a nostalgia play more than a review of new merit.", viewCount: 173395, subscriberCount: 802000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=QTbZTKtuWe4", channel: "ABHI KA REVIEW", avatarColor: "#92400e", language: "Hindi", verdictKey: 'onetime', rating: "5/10", quote: "The film only comes alive when Emraan is on screen — the villain isn't remotely menacing, Disha Patani's chemistry falls flat, and the climax sacrifices logic for heroics. Bottom line: a one-time nostalgia watch, nothing more.", viewCount: 158076, subscriberCount: 1640000, matchedBy: ["subscribers"] },
    ] },
  { id: 14, title: "Batwara 1947", industry: "Bollywood", language: "Hindi", releaseDate: "14 Aug 2026", score: 5.4, reviewCount: 7, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#4c1d95,#2e1065)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/35449", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/35449", trailerId: "oRsAMzfvVGk",
    synopsis: "In times of hatred and fear, he chose courage.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=3Z8S4_m7YKk", channel: "YOGI BOLTA HAI", avatarColor: "#155e63", language: "Hindi", verdictKey: 'onetime', rating: "5/10", quote: "Sunny Deol barely registers as a Muslim character outside the climax, Karan Deol's casting feels like nepotism, and AR Rahman's music isn't drawing crowds. Bottom line: a purely average film, the reviewer's own score 2.5/5.", viewCount: 657213, subscriberCount: 1590000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=AZhXbiw3jQg", channel: "Filmi Indian", avatarColor: "#57534e", language: "Hindi", verdictKey: 'skip', rating: "4/10", quote: "Dismissive of the title change from the original 'Lahore 1947,' and skeptical of the whole project given Aamir Khan's involvement. Bottom line: a pass, delivered with visible frustration.", viewCount: 631104, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=EhY0-mJnqrY", channel: "BnfTV", avatarColor: "#92400e", language: "Hindi", verdictKey: 'good', rating: "7/10", quote: "Sunny Deol genuinely acts here instead of just shouting, and the non-violent climax is unlike anything seen in his filmography. The 1947 Lahore set design looks obviously artificial, and the melodrama runs heavy. Bottom line: surprisingly restrained, worth feeling something over.", viewCount: 348820, subscriberCount: 1520000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=GYMpXujPoyw", channel: "Suraj Kumar", avatarColor: "#9d174d", language: "Hindi", verdictKey: 'skip', rating: "3/10", quote: "Reports an empty theatre at the show attended, arguing audience appetite for the India-Pakistan patriotic formula has genuinely run out after Gadar 2. Bottom line: badly misjudged timing, a hard pass.", viewCount: 183397, subscriberCount: 1080000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=gw7BMlBvWYY", channel: "The Review Point", avatarColor: "#4c1d95", language: "Hindi", verdictKey: 'good', rating: "8/10", quote: "One of Sunny Deol's most mature, against-type performances — restrained and vulnerable rather than his usual patriotic-revenge mode, in a genuinely atmospheric recreation of 1947 Lahore. Slow first half, powerful second. Bottom line: a bold career risk that pays off.", viewCount: 145384, subscriberCount: 286000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=nAAl3DW142w", channel: "Komal Nahta Official", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: 'onetime', rating: "5/10", quote: "Strong direction and cinematography can't cover for lead characters who behave unsympathetically early on and a screenplay full of logic gaps. Sunny Deol and Shabana Azmi both act well regardless. Bottom line: a very ordinary film despite the craft on display.", viewCount: 143165, subscriberCount: 466000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=J8xs6x2LZOA", channel: "FILMY MASALA", avatarColor: "#a16207", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 121140, subscriberCount: 187000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=ubtmXeMI7UU", channel: "ABHI KA REVIEW", avatarColor: "#b3402f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 119254, subscriberCount: 1640000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=Q3LPnfZWBpY", channel: "Arakshita Reviews ", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 105001, subscriberCount: 83200, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=mYXB1ZRYkM8", channel: "The Lallantop", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 104925, subscriberCount: 35000000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=e7WrvIdK5o4", channel: "AKB Media", avatarColor: "#92400e", language: "Hindi", verdictKey: 'onetime', rating: "6/10", quote: "Frames the film around the real human cost of Partition rather than critiquing craft, positioning it as timely Independence Day viewing. Bottom line: a heartfelt contextual take more than a critical review.", viewCount: 9257, subscriberCount: 2220000, matchedBy: ["subscribers"] },
    ] },
  { id: 15, title: "Khalifa", industry: "Tollywood", language: "Telugu", releaseDate: "20 Aug 2026", score: 5.8, reviewCount: 11, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#a16207,#713f12)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/37848", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/37848", trailerId: "8NiMCt2o-uQ",
    synopsis: "Khalifa is an action thriller revolving around a notorious gold smuggling kingpin who inherited his multi-million dollar criminal enterprise from a lineage of gangsters. The story follows his sprawling operation, which spans from the Middle East all the way to India.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=oGTNtg_PFGg", channel: "Aswanth Kok", avatarColor: "#155e63", language: "Telugu", verdictKey: 'wait', rating: "4/10", quote: "Repetitive stylistic choices and a script the reviewer calls genuinely weak and dated leave little to connect with beyond scattered action choreography. Bottom line: a detached watch that leans hard on its cameo for hype.", viewCount: 734501, subscriberCount: 509000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=ixyMHHqWmtM", channel: "POP Premiere", avatarColor: "#57534e", language: "Telugu", verdictKey: 'good', rating: "7/10", quote: "The screenplay is admittedly average, but the second half's graph and a genuinely amazing climax cameo pull it up considerably. Bottom line: a solid Onam-season watch, elevated by its ending.", viewCount: 258702, subscriberCount: 284000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Cg99yHBoCXA", channel: "Unni Vlogs Cinephile", avatarColor: "#92400e", language: "Telugu", verdictKey: 'onetime', rating: "5/10", quote: "A genuinely strong second-half group fight is the emotional peak, and Prithviraj's physical commitment shows, but the father-son relationship and central romance never land emotionally. Bottom line: a casual watch, not the director's best work.", viewCount: 255848, subscriberCount: 428000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=7OKWotGuQLE", channel: "POP Premiere", avatarColor: "#9d174d", language: "Telugu", verdictKey: 'onetime', rating: "6/10", quote: "A slow-starting first half saves its promised action for the theatre rather than the trailer, with character work that's decent but a fairly flat, generic smuggling plot. Bottom line: a normal watch, hopes pinned on the second half.", viewCount: 231369, subscriberCount: 284000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=kKJgF8p64i0", channel: "TREND SETTER 24×7", avatarColor: "#4c1d95", language: "Telugu", verdictKey: 'onetime', rating: "5/10", quote: "Calls the first half rough and feels the star cameo is invoked more than actually delivered on. Bottom line: an uneven watch that leans on a name more than a role.", viewCount: 227870, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=z_t9bITQAvc", channel: "TREND SETTER 24×7", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: 'onetime', rating: "5/10", quote: "Skeptical going in about whether the film earns its big-star cameo, warning that misusing a legend like Mohanlal is a real risk here. Bottom line: cautious, wait-and-see territory.", viewCount: 227555, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=O0Ec4gtRTBc", channel: "REELOAD MEDIA", avatarColor: "#a16207", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "A properly staged commercial film with stylish cinematography and a cameo that's integrated more meaningfully than the usual pop-in appearance. Predictable, but never boring. Bottom line: a confident, comfortable watch for a festival release.", viewCount: 193487, subscriberCount: 428000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=PGXP-9IFRw8", channel: "TREND SETTER 24×7", avatarColor: "#b3402f", language: "Telugu", verdictKey: 'onetime', rating: "5/10", quote: "The star cameo delivers real goosebumps but only lasts a few minutes and doesn't sustain the film's energy beyond it. Bottom line: a short-lived high wrapped around an average film.", viewCount: 191396, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=RjRSx8ZrG74", channel: "Secret Agent", avatarColor: "#155e63", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "Relentless pacing, strong supporting turns from Sanju Sivaraman and Shammi Thilakan, and a genuinely well-built cameo payoff carry this one. The only real gripe: the same stylish hero-shot gets reused a bit too often. Bottom line: a high-energy must-watch for the festival crowd.", viewCount: 164167, subscriberCount: 861000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=gK_KCAIPcic", channel: "Entertainment Kizhi", avatarColor: "#57534e", language: "Telugu", verdictKey: 'onetime', rating: "6/10", quote: "Genuinely disappointed by most of the film — weak heroine performance, average smuggling plot — but admits the final ten minutes alone are worth the ticket. Bottom line: an average movie saved almost entirely by its ending.", viewCount: 106060, subscriberCount: 232000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=O6fjhntiFy4", channel: "Monsoon Media", avatarColor: "#92400e", language: "Telugu", verdictKey: 'onetime', rating: "5/10", quote: "Weak, uninnovative writing is the core problem despite strong star power — the villain doesn't resonate and emotional beats fall short, though Jakes Bejoy's score and the cinematography carry real weight. Bottom line: a just-okay watch, technically polished but hollow.", viewCount: 28591, subscriberCount: 530000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=6jUFRMyhz8k", channel: "Crazy 4 movie", avatarColor: "#9d174d", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 20476, subscriberCount: 777000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=wUEcKEhV2OE", channel: "FOCUS MEDIA", avatarColor: "#4c1d95", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 19837, subscriberCount: 1230000, matchedBy: ["subscribers"] },
    ] },
  { id: 16, title: "Vishwanath and Sons", industry: "Kollywood", language: "Tamil", releaseDate: "14 Aug 2026", score: 5.8, reviewCount: 6, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#9d174d,#500724)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/38577", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/38577", trailerId: "jZHoM2YhFCY",
    synopsis: "An international shooter who has spent his life in pursuit of excellence, Sanjay Vishwanath finds his world upended by age, family duties, and an unexpected romance - forcing him to confront what truly matters.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=S3mzOKTRtkw", channel: "Empty Hand", avatarColor: "#155e63", language: "Tamil", verdictKey: 'onetime', rating: "6/10", quote: "A quiet, dialogue-free emotional scene in the second half genuinely silences the theatre, and the Radhika-Mamitha Baiju chemistry works well throughout. The story turns predictable and drags around an Ooty sequence. Bottom line: a decent one-time family watch.", viewCount: 430400, subscriberCount: 2140000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=k4gqn86mtKg", channel: "Barbell Pitch Meetings", avatarColor: "#57534e", language: "Tamil", verdictKey: 'onetime', rating: "5/10", quote: "A genuinely strong first half full of good comedy writing and a lovely Radhika turn collapses into generic commercial templates by the second half, well below the director's earlier 'Lucky Bhaskar.' Bottom line: an honest 'didn't like it' from the reviewer despite real bright spots.", viewCount: 390384, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=KMwoEurUmS4", channel: "Poolachokka", avatarColor: "#92400e", language: "Tamil", verdictKey: 'good', rating: "7/10", quote: "A genuinely classy, well-treated family entertainer with a strong cast. Bottom line: a solid watch that earns its family-drama credentials.", viewCount: 365486, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=q8SDMYqH-Ps", channel: "Aswanth Kok", avatarColor: "#9d174d", language: "Tamil", verdictKey: 'wait', rating: "4/10", quote: "Writing feels genuinely soap-opera-level, stacking affair after affair and subplot after subplot, with scenes and songs that feel unmotivated. Suriya's emotional scenes are the one real bright spot. Bottom line: the second half is a real slog.", viewCount: 332226, subscriberCount: 509000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CBSmBbpOSHc", channel: "Bingoo Box", avatarColor: "#4c1d95", language: "Tamil", verdictKey: 'must', rating: "8/10", quote: "Genuine crowd enthusiasm here — Mamitha Baiju's performance draws repeated praise, and Suriya's turn is compared favourably to Ghajini. Comedy-led first half, emotional second half. Bottom line: a proper 'class, not mass' family entertainer.", viewCount: 321817, subscriberCount: 2000000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=k40X1_eRIMA", channel: "Friday Facts", avatarColor: "#1e3a5f", language: "Tamil", verdictKey: 'onetime', rating: "5/10", quote: "Feels closer to a dubbed Telugu family drama than a distinct Tamil production, echoing the same familiar beats as 'Varisu.' Suriya and Mamitha's chemistry is genuinely well-suited. Bottom line: a fine but overly familiar watch.", viewCount: 248521, subscriberCount: 514000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CJXvT_c9Oz8", channel: "B5 Voice", avatarColor: "#a16207", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 224844, subscriberCount: 10300, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=5sDoAA4xITA", channel: "Suraj Kumar", avatarColor: "#b3402f", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 170603, subscriberCount: 1080000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=AoXEWKaBJxA", channel: "Unni Vlogs Cinephile", avatarColor: "#155e63", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 162185, subscriberCount: 428000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=T94UNjr7XGw", channel: "Movie Matters", avatarColor: "#57534e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 148127, subscriberCount: 468000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=bw7Ba2Ufr3A", channel: "Mahidhar Vibes", avatarColor: "#92400e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 136352, subscriberCount: 1000000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=LGI7I9lF-3s", channel: "NTV Entertainment ", avatarColor: "#9d174d", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 22190, subscriberCount: 2540000, matchedBy: ["subscribers"] },
    ] },
  { id: 17, title: "Ayogya 2", industry: "Sandalwood", language: "Kannada", releaseDate: "07 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#1e3a5f,#0f1f33)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/38608", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/38608", trailerId: null,
    synopsis: "After winning the councilor election, Siddegowda sets his sights on the presidency, backed by 16 of 22 councilors. Alongside allies Benne and Mutton, he plots his campaign - but rival Bachegowda moves to sabotage it. Desperate to stop defections, Siddegowda kidnaps the 16 councilors, only to be betrayed by them at the ballot, handing Bachegowda the win. As his ruthless tactics come to light, the councilors are left fearing what he might do next.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=xbBsOH5Q3hY", channel: "Newz Alert", avatarColor: "#155e63", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 79682, subscriberCount: 968000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=4aF354OCb0M", channel: "Kadakk Cinema", avatarColor: "#57534e", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 62644, subscriberCount: 245000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=KfaKWfQxgAU", channel: "Aj Public Review", avatarColor: "#92400e", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 38690, subscriberCount: 11500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=dYlSg5XzL_s", channel: "Filmy Pack Karnataka ", avatarColor: "#9d174d", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 19596, subscriberCount: 572000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=RNbESzsEoLo", channel: "Review Corner", avatarColor: "#4c1d95", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 18498, subscriberCount: 67800, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=cjwXhJ6CA9Q", channel: "Name is Madhu", avatarColor: "#1e3a5f", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 17785, subscriberCount: 328000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=uLv5SObYZ-U", channel: "Digital Power Guru", avatarColor: "#a16207", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 14739, subscriberCount: 739000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=xhWwT2Lur40", channel: "SStv", avatarColor: "#b3402f", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 12464, subscriberCount: 796000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=e5Gt8jQmaUA", channel: "Vishwavani TV Special", avatarColor: "#155e63", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 12232, subscriberCount: 183000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=8x83Hz04qCM", channel: "Guru Tech TV", avatarColor: "#57534e", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 11827, subscriberCount: 4850, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=KwfkYJ7mBlM", channel: "Mr.D Pictures ", avatarColor: "#92400e", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 10716, subscriberCount: 1430000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=sTlHzLM6A-c", channel: "Namma KFI", avatarColor: "#9d174d", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 6846, subscriberCount: 1910000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=MYTYZDmhWPw", channel: "Power TV News", avatarColor: "#4c1d95", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 6616, subscriberCount: 1390000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=Zbh4SeTHLoc", channel: "FDFS Kannada", avatarColor: "#1e3a5f", language: "Kannada", verdictKey: '', rating: '', quote: '', viewCount: 4593, subscriberCount: 1270000, matchedBy: ["subscribers"] },
    ] },
  { id: 18, title: "The Odyssey", industry: "Indie", language: "English", releaseDate: "17 Jul 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#57534e,#292524)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/37086", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/37086", trailerId: "l54pzz3-Yl8",
    synopsis: "Christopher Nolan's next film, The Odyssey, is a mythic action epic shot across the world using brand new IMAX film technology. The film brings Homer's foundational saga to IMAX film screens for the first time and opens in cinemas everywhere on July 17, 2026.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=4EtIteqeySw", channel: "Jeremy Jahns", avatarColor: "#155e63", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 1303640, subscriberCount: 2090000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=z3BRU9-_oyA", channel: "YOGI BOLTA HAI", avatarColor: "#57534e", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 984283, subscriberCount: 1590000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=BgnkRyUKaUA", channel: "BnfTV", avatarColor: "#92400e", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 747134, subscriberCount: 1520000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CqaLfMi0fX4", channel: "Chris Stuckmann", avatarColor: "#9d174d", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 596351, subscriberCount: 2020000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=9ttmj820QAI", channel: "ComicVerse", avatarColor: "#4c1d95", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 555975, subscriberCount: 1660000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=f3DfJxN5fSE", channel: "Filmi Indian", avatarColor: "#1e3a5f", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 479879, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=oZ7qLZ7aFV8", channel: "Barbell Pitch Meetings", avatarColor: "#a16207", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 435491, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=7oHJfkgn-mw", channel: "Shan Prasher", avatarColor: "#b3402f", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 434514, subscriberCount: 564000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=XeOotKH0Jc4", channel: "Chris Stuckmann", avatarColor: "#155e63", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 385508, subscriberCount: 2020000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=joZKjaIjazE", channel: "PJ Explained", avatarColor: "#57534e", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 370079, subscriberCount: 2660000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=8Sk6W21Ikbo", channel: "Tamil Talkies", avatarColor: "#92400e", language: "English", verdictKey: '', rating: '', quote: '', viewCount: 311316, subscriberCount: 1790000, matchedBy: ["subscribers"] },
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
