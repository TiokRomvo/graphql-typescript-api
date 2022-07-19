import gql from "graphql-tag";

export const getAnimal = gql`
  query GetAnimal($id: ID!) {
    animal(id: $id) {
      id
      species
      favoriteFood
    }
  }
`;

export const getAnimals = gql`
  query GetAnimals {
    animals {
      id
      species
      favoriteFood
    }
  }
`;

export const getBlogAuthor = gql`
  query GetBlogAuthor($id: ID!) {
    blogAuthor(id: $id) {
      id
    }
  }
`;

export const getBlogAuthors = gql`
  query GetBlogAuthors {
    blogAuthors {
      id
    }
  }
`;

export const getBlogPost = gql`
  query GetBlogPost($id: ID!) {
    blogPost(id: $id) {
      id
    }
  }
`;

export const getBlogPosts = gql`
  query GetBlogPosts {
    blogPosts {
      id
    }
  }
`;

export const getBlogComment = gql`
  query GetBlogComment($id: ID!) {
    blogComment(id: $id) {
      id
    }
  }
`;

export const getBlogComments = gql`
  query GetBlogComments {
    blogComments {
      id
    }
  }
`;
