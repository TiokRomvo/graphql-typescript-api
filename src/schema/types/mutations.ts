import gql from "graphql-tag";

export const mutations = gql`
  type Mutation {
    createAnimal(species: String!, favoriteFood: String!): Animal!
    updateAnimal(id: ID!, species: String!, favoriteFood: String!): Boolean!
    deleteAnimal(id: ID!): Boolean!
    
    createBlogAuthor(name: String!): BlogAuthor!
    updateBlogAuthor(id: ID!, name: String!): Boolean!
    deleteBlogAuthor(id: ID!): Boolean!

    createBlogPost(title: String!, content: String!, blogAuthorId: ID!): BlogPost!
    updateBlogPost(id: ID!, title: String!, content: String!, blogAuthorId: ID!): Boolean!
    deleteBlogPost(id: ID!): Boolean!

    createBlogComment(content: String!, blogAuthorId: ID!, blogPostId: ID!): BlogComment!
    updateBlogComment(id: ID!, content: String!, blogAuthorId: ID!, blogPostId: ID!): Boolean!
    deleteBlogComment(id: ID!): Boolean!
  }
`;
