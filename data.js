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
      { url: "https://www.youtube.com/watch?v=8S5ndDhgt5E", channel: "Adi Reddy", avatarColor: "#155e63", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "I just watched Irumudi and it's a genuine hit for Ravi Teja. His performance carries the film, and honestly the whole cast is convincing — the emotional core between father and daughter lands perfectly and never feels forced. The film keeps its central mystery alive from the opening scene right through to the climax, so you're never quite sure what's coming next, and that suspense is one of its biggest strengths. When the Ayyappa devotional songs play, the theater genuinely comes alive — people are up and dancing in the aisles. I can't point to a real negative here; it's the kind of film the whole family can sit through together. If anything, my only feeling walking out was that with a slightly bigger canvas, this could have been an even bigger blockbuster than it already is.", viewCount: 425075, subscriberCount: 940000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=yRzUCo6dedA", channel: "Poolachokka", avatarColor: "#57534e", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "Ravi Teja plays Trinath, an alcohol-addicted father in Irumudi, living in a village with his wife and daughter, and the film builds real mystery around what's happening there — you have to actually go to the theatre to find out how his character solves it. What stood out most to me was the cinematography: very few static shots, movement throughout, but none of it ever feels jerky, and the art direction clearly did a lot of the heavy lifting there. They shot almost the entire film on real locations rather than sets, which gives it an authentic feel. Ravi Teja himself is well cast as a rough village father devoted only to his daughter, and his introduction shot is one of my favourite moments — restrained, without the usual heavy slow-motion hero intro.", viewCount: 363415, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=h0ShCsVbAQ0", channel: "SRR TV ", avatarColor: "#92400e", language: "Telugu", verdictKey: 'must', rating: "9/10", quote: "Irumudi is a genuine blockbuster — I watched it in Screen Three and I'm telling you straight, it's not boring anywhere. The direction shows the father-daughter-Ayyappa story in a genuinely new way, and the print and screen quality on release were excellent. The emotional beats around the father, the Ayyappa devotion, and the family scenes all land well, but what really surprised me was the interval — there's a deliberately dark, jarring cut right at the break that felt unlike anything this director has done before, genuinely mind-blowing. The second half turns almost ferocious, like a full-on Veer Tandavam of mass energy, and it's built for Ravi Teja's core fans especially. The music and overall craft are solid too. This is a movie mass-hero fans in particular should not skip.", viewCount: 295607, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Mz4oa6FRwGM", channel: "Review Talks", avatarColor: "#9d174d", language: "Telugu", verdictKey: 'good', rating: "7/10", quote: "There's no traditional item song anywhere in Irumudi, and I genuinely didn't miss one — the devotional track 'Mallipoola Pallaki Bangaru Pallaki' completely fills that gap and then some. It's become the film's real centerpiece for me. Comparing scale, I'd go as far as saying that if a bigger star like Ram Charan had headlined this exact story, it would have gone on to break global records — that's how strong the core material is. As it stands, though, Ravi Teja's version still gives him a genuinely good comeback vehicle, and I expect this one to comfortably cross 350 crores at the box office. Between Vikramarkudu, Kick, and now Irumudi, this feels like it belongs in the same bracket of Ravi Teja's career-defining hits.", viewCount: 295525, subscriberCount: 111000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=FaXPzsZb7DA", channel: "SRR TV ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: 'must', rating: "9/10", quote: "They've taken this one to a different level altogether — the performances, the sound design, and especially the fight choreography in the climax genuinely gave me goosebumps. There are three songs in the film and every single one is mind-blowing. As for Ravi Teja, this isn't just a normal performance from him — after Amma Nanna and Krack, I'd call this one of his real career highlights. The first half plays it fairly straightforward and stays at one level, but once the second half kicks in, the film simply doesn't let up — it keeps running without a single dull stretch. This is a proper village-set mass movie, a genuine festival for Ravi Teja's fans, and honestly a good masala entertainer for anyone who enjoys that combination of emotion and mass energy.", viewCount: 264225, subscriberCount: 18900, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=dUp-6G2Q-Ak", channel: "Barbell Pitch Meetings", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: 'wait', rating: "5/10", quote: "This is easily the most mixed take I've seen on Irumudi. Ravi Teja plays it more matured and restrained than he has in years, which genuinely works, but structurally this story leans very close to a well-known Vijay Sethupathi thriller — and where that film executed its central twist with real precision, this one telegraphs too much too early and drags the reveal out longer than it needed to. The two devotional songs are genuinely good and worth the price of admission on their own. My bigger issue is tone: several stretches, particularly a disturbing subplot involving a schoolgirl, are pushed further and more explicitly than the story needed, and I'd actively steer families with young kids away from those scenes. The emotional beats between father and daughter also felt overplayed rather than earned. A sincere attempt, but not one I'd call fully successful.", viewCount: 233354, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=b3LFoKES0O0", channel: "Mahidhar Vibes", avatarColor: "#a16207", language: "Telugu", verdictKey: 'good', rating: "8/10", quote: "Irumudi is a good, message-oriented film rather than an over-the-top commercial one, and that's exactly why I liked it — this is a performance-driven Ravi Teja movie, not a mass-elements-first one, so if you're coming in expecting non-stop commercial spectacle, temper those expectations. What works really well are the twists, which land in genuinely unexpected ways, and the music, especially the songs built around Ayyappa devotion, which are excellent throughout. Ravi Teja, the young actress playing his daughter, and Sai Kumar are all uniformly strong — there's a Mangalasnanam scene where the daughter's performance had me convinced it was real. My honest criticisms: the pacing dips a little in the middle, and the writing leans on some convenient shortcuts near the end that feel a touch too easy. Even with those, I'd rate this a solid 4 out of 5 — a good family film with real heart.", viewCount: 205053, subscriberCount: 1000000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=eERpieYsJBE", channel: "Movie Manishi", avatarColor: "#b3402f", language: "Telugu", verdictKey: 'onetime', rating: "6/10", quote: "I just got back from watching Irumudi, and Ravi Teja's performance and physical transformation for the Ayyappa devotee role genuinely impressed me — the emotional father-daughter moments, especially through the second half, work well, and the songs and background score are strong throughout. My real issue is with the story itself: the villain is telegraphed the moment he appears on screen, and once that reveal lands, the film settles into a fairly routine, predictable rhythm that leans entirely on one emotional beat without finding much else to say. Shiva Nirvana clearly knows how to build a good backdrop and a convincing relationship, so it's a shame the underlying plot doesn't match that craft. Taken purely as a watch, it's above average, with a good second-half song and a decent climax, but I walked out wishing the story had been less by-the-numbers.", viewCount: 192048, subscriberCount: 10100, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=kjyPLnr2i9k", channel: "KARTHIKS FILM FEED", avatarColor: "#155e63", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "Our Mass Maharaja Ravi Teja and the whole team have scored a genuine hit with Irumudi — our entire group left the theatre thoroughly won over. I won't go into plot specifics because I don't want to spoil anything beyond saying it centres on an Ayyappa vow, but there are several twists along the way, and the pre-interval and interval portions in particular are mind-blowing. The second-half emotional scenes are the film's core strength and will genuinely move you. Ravi Teja's screen presence carries real weight in the action sequences too — his energy on screen is next level throughout. On top of all that, the DJ remix version of 'Mallepulla Pallaki' is excellent and adds to the theatre experience. This is a strong, confident entry in his filmography and well worth watching on the big screen.", viewCount: 172196, subscriberCount: 67000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=AtLgrMSGjww", channel: "Cinemapicha", avatarColor: "#57534e", language: "Telugu", verdictKey: 'good', rating: "7/10", quote: "Big credit to Ravi Teja here — even as someone who hasn't personally taken the Ayyappa Deeksha, the initiation scenes and songs in Irumudi gave me genuine goosebumps, and I imagine they'll hit even harder for anyone who has actually gone through that vow. Ravi Teja's performance as a father is very stable and restrained, without any of his usual mannerisms, and it's genuinely his best work in a while — the scenes between him and the young actress playing his daughter are heart-touching, some of them moved me to tears. Sai Kumar is also excellent as Guruswamy from start to finish. Where I have real reservations is tone: the film handles its heavier subject matter in a way that felt unusually disturbing and heavy-handed to me, especially in the second half. The first half is also a little slow before the interval picks things up. Still, between the performances and the devotional sequences, this is one worth watching.", viewCount: 140801, subscriberCount: 170000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=i-NfQT7gRnI", channel: "Thyview", avatarColor: "#92400e", language: "Telugu", verdictKey: 'onetime', rating: "6.5/10", quote: "This is a genuinely tricky film to sum up — there's a lot I liked and a lot I didn't. Splitting it into three threads helps: as a devotional family drama, Shiva Nirvana handles the father-daughter relationship beautifully, and the way Ayyappa rituals are woven into the plot feels natural rather than preachy. As a thriller, the eventual twist does land and will surprise you in the theatre, though the film takes noticeably longer than it needed to get there — tighter choices earlier on would have made that reveal hit even harder. My biggest issue is with the film's third thread, the revenge-drama stretch in the last 40 minutes: some of the suffering the story puts its characters through felt pushed further than necessary just to manufacture emotion, past the point where I could still call it earned. There's real craft in the writing about parenting here, but that final stretch is where the film lost me a little.", viewCount: 96259, subscriberCount: 1060000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=8V4mghBMDCw", channel: "iDream Media", avatarColor: "#9d174d", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "Every theatre I've checked on since release is packed — Irumudi has built genuine, word-of-mouth craze, especially around its two Ayyappa devotional songs, and that's on top of a title and teaser that were already generating buzz. Credit to director Shiva Nirvana for two clever choices: weaving real devotion into a father-daughter-thriller plot instead of bolting it on, and actually shooting the whole film on location in Seeleru rather than faking it on a set — that authenticity shows in every frame, and it took Ravi Teja's genuine buy-in to make that shoot happen at all. Ravi Teja's restrained father performance, the young actress playing his daughter, and Sai Kumar are all excellent, and the background score builds real tension through a first half that admittedly runs a little familiar before an understated interval. The second half tightens everything into a genuinely tense final act. After a rough patch in his career, this feels like Ravi Teja's real comeback hit.", viewCount: 55362, subscriberCount: 5840000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=QLe1J2ehTKY", channel: "NTV Entertainment ", avatarColor: "#4c1d95", language: "Telugu", verdictKey: 'must', rating: "8.5/10", quote: "What impressed me most about Irumudi is how disciplined the writing is — Shiva Nirvana keeps a devotional thread, a family drama, and a genuine thriller all moving together without the film ever losing its grip or feeling like it's juggling too much. The real soul of the film is a conversation between Sai Kumar and Ravi Teja about whether girls should be raised in fear or raised free — it's the ideological core the whole plot hangs on, and both actors sell it completely. The second half turns genuinely hard-hitting. I'll admit there are a couple of places where the villain's track relies on writing that's a bit too convenient, but it never derails the experience. Sai Kumar is outstanding as Guruswamy, and Priya Bhavani Shankar deliberately underplays glamour for a lived-in, maternal performance that works. The pre-release buzz around this one was real, and having seen it now, I think it's earned every bit of it as a genuine hit.", viewCount: 8502, subscriberCount: 2540000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=chmCSUv9tQ4", channel: "YT18", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: 'must', rating: "8/10", quote: "This one played like a genuine crowd celebration as much as a review — everyone we spoke to outside the theatre after Irumudi was full of praise, and it's easy to see why. The father-daughter bond between Ravi Teja and the young actress playing his daughter is the emotional centerpiece, and by multiple accounts it gets even stronger through the second half, with people openly getting emotional in their seats. The film tackles a genuinely important, current social issue — how society protects its girls and daughters — and audiences we spoke to said that message landed for them personally, several mentioning they were reminded of their own fathers. The songs, especially 'Mallipoola Pallaki,' had the whole theatre swaying along. This is being talked about as a strong, blockbuster-level hit, and the consensus among the people we asked was that it's a movie families, and especially women and daughters, should watch together.", viewCount: 6667, subscriberCount: 1710000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=UlZHyz8XK7Q", channel: "Mana Stars", avatarColor: "#a16207", language: "Telugu", verdictKey: 'good', rating: "7.5/10", quote: "What struck me most about Irumudi is how uncharacteristically toned-down Ravi Teja's energy is here — his usual high-octane vibe barely shows up on screen, and yet the quiet, grounded way he plays Trinath in the Seeleru setting works better than his more typical performances have in years. The father-daughter emotion is the film's real strength, and there are a few small but effective twists built in near the interval and the climax that add some genuine excitement. Shiva Nirvana usually brings heavier emotional baggage to his films, and here it's lighter — I found myself wishing he'd leaned into that emotional core a little more deeply, because what's there already works so well. Even so, this is a good, socially relevant family film, and after a run of films that haven't fully landed, Ravi Teja hasn't disappointed this time. Worth watching with family, especially the women in your household.", viewCount: 2977, subscriberCount: 3720000, matchedBy: ["subscribers"] },
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
  { id: 13, title: "Awarapan 2", industry: "Bollywood", language: "Hindi", releaseDate: "14 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#92400e,#451a03)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/36186", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/36186", trailerId: "1ya87ENCRj0",
    synopsis: "Drawn back into the underworld, Shivam finds his future hinging on redemption, love, and sacrifice. As bonds deepen and conflicts sharpen, each decision he makes tests his resolve and shapes the fate that awaits him.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=-kkNwSNCHWw", channel: "Filmi Indian", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 1362670, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=_yXevIoymuI", channel: "YOGI BOLTA HAI", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 986257, subscriberCount: 1590000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=pyKL66mjckU", channel: "Tata Play Binge", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 745221, subscriberCount: 100000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=v65qI6rCGj4", channel: "Sufyric Tune ", avatarColor: "#9d174d", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 497007, subscriberCount: 1220, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=DKod13R7C1A", channel: "Suraj Kumar", avatarColor: "#4c1d95", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 362033, subscriberCount: 1080000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=8dwB0Dt4LI4", channel: "FlickVerse", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 361604, subscriberCount: 532000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=E3xIjrXbrdI", channel: "Tried&Refused Productions.", avatarColor: "#a16207", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 276051, subscriberCount: 1310000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=p-m_m4cMqhE", channel: "FILMY MASALA", avatarColor: "#b3402f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 208798, subscriberCount: 187000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=IHw77dtSDWc", channel: "Kamaal R Khan - KRK", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 195507, subscriberCount: 1300000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=eHn2vtOhCaY", channel: "BrotherHud", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 173395, subscriberCount: 802000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=QTbZTKtuWe4", channel: "ABHI KA REVIEW", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 158076, subscriberCount: 1640000, matchedBy: ["subscribers"] },
    ] },
  { id: 14, title: "Batwara 1947", industry: "Bollywood", language: "Hindi", releaseDate: "14 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#4c1d95,#2e1065)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/35449", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/35449", trailerId: "oRsAMzfvVGk",
    synopsis: "In times of hatred and fear, he chose courage.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=3Z8S4_m7YKk", channel: "YOGI BOLTA HAI", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 657213, subscriberCount: 1590000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=AZhXbiw3jQg", channel: "Filmi Indian", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 631104, subscriberCount: 4760000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=EhY0-mJnqrY", channel: "BnfTV", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 348820, subscriberCount: 1520000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=GYMpXujPoyw", channel: "Suraj Kumar", avatarColor: "#9d174d", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 183397, subscriberCount: 1080000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=gw7BMlBvWYY", channel: "The Review Point", avatarColor: "#4c1d95", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 145384, subscriberCount: 286000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=nAAl3DW142w", channel: "Komal Nahta Official", avatarColor: "#1e3a5f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 143165, subscriberCount: 466000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=J8xs6x2LZOA", channel: "FILMY MASALA", avatarColor: "#a16207", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 121140, subscriberCount: 187000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=ubtmXeMI7UU", channel: "ABHI KA REVIEW", avatarColor: "#b3402f", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 119254, subscriberCount: 1640000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=Q3LPnfZWBpY", channel: "Arakshita Reviews ", avatarColor: "#155e63", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 105001, subscriberCount: 83200, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=mYXB1ZRYkM8", channel: "The Lallantop", avatarColor: "#57534e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 104925, subscriberCount: 35000000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=e7WrvIdK5o4", channel: "AKB Media", avatarColor: "#92400e", language: "Hindi", verdictKey: '', rating: '', quote: '', viewCount: 9257, subscriberCount: 2220000, matchedBy: ["subscribers"] },
    ] },
  { id: 15, title: "Khalifa", industry: "Tollywood", language: "Telugu", releaseDate: "20 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#a16207,#713f12)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/37848", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/37848", trailerId: "8NiMCt2o-uQ",
    synopsis: "Khalifa is an action thriller revolving around a notorious gold smuggling kingpin who inherited his multi-million dollar criminal enterprise from a lineage of gangsters. The story follows his sprawling operation, which spans from the Middle East all the way to India.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=oGTNtg_PFGg", channel: "Aswanth Kok", avatarColor: "#155e63", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 734501, subscriberCount: 509000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=ixyMHHqWmtM", channel: "POP Premiere", avatarColor: "#57534e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 258702, subscriberCount: 284000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=Cg99yHBoCXA", channel: "Unni Vlogs Cinephile", avatarColor: "#92400e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 255848, subscriberCount: 428000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=7OKWotGuQLE", channel: "POP Premiere", avatarColor: "#9d174d", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 231369, subscriberCount: 284000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=kKJgF8p64i0", channel: "TREND SETTER 24×7", avatarColor: "#4c1d95", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 227870, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=z_t9bITQAvc", channel: "TREND SETTER 24×7", avatarColor: "#1e3a5f", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 227555, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=O0Ec4gtRTBc", channel: "REELOAD MEDIA", avatarColor: "#a16207", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 193487, subscriberCount: 428000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=PGXP-9IFRw8", channel: "TREND SETTER 24×7", avatarColor: "#b3402f", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 191396, subscriberCount: 49500, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=RjRSx8ZrG74", channel: "Secret Agent", avatarColor: "#155e63", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 164167, subscriberCount: 861000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=gK_KCAIPcic", channel: "Entertainment Kizhi", avatarColor: "#57534e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 106060, subscriberCount: 232000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=O6fjhntiFy4", channel: "Monsoon Media", avatarColor: "#92400e", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 28591, subscriberCount: 530000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=6jUFRMyhz8k", channel: "Crazy 4 movie", avatarColor: "#9d174d", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 20476, subscriberCount: 777000, matchedBy: ["subscribers"] },
      { url: "https://www.youtube.com/watch?v=wUEcKEhV2OE", channel: "FOCUS MEDIA", avatarColor: "#4c1d95", language: "Telugu", verdictKey: '', rating: '', quote: '', viewCount: 19837, subscriberCount: 1230000, matchedBy: ["subscribers"] },
    ] },
  { id: 16, title: "Vishwanath and Sons", industry: "Kollywood", language: "Tamil", releaseDate: "14 Aug 2026", score: 0, reviewCount: 0, verdictKey: 'onetime', posterGrad: "linear-gradient(135deg,#9d174d,#500724)",
    posterUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-poster/38577", bannerUrl: "https://cineapi-48276813435.asia-south1.run.app/movie-banner/38577", trailerId: "jZHoM2YhFCY",
    synopsis: "An international shooter who has spent his life in pursuit of excellence, Sanjay Vishwanath finds his world upended by age, family duties, and an unexpected romance - forcing him to confront what truly matters.",
    pros: [], cons: [],
    videos: [
      { url: "https://www.youtube.com/watch?v=S3mzOKTRtkw", channel: "Empty Hand", avatarColor: "#155e63", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 430400, subscriberCount: 2140000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=k4gqn86mtKg", channel: "Barbell Pitch Meetings", avatarColor: "#57534e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 390384, subscriberCount: 336000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=KMwoEurUmS4", channel: "Poolachokka", avatarColor: "#92400e", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 365486, subscriberCount: 675000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=q8SDMYqH-Ps", channel: "Aswanth Kok", avatarColor: "#9d174d", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 332226, subscriberCount: 509000, matchedBy: ["views"] },
      { url: "https://www.youtube.com/watch?v=CBSmBbpOSHc", channel: "Bingoo Box", avatarColor: "#4c1d95", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 321817, subscriberCount: 2000000, matchedBy: ["views", "subscribers"] },
      { url: "https://www.youtube.com/watch?v=k40X1_eRIMA", channel: "Friday Facts", avatarColor: "#1e3a5f", language: "Tamil", verdictKey: '', rating: '', quote: '', viewCount: 248521, subscriberCount: 514000, matchedBy: ["views"] },
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
