import gql from "graphql-tag";

export const types = gql`
  type Animal {
    id: ID!
    species: String!
    favoriteFood: String!
  },
  type BlogPost {
    id: ID!
    title: String!
    content: String!
    blogAuthor: BlogAuthor
    blogAuthorId: ID!
    blogComments: [BlogComment]
  },
  type BlogComment {
    id: ID!
    content: String!
    blogAuthorId: ID!
    blogPostId: ID!
    blogPost: BlogPost
    blogAuthor: BlogAuthor
  },
  type BlogAuthor {
    id: ID!
    name: ID!
    blogComments: [BlogComment]
    blogPosts: [BlogPost]
  }
`;
