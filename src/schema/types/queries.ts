import gql from "graphql-tag";

export const queries = gql`
  type Query {
    animal(id: ID!): Animal
    animals: [Animal]!
    blogAuthor(id: ID!): BlogAuthor
    blogAuthors: [BlogAuthor]!
    blogPost(id: ID!): BlogPost
    blogPosts: [BlogPost]!
    blogComment(id: ID!): BlogComment
    blogComments: [BlogComment]!
  }
`;
