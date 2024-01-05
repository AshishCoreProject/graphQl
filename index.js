import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//types
import { typeDefs } from "./schema.js";

//db
import { games, authors, reviews } from "./db.js";

//Resolver function
const resolvers = {
  Query: {
    games() {
      return games;
    },
    authors() {
      return authors;
    },
    author(_, args) {
      return authors.find((singleAuthor) => singleAuthor.id === args.id);
    },
    reviews() {
      return reviews;
    },
    review(_, args) {
      return reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return games.find((singleGame) => singleGame.id === args.id);
    },
  },

  Game: {
    reviews(parent) {
      reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      reviews.filter((r) => r.author_id === parent.id);
    },
  },

  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },

  Mutation: {
    deleteGame(_, args) {
      games = games.filter((game) => game.id !== args.id);
      return games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      games.push(game);
      return game;
    },
  },
};

//Server SetUp
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log("Server ready at port", 4000);
