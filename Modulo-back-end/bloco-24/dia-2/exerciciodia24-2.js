use ("filmes");
db.movies.insertMany(
    [
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
],
);


db.movies.updateOne(
  {title: "Batman"},
  { $push:
      { category: "Gago" },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  { $push: {
      category: {
        $each: [
          "villain", "comic-based"
        ],
      },
    },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  { $pull: {
      category: "action"
    },
  },
);


db.movies.updateMany(
  {title: { $in: ["Batman", "Home Alone"] }},
  { $push: { category: "90's" } }
);

db.movies.updateOne(
  { title: "Home Alone" },
  { $set: {
      cast: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          },
      ],
    },
  },
);

db.movies.updateOne(
  { title: "Batman" },
  { $set: {
      cast: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          },
      ],
    },
  },
);
db.movies.find();