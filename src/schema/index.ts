import { makeExecutableSchema } from "graphql-tools";
import { animals, blogAuthors, blogComments, blogPosts } from "./resolvers";
import { types, queries, mutations } from "./types";

export const schema = makeExecutableSchema({
  typeDefs: [types, queries, mutations],
  resolvers: [animals, blogAuthors, blogComments, blogPosts],
});
