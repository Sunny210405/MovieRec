// movies.js - Curated movie catalog with poster paths, trailer IDs, and streaming providers

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    rating: 8.7,
    duration: "2h 49m",
    description: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    keywords: ["space", "time travel", "family", "black hole", "future", "astronaut", "physics"],
    poster: "https://image.tmdb.org/t/p/w500/gEU2QpE6E9Yf5wz158mZ046O3q.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    trailerId: "zSWdZAIB5nY",
    watchProviders: ["Prime Video", "Apple TV", "Max"]
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    rating: 8.8,
    duration: "2h 28m",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    keywords: ["dreams", "subconscious", "heist", "mind-bending", "architecture", "gravity"],
    poster: "https://image.tmdb.org/t/p/w500/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TldmS0587teuIuz4vh1UBchPE.jpg",
    trailerId: "YoHD9XEInc0",
    watchProviders: ["Netflix", "Apple TV", "Max"]
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 9.0,
    duration: "2h 32m",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    keywords: ["superhero", "joker", "gotham", "justice", "chaos", "vigilante", "dark"],
    poster: "https://image.tmdb.org/t/p/w500/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dqK9HnZ1mK1q1t4y5K6c5e2n8mG.jpg",
    trailerId: "EXeTwQWrcwY",
    watchProviders: ["Max", "Apple TV"]
  },
  {
    id: 4,
    title: "Mad Max: Fury Road",
    year: 2015,
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    rating: 8.1,
    duration: "2h 0m",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    keywords: ["desert", "apocalypse", "survival", "cars", "chase", "revolution", "wasteland"],
    poster: "https://image.tmdb.org/t/p/w500/8tZYrjEf55V21rRsx2Y2WKeoy6H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nlw9j3p4b5mZ7o46O3q8tZYrjEf.jpg",
    trailerId: "hEJnMQG9eDc",
    watchProviders: ["Max", "Prime Video"]
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 9.3,
    duration: "2h 22m",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    keywords: ["prison", "hope", "friendship", "justice", "escape", "finance"],
    poster: "https://image.tmdb.org/t/p/w500/q6y01Jy3Zg94SIzgo71K9oFxzPP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfq73Ty6JFGm6zS6R0w8tZYrjE.jpg",
    trailerId: "PLl99DlL6b4",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 6,
    title: "The Godfather",
    year: 1972,
    genres: ["Drama", "Crime"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 9.2,
    duration: "2h 55m",
    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    keywords: ["mafia", "family", "loyalty", "power", "crime empire", "sicily"],
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tmU7b5mZ7o46O3q8tZYrjEf58Vt.jpg",
    trailerId: "sY1S3Yi9eDc",
    watchProviders: ["Prime Video", "Apple TV"]
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    genres: ["Drama", "Thriller", "Comedy"],
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    rating: 8.5,
    duration: "2h 12m",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    keywords: ["class divide", "con-artists", "dark comedy", "korea", "family secrets", "house"],
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hiTTgloJzvGI1TAYymCfbfl3vT7.jpg",
    trailerId: "5xH0HfJH5EE",
    watchProviders: ["Max", "Prime Video"]
  },
  {
    id: 8,
    title: "Whiplash",
    year: 2014,
    genres: ["Drama", "Music"],
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    rating: 8.5,
    duration: "1h 46m",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    keywords: ["jazz", "obsession", "drummer", "mentor", "perfectionism", "intensity"],
    poster: "https://image.tmdb.org/t/p/w500/oGxWY0kBBmQ7jEgo070875QESo3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6bbZ6Xw1c22ZbsXc61G0QESo3.jpg",
    trailerId: "7d_jQyG8eDc",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 9,
    title: "Blade Runner 2049",
    year: 2017,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    rating: 8.0,
    duration: "2h 44m",
    description: "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    keywords: ["cyberpunk", "android", "dystopia", "neon", "identity", "future", "hologram"],
    poster: "https://image.tmdb.org/t/p/w500/gacYu48l9K95S7425176711m392.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/il93C2ZbsXc61G0QESo3.jpg",
    trailerId: "gCcx85zVzQ4",
    watchProviders: ["Netflix", "Prime Video", "Apple TV"]
  },
  {
    id: 10,
    title: "Arrival",
    year: 2016,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    rating: 7.9,
    duration: "1h 56m",
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    keywords: ["aliens", "linguistics", "time", "communication", "peace", "first contact"],
    poster: "https://image.tmdb.org/t/p/w500/x2FiwSy06Lj2JwTlvVRFSr6j76e.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/a2FiwSy06Lj2JwTlvVRFSr.jpg",
    trailerId: "AMgy7jry7oo",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 11,
    title: "Gladiator",
    year: 2000,
    genres: ["Action", "Adventure", "Drama"],
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    rating: 8.5,
    duration: "2h 35m",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    keywords: ["rome", "colosseum", "revenge", "slavery", "emperor", "combat"],
    poster: "https://image.tmdb.org/t/p/w500/ty8T5iiYgB6g7s1p6d2N4qG2Z13.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1yG6LbsXc61G0QESo3.jpg",
    trailerId: "owK1dM1g0UM",
    watchProviders: ["Netflix", "Prime Video", "Apple TV"]
  },
  {
    id: 12,
    title: "John Wick",
    year: 2014,
    genres: ["Action", "Thriller"],
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    rating: 7.4,
    duration: "1h 41m",
    description: "An ex-assassin comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    keywords: ["assassin", "dog", "revenge", "neon", "gun-fu", "criminal underworld"],
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6NrQr6A3K59.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/m91yGE9fCcCe6NrQr6.jpg",
    trailerId: "w-HSoOFdJ3s",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 13,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genres: ["Action", "Sci-Fi", "Adventure", "Animation"],
    director: "Bob Persichetti",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    rating: 8.4,
    duration: "1h 57m",
    description: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    keywords: ["multiverse", "superhero", "comic book", "brooklyn", "family", "dimensions"],
    poster: "https://image.tmdb.org/t/p/w500/iiZZfoUnXgWdY8WwKj0C16v6tq4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iiZZfoUnXgWdY8WwK.jpg",
    trailerId: "tg52up16eq0",
    watchProviders: ["Disney+", "Apple TV"]
  },
  {
    id: 14,
    title: "The Silence of the Lambs",
    year: 1991,
    genres: ["Thriller", "Crime", "Drama"],
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    rating: 8.6,
    duration: "1h 58m",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    keywords: ["serial killer", "fbi", "psychological", "cannibal", "mind games", "investigation"],
    poster: "https://image.tmdb.org/t/p/w500/e1mj4ve2jeW7Sg2j6465z7HMz2Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/e1mj4ve2jeW7Sg2.jpg",
    trailerId: "W6Mm8Sowv4M",
    watchProviders: ["Prime Video", "Max"]
  },
  {
    id: 15,
    title: "Shutter Island",
    year: 2010,
    genres: ["Thriller", "Mystery", "Drama"],
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    rating: 8.2,
    duration: "2h 18m",
    description: "Teddy Daniels and his new partner Chuck Aule travel to a psychiatric facility on Shutter Island to investigate the disappearance of a patient, only to uncover dark truths.",
    keywords: ["asylum", "island", "illusion", "grief", "conspiracy", "detective", "twist"],
    poster: "https://image.tmdb.org/t/p/w500/2nqsOT2AqPkTW81bWaLRtjgjqVM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2nqsOT2AqPkTW81bW.jpg",
    trailerId: "5iaYLCip5QA",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 16,
    title: "Se7en",
    year: 1995,
    genres: ["Thriller", "Crime", "Mystery"],
    director: "David Fincher",
    cast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    rating: 8.6,
    duration: "2h 7m",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    keywords: ["serial killer", "rain", "detective", "deadly sins", "darkness", "noir"],
    poster: "https://image.tmdb.org/t/p/w500/69ghzc535mZ73h4b5mZ7o46O3q.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/69ghzc535mZ73h4b.jpg",
    trailerId: "znmZoKe5pdM",
    watchProviders: ["Netflix", "Max"]
  },
  {
    id: 17,
    title: "Gone Girl",
    year: 2014,
    genres: ["Thriller", "Mystery", "Drama"],
    director: "David Fincher",
    cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"],
    rating: 8.1,
    duration: "2h 29m",
    description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected he may not be innocent.",
    keywords: ["missing person", "marriage", "manipulation", "media", "betrayal", "diary"],
    poster: "https://image.tmdb.org/t/p/w500/qy5iK2tZ9bJ6H1uT1Y3J1WlY3Y4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qy5iK2tZ9bJ6H1uT1.jpg",
    trailerId: "2-_-1nJf8Vg",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 18,
    title: "Pride & Prejudice",
    year: 2005,
    genres: ["Romance", "Drama"],
    director: "Joe Wright",
    cast: ["Keira Knightley", "Matthew Macfadyen", "Brenda Blethyn"],
    rating: 7.8,
    duration: "2h 9m",
    description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
    keywords: ["regency", "class", "family", "letter", "rain", "dance", "classic literature"],
    poster: "https://image.tmdb.org/t/p/w500/t28iOVMW7v2wJ91t1Kx6cE7528e.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/t28iOVMW7v2w.jpg",
    trailerId: "1dYv5uy1Rmc",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 19,
    title: "Titanic",
    year: 1997,
    genres: ["Romance", "Drama"],
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    rating: 7.9,
    duration: "3h 14m",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    keywords: ["shipwreck", "class divide", "tragedy", "painting", "iceberg", "sea"],
    poster: "https://image.tmdb.org/t/p/w500/9xjpa1vvwmFV2VEgVGLcQeH1mEg.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9xjpa1vvwmFV.jpg",
    trailerId: "kVrqfYjkTdQ",
    watchProviders: ["Netflix", "Prime Video", "Apple TV"]
  },
  {
    id: 20,
    title: "La La Land",
    year: 2016,
    genres: ["Romance", "Drama", "Music"],
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    rating: 8.0,
    duration: "2h 8m",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    keywords: ["musical", "jazz", "hollywood", "dreams", "love story", "piano", "dance"],
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoJeKS4rxdVd9dv5n.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uDO8zWDhfWwoJe.jpg",
    trailerId: "0pdqf4P9MB8",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 21,
    title: "About Time",
    year: 2013,
    genres: ["Romance", "Comedy", "Fantasy"],
    director: "Richard Curtis",
    cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
    rating: 7.8,
    duration: "2h 3m",
    description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out to be trickier than you think.",
    keywords: ["time travel", "family", "father-son", "wedding", "london", "sweet"],
    poster: "https://image.tmdb.org/t/p/w500/lpr7nPR1FkZ93kC1g4Z6Xh7879e.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/lpr7nPR1FkZ93.jpg",
    trailerId: "T7A810duHuw",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 22,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genres: ["Romance", "Sci-Fi", "Drama"],
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    rating: 8.3,
    duration: "1h 48m",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    keywords: ["memory deletion", "heartbreak", "subconscious", "indie", "train", "beach"],
    poster: "https://image.tmdb.org/t/p/w500/5p12cMOHgK69n6g3Vp12cH7879e.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5p12cMOHgK6.jpg",
    trailerId: "yE-f1alkq9I",
    watchProviders: ["Prime Video", "Apple TV"]
  },
  {
    id: 23,
    title: "Get Out",
    year: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    rating: 7.7,
    duration: "1h 44m",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception eventually reaches a boiling point.",
    keywords: ["social satire", "hypnosis", "suburbia", "escape", "conspiracy", "sunken place"],
    poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1E5baAaEse2.jpg",
    trailerId: "DzfpyUBx_Qw",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 24,
    title: "A Quiet Place",
    year: 2018,
    genres: ["Horror", "Sci-Fi", "Thriller"],
    director: "John Krasinski",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    rating: 7.5,
    duration: "1h 30m",
    description: "A family struggles for survival in a world where most humans have been killed by blind monsters with an ultra-sensitive sense of hearing.",
    keywords: ["monsters", "silence", "family", "survival", "deafness", "apocalypse"],
    poster: "https://image.tmdb.org/t/p/w500/nAU74HOv7w56Esbi4YJbC6m4m3J.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nAU74HOv7w5.jpg",
    trailerId: "WR7cc5t7tDc",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 25,
    title: "Hereditary",
    year: 2018,
    genres: ["Horror", "Mystery", "Drama"],
    director: "Ari Aster",
    cast: ["Toni Collette", "Milly Shapiro", "Gabriel Byrne"],
    rating: 7.3,
    duration: "2h 7m",
    description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    keywords: ["grief", "cult", "possession", "family secrets", "seance", "miniatures"],
    poster: "https://image.tmdb.org/t/p/w500/o0OCjJBDOCqv2uLYnxHcx781e6y.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/o0OCjJBDOC.jpg",
    trailerId: "V6wWKNjV24E",
    watchProviders: ["Prime Video", "Max"]
  },
  {
    id: 26,
    title: "The Conjuring",
    year: 2013,
    genres: ["Horror", "Mystery", "Thriller"],
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    rating: 7.5,
    duration: "1h 52m",
    description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    keywords: ["haunted house", "exorcism", "demons", "paranormal investigators", "1970s"],
    poster: "https://image.tmdb.org/t/p/w500/2E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2E5baAaEse2.jpg",
    trailerId: "k10ETZ25pd4",
    watchProviders: ["Netflix", "Max"]
  },
  {
    id: 27,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genres: ["Comedy", "Drama", "Adventure"],
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    rating: 8.1,
    duration: "1h 39m",
    description: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars with a concierge who is wrongly framed for murder.",
    keywords: ["concierge", "painting heist", "quirky", "symmetrical", "friendship", "pastel colors"],
    poster: "https://image.tmdb.org/t/p/w500/3E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3E5baAaEse.jpg",
    trailerId: "1Fg5iWmQjwk",
    watchProviders: ["Disney+", "Apple TV"]
  },
  {
    id: 28,
    title: "Superbad",
    year: 2007,
    genres: ["Comedy"],
    director: "Greg Mottola",
    cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
    rating: 7.6,
    duration: "1h 53m",
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-filled party goes awry.",
    keywords: ["high school", "friendship", "party", "fake id", "mclovin", "police officers"],
    poster: "https://image.tmdb.org/t/p/w500/4E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4E5baAaEse.jpg",
    trailerId: "4eaN5_y25pd",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 29,
    title: "The Hangover",
    year: 2009,
    genres: ["Comedy"],
    director: "Todd Phillips",
    cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    rating: 7.7,
    duration: "1h 40m",
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend.",
    keywords: ["las vegas", "bachelor party", "memory loss", "tiger", "wedding", "baby"],
    poster: "https://image.tmdb.org/t/p/w500/5E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5E5baAaEse.jpg",
    trailerId: "tcdUj-XYpdg",
    watchProviders: ["Netflix", "Max"]
  },
  {
    id: 30,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genres: ["Fantasy", "Adventure", "Action"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    rating: 8.8,
    duration: "2h 58m",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    keywords: ["ring", "elves", "wizards", "hobbits", "quest", "epic fantasy", "fellowship"],
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6oom5QYQ2y.jpg",
    trailerId: "V75dMMW2B4s",
    watchProviders: ["Max", "Prime Video"]
  },
  {
    id: 31,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    genres: ["Fantasy", "Adventure", "Family"],
    director: "Chris Columbus",
    cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    rating: 7.6,
    duration: "2h 32m",
    description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    keywords: ["magic", "wizard school", "friendship", "orphaned", "philosophers stone", "owl"],
    poster: "https://image.tmdb.org/t/p/w500/7E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7E5baAaEse.jpg",
    trailerId: "VyHV0BRKlK4",
    watchProviders: ["Max", "Apple TV"]
  },
  {
    id: 32,
    title: "Spirited Away",
    year: 2001,
    genres: ["Fantasy", "Animation", "Adventure", "Family"],
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    rating: 8.6,
    duration: "2h 5m",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    keywords: ["spirits", "bathhouse", "dragon", "curse", "anime", "parents", "Miyazaki"],
    poster: "https://image.tmdb.org/t/p/w500/8E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8E5baAaEse.jpg",
    trailerId: "ByXuk9QqQ4c",
    watchProviders: ["Max", "Netflix"]
  },
  {
    id: 33,
    title: "Knives Out",
    year: 2019,
    genres: ["Comedy", "Mystery", "Drama", "Thriller"],
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    rating: 7.9,
    duration: "2h 10m",
    description: "A detective investigates the death of the patriarch of an eccentric, combative family.",
    keywords: ["murder mystery", "inheritance", "detective", "wealthy family", "sweater", "mansion"],
    poster: "https://image.tmdb.org/t/p/w500/9E5baAaEse26fej7uHcjOgEE2t2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9E5baAaEse.jpg",
    trailerId: "qGqiHJTsRkQ",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 34,
    title: "Joker",
    year: 2019,
    genres: ["Drama", "Thriller", "Crime"],
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    rating: 8.4,
    duration: "2h 2m",
    description: "During the 1980s, a mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain in Gotham City.",
    keywords: ["joker", "gotham", "mental illness", "nihilism", "social decay", "origins"],
    poster: "https://image.tmdb.org/t/p/w500/udDclJoH4EfS8V90a9H9Fq5S0V6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/udDclJoH4EfS8V9.jpg",
    trailerId: "zAGVQLH_Xxk",
    watchProviders: ["Netflix", "Max"]
  },
  {
    id: 35,
    title: "The Prestige",
    year: 2006,
    genres: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    rating: 8.5,
    duration: "2h 10m",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    keywords: ["magic", "rivalry", "obsession", "tesla", "teleportation", "clones", "twist"],
    poster: "https://image.tmdb.org/t/p/w500/bdN3gceU6QgZgUBveqpLudDcl70.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bdN3gceU6Q.jpg",
    trailerId: "o4gHCmTQDxc",
    watchProviders: ["Prime Video", "Apple TV"]
  },
  {
    id: 36,
    title: "Fight Club",
    year: 1999,
    genres: ["Drama"],
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    rating: 8.8,
    duration: "2h 19m",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    keywords: ["insomnia", "alter-ego", "consumerism", "underground", "anarchy", "soap", "twist"],
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSpqUqThH8V4PZ1f2jWp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pB8BM7pdSpq.jpg",
    trailerId: "qtRbygYb23M",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 37,
    title: "Forrest Gump",
    year: 1994,
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    rating: 8.8,
    duration: "2h 22m",
    description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    keywords: ["historical events", "running", "shrimp", "vietnam war", "ping pong", "feather"],
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/arw2vcBve.jpg",
    trailerId: "bLvqoHBptjg",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 38,
    title: "Dune",
    year: 2021,
    genres: ["Sci-Fi", "Adventure", "Action"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    rating: 8.0,
    duration: "2h 35m",
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset, while its heir is troubled by visions of a dark future.",
    keywords: ["desert", "spice", "sandworms", "emperor", "prophecy", "nobility", "messiah"],
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/d5NXSklXo0.jpg",
    trailerId: "n9xhJrPX2sY",
    watchProviders: ["Max", "Netflix"]
  },
  {
    id: 39,
    title: "The Matrix",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    rating: 8.7,
    duration: "2h 16m",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    keywords: ["simulation", "hacker", "red pill", "dystopia", "kung-fu", "trench coat", "bullets"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/f89U3ADr1o.jpg",
    trailerId: "vKQi3bBA1y8",
    watchProviders: ["Netflix", "Max"]
  },
  {
    id: 40,
    title: "Ex Machina",
    year: 2014,
    genres: ["Sci-Fi", "Thriller", "Drama"],
    director: "Alex Garland",
    cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"],
    rating: 7.7,
    duration: "1h 48m",
    description: "A programmer at a huge Internet-search giant wins a competition to spend a week at the private mountain estate of the company's brilliant and reclusive CEO, only to test a highly advanced humanoid AI.",
    keywords: ["artificial intelligence", "turing test", "manipulation", "android", "seclusion", "dance"],
    poster: "https://image.tmdb.org/t/p/w500/e5N3gceU6QgZgUBveqpLudDcl70.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/e5N3gceU6Q.jpg",
    trailerId: "EoCxA8286eq",
    watchProviders: ["Max", "Prime Video"]
  },
  {
    id: 41,
    title: "Avatar: The Way of Water",
    year: 2022,
    genres: ["Action", "Sci-Fi", "Adventure", "Fantasy"],
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    rating: 7.6,
    duration: "3h 12m",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    keywords: ["pandora", "ocean", "aliens", "whales", "family protection", "colonization"],
    poster: "https://image.tmdb.org/t/p/w500/t6AHv1H11mOxiwSA5n54psavGIz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/t6AHv1H11mO.jpg",
    trailerId: "d9MyW72iW1e",
    watchProviders: ["Disney+", "Max"]
  },
  {
    id: 42,
    title: "Top Gun: Maverick",
    year: 2022,
    genres: ["Action", "Drama"],
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    rating: 8.3,
    duration: "2h 10m",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice.",
    keywords: ["fighter jets", "instructor", "son", "speed", "sacrifice", "beach football", "military"],
    poster: "https://image.tmdb.org/t/p/w500/62HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/62HCn2IEQ2y.jpg",
    trailerId: "g4U4kqme3aY",
    watchProviders: ["Prime Video", "Max"]
  },
  {
    id: 43,
    title: "Her",
    year: 2013,
    genres: ["Romance", "Sci-Fi", "Drama"],
    director: "Spike Jonze",
    cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"],
    rating: 8.0,
    duration: "2h 6m",
    description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    keywords: ["operating system", "loneliness", "future", "artificial intelligence", "love", "mustache"],
    poster: "https://image.tmdb.org/t/p/w500/72HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/72HCn2IEQ2y.jpg",
    trailerId: "6QRvTv_tpw0",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 44,
    title: "500 Days of Summer",
    year: 2009,
    genres: ["Romance", "Comedy", "Drama"],
    director: "Marc Webb",
    cast: ["Joseph Gordon-Levitt", "Zooey Deschanel", "Geoffrey Arend"],
    rating: 7.7,
    duration: "1h 35m",
    description: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.",
    keywords: ["non-linear", "heartbreak", "architect", "ikea", "expectations-vs-reality"],
    poster: "https://image.tmdb.org/t/p/w500/82HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/82HCn2IEQ2y.jpg",
    trailerId: "g3b11g18eq0",
    watchProviders: ["Disney+", "Apple TV"]
  },
  {
    id: 45,
    title: "The Shining",
    year: 1980,
    genres: ["Horror", "Drama"],
    director: "Stanley Kubrick",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    rating: 8.4,
    duration: "2h 26m",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    keywords: ["hotel", "winter", "cabin fever", "psychic abilities", "maze", "ghosts", "axe"],
    poster: "https://image.tmdb.org/t/p/w500/92HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/92HCn2IEQ2y.jpg",
    trailerId: "S0144G55v4M",
    watchProviders: ["Max", "Prime Video"]
  },
  {
    id: 46,
    title: "Shaun of the Dead",
    year: 2004,
    genres: ["Comedy", "Horror"],
    director: "Edgar Wright",
    cast: ["Simon Pegg", "Nick Frost", "Kate Ashfield"],
    rating: 7.9,
    duration: "1h 39m",
    description: "A man's uneventful life is disrupted by the zombie apocalypse. He decides to rescue his mother and girlfriend, and seek safety in his favorite pub.",
    keywords: ["zombies", "parody", "friendship", "pub", "records", "london", "cornetto"],
    poster: "https://image.tmdb.org/t/p/w500/a2HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/a2HCn2IEQ2y.jpg",
    trailerId: "LIFy33fPDX8",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 47,
    title: "Free Guy",
    year: 2021,
    genres: ["Comedy", "Action", "Sci-Fi", "Fantasy"],
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Jodie Comer", "Taika Waititi"],
    rating: 7.1,
    duration: "1h 55m",
    description: "A bank teller discovers that he's actually a background player in an open-world video game, and decides to become the hero of his own story.",
    keywords: ["video game", "npc", "simulation", "programmer", "romance", "hero"],
    poster: "https://image.tmdb.org/t/p/w500/b2HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b2HCn2IEQ2y.jpg",
    trailerId: "X2m-08cM0gY",
    watchProviders: ["Disney+", "Max"]
  },
  {
    id: 48,
    title: "Psycho",
    year: 1960,
    genres: ["Horror", "Thriller", "Mystery"],
    director: "Alfred Hitchcock",
    cast: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
    rating: 8.5,
    duration: "1h 49m",
    description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    keywords: ["motel", "shower scene", "split personality", "embezzlement", "classic", "black and white"],
    poster: "https://image.tmdb.org/t/p/w500/c2HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/c2HCn2IEQ2y.jpg",
    trailerId: "DTJOl8i8eq0",
    watchProviders: ["Netflix", "Prime Video"]
  },
  {
    id: 49,
    title: "Knives Out: Glass Onion",
    year: 2022,
    genres: ["Comedy", "Mystery", "Drama", "Thriller"],
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Edward Norton", "Janelle Monáe"],
    rating: 7.1,
    duration: "2h 19m",
    description: "Famed Southern detective Benoit Blanc travels to Greece for his latest case, peeling back the layers of a mystery involving a tech billionaire and his eclectic crew of friends.",
    keywords: ["greece", "tech billionaire", "murder mystery", "puzzle", "island", "glass dome"],
    poster: "https://image.tmdb.org/t/p/w500/d2HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/d2HCn2IEQ2y.jpg",
    trailerId: "lf810duHuwY",
    watchProviders: ["Netflix"]
  },
  {
    id: 50,
    title: "Princess Mononoke",
    year: 1997,
    genres: ["Fantasy", "Animation", "Adventure", "Action"],
    director: "Hayao Miyazaki",
    cast: ["Yōji Matsuda", "Yuriko Ishida", "Yūko Tanaka"],
    rating: 8.4,
    duration: "2h 14m",
    description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    keywords: ["forest gods", "industrialization", "wolves", "curse", "anime", "environment", "Miyazaki"],
    poster: "https://image.tmdb.org/t/p/w500/e2HCn2IEQ2yE1Rv2yE1Rv2yE1Rv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/e2HCn2IEQ2y.jpg",
    trailerId: "4OiM_AFkKl8",
    watchProviders: ["Max", "Netflix"]
  },
  {
    id: 51,
    title: "RRR",
    year: 2022,
    genres: ["Indian Cinema", "Action", "Drama", "Adventure"],
    director: "S. S. Rajamouli",
    cast: ["N. T. Rama Rao Jr.", "Ram Charan", "Ajay Devgn", "Alia Bhatt"],
    rating: 8.0,
    duration: "3h 7m",
    description: "Two legendary revolutionaries form a fierce friendship while fighting the forces of the British Raj in this maximalist action epic.",
    keywords: ["telugu", "friendship", "revolution", "british raj", "period drama", "dance", "epic"],
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    backdrop: "",
    trailerId: "NgBoMJy386M",
    watchProviders: ["Netflix", "ZEE5"]
  },
  {
    id: 52,
    title: "3 Idiots",
    year: 2009,
    genres: ["Indian Cinema", "Comedy", "Drama"],
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor Khan"],
    rating: 8.4,
    duration: "2h 50m",
    description: "Three engineering students challenge an education system built on pressure, rankings, and fear while chasing a more honest idea of success.",
    keywords: ["college", "friendship", "engineering", "education", "comedy", "coming of age", "bollywood"],
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    backdrop: "",
    trailerId: "K0eDlFX9GMc",
    watchProviders: ["Prime Video", "Netflix"]
  },
  {
    id: 53,
    title: "Dangal",
    year: 2016,
    genres: ["Indian Cinema", "Drama", "Sports", "Biography"],
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra", "Sakshi Tanwar"],
    rating: 8.3,
    duration: "2h 41m",
    description: "A former wrestler trains his daughters to compete on the world stage, pushing against social expectations and his own limits.",
    keywords: ["wrestling", "family", "sports", "training", "haryana", "biography", "bollywood"],
    poster: "",
    backdrop: "",
    trailerId: "x_7YlGv9u1g",
    watchProviders: ["Netflix", "Apple TV"]
  },
  {
    id: 54,
    title: "Baahubali: The Beginning",
    year: 2015,
    genres: ["Indian Cinema", "Action", "Fantasy", "Adventure"],
    director: "S. S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah Bhatia"],
    rating: 8.0,
    duration: "2h 39m",
    description: "A fearless young man discovers his royal lineage and a kingdom shaped by betrayal, spectacle, and mythic power.",
    keywords: ["telugu", "kingdom", "mythology", "war", "fantasy", "epic", "royalty"],
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
    backdrop: "",
    trailerId: "VdafjyFK3ko",
    watchProviders: ["Netflix", "Disney+ Hotstar"]
  },
  {
    id: 55,
    title: "K.G.F: Chapter 1",
    year: 2018,
    genres: ["Indian Cinema", "Action", "Drama", "Crime"],
    director: "Prashanth Neel",
    cast: ["Yash", "Srinidhi Shetty", "Anant Nag", "Ramachandra Raju"],
    rating: 8.2,
    duration: "2h 36m",
    description: "An ambitious outsider rises through the violent gold fields of Kolar, turning survival into legend.",
    keywords: ["kannada", "gold fields", "gangster", "rise to power", "period action", "mass"],
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/K.G.F_Chapter_1_poster.jpg",
    backdrop: "",
    trailerId: "",
    trailerUrl: "https://www.youtube.com/results?search_query=K.G.F+Chapter+1+official+trailer",
    watchProviders: ["Prime Video"]
  },
  {
    id: 56,
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genres: ["Indian Cinema", "Romance", "Drama", "Comedy"],
    director: "Aditya Chopra",
    cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri", "Farida Jalal"],
    rating: 8.0,
    duration: "3h 9m",
    description: "Raj and Simran fall in love across Europe, then fight for that love within family, tradition, and duty.",
    keywords: ["bollywood", "romance", "family", "tradition", "europe", "wedding", "classic"],
    poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
    backdrop: "",
    trailerId: "c25GKl5VNeY",
    watchProviders: ["Prime Video", "Apple TV"]
  },
  {
    id: 57,
    title: "Sholay",
    year: 1975,
    genres: ["Indian Cinema", "Action", "Adventure", "Drama"],
    director: "Ramesh Sippy",
    cast: ["Amitabh Bachchan", "Dharmendra", "Hema Malini", "Amjad Khan"],
    rating: 8.1,
    duration: "3h 24m",
    description: "Two small-time criminals are hired to capture a ruthless bandit in one of Indian cinema's defining action dramas.",
    keywords: ["bollywood", "western", "bandit", "friendship", "revenge", "classic", "village"],
    poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg",
    backdrop: "",
    trailerId: "",
    trailerUrl: "https://www.youtube.com/results?search_query=Sholay+official+trailer",
    watchProviders: ["Prime Video", "Apple TV"]
  },
  {
    id: 58,
    title: "Gully Boy",
    year: 2019,
    genres: ["Indian Cinema", "Drama", "Music"],
    director: "Zoya Akhtar",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi", "Vijay Varma"],
    rating: 7.9,
    duration: "2h 34m",
    description: "A Mumbai street rapper turns rage, class pressure, and ambition into a voice loud enough to change his life.",
    keywords: ["bollywood", "mumbai", "rap", "music", "underdog", "class", "hip hop"],
    poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
    backdrop: "",
    trailerId: "JfbxcD6biOk",
    watchProviders: ["Prime Video", "Netflix"]
  }
];

// Predefined Persona Ratings for Collaborative Filtering (simulated other users)
const personas = {
  "Action Fanatic": {
    1: 3.5, // Interstellar
    2: 4.5, // Inception
    3: 5.0, // Dark Knight
    4: 5.0, // Mad Max
    5: 3.0, // Shawshank
    6: 3.5, // Godfather
    7: 2.0, // Parasite
    11: 5.0, // Gladiator
    12: 5.0, // John Wick
    13: 4.5, // Into the Spiderverse
    15: 3.0, // Shutter Island
    18: 1.0, // Pride & Prejudice
    19: 2.0, // Titanic
    20: 1.5, // La La Land
    21: 1.0, // About Time
    28: 4.0, // Superbad
    29: 4.5, // Hangover
    30: 4.5, // Lord of the Rings
    38: 4.5, // Dune
    39: 5.0, // Matrix
    41: 4.5, // Avatar 2
    42: 5.0, // Top Gun
    46: 4.0, // Shaun of the Dead
    47: 4.5, // Free Guy
  },
  "Cinephile Critic": {
    1: 4.0, // Interstellar
    2: 4.0, // Inception
    3: 4.5, // Dark Knight
    5: 5.0, // Shawshank
    6: 5.0, // Godfather
    7: 5.0, // Parasite
    8: 5.0, // Whiplash
    9: 4.5, // Blade Runner 2049
    10: 4.5, // Arrival
    14: 5.0, // Silence of the Lambs
    15: 4.0, // Shutter Island
    16: 5.0, // Se7en
    17: 4.0, // Gone Girl
    20: 4.0, // La La Land
    22: 4.5, // Eternal Sunshine
    23: 4.5, // Get Out
    25: 4.0, // Hereditary
    27: 4.5, // Grand Budapest Hotel
    32: 5.0, // Spirited Away
    33: 4.0, // Knives Out
    34: 3.5, // Joker
    35: 4.5, // Prestige
    36: 4.5, // Fight Club
    40: 4.0, // Ex Machina
    43: 4.5, // Her
    45: 4.5, // Shining
    48: 5.0, // Psycho
    50: 5.0, // Princess Mononoke
  },
  "Sci-Fi Explorer": {
    1: 5.0, // Interstellar
    2: 5.0, // Inception
    3: 4.0, // Dark Knight
    4: 4.5, // Mad Max
    9: 5.0, // Blade Runner 2049
    10: 5.0, // Arrival
    13: 4.5, // Spiderverse
    15: 3.5, // Shutter Island
    21: 4.0, // About Time
    22: 4.5, // Eternal Sunshine
    24: 4.0, // A Quiet Place
    30: 4.0, // Lord of the Rings
    31: 3.5, // Harry Potter
    35: 4.5, // Prestige
    38: 5.0, // Dune
    39: 5.0, // Matrix
    40: 5.0, // Ex Machina
    41: 4.5, // Avatar 2
    43: 4.5, // Her
    47: 4.0, // Free Guy
  },
  "Romance Dreamer": {
    1: 4.0, // Interstellar
    5: 4.0, // Shawshank
    8: 2.0, // Whiplash
    12: 1.5, // John Wick
    18: 5.0, // Pride & Prejudice
    19: 5.0, // Titanic
    20: 5.0, // La La Land
    21: 5.0, // About Time
    22: 4.5, // Eternal Sunshine
    27: 4.0, // Grand Budapest
    28: 3.0, // Superbad
    31: 4.5, // Harry Potter
    32: 4.5, // Spirited Away
    37: 5.0, // Forrest Gump
    43: 4.5, // Her
    44: 4.5, // 500 Days of Summer
    47: 4.0, // Free Guy
  },
  "Horror Buff": {
    2: 3.5, // Inception
    14: 4.5, // Silence of the Lambs
    15: 4.0, // Shutter Island
    16: 4.5, // Se7en
    23: 5.0, // Get Out
    24: 5.0, // A Quiet Place
    25: 5.0, // Hereditary
    26: 5.0, // Conjuring
    34: 4.0, // Joker
    36: 4.0, // Fight Club
    45: 5.0, // Shining
    46: 4.5, // Shaun of the Dead
    48: 4.5, // Psycho
  },
  "Indian Cinema Lover": {
    1: 4.0, // Interstellar
    4: 4.0, // Mad Max
    7: 4.5, // Parasite
    20: 4.0, // La La Land
    27: 4.0, // Grand Budapest
    30: 4.5, // Lord of the Rings
    37: 4.5, // Forrest Gump
    51: 5.0, // RRR
    52: 5.0, // 3 Idiots
    53: 5.0, // Dangal
    54: 4.5, // Baahubali
    55: 4.5, // K.G.F
    56: 5.0, // DDLJ
    57: 4.5, // Sholay
    58: 4.5, // Gully Boy
  }
};

export { movies, personas };
