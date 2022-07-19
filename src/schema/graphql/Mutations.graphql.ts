import gql from "graphql-tag";

export const createAnimal = gql`
  mutation CreateAnimal($species: String!, $favoriteFood: String!) {
    createAnimal(species: $species, favoriteFood: $favoriteFood) {
      species
      favoriteFood
    }
  }
`;

export const updateAnimal = gql`
  mutation UpdateAnimal($id: ID!, $species: String!, $favoriteFood: String!) {
    updateAnimal(id: $id, species: $species, favoriteFood: $favoriteFood)
  }
`;

export const deleteAnimal = gql`
  mutation DeleteAnimal($id: ID!) {
    deleteAnimal(id: $id)
  }
`;

export const createBlogAuthor = gql`
  mutation CreateBlogAuthor($name: String!) {
    createBlogAuthor(name: $name) {
      name
    }
  }
`;

export const updateBlogAuthor = gql`
  mutation UpdateBlogAuthor($id: ID!, $name: String!) {
    updateBlogAuthor(id: $id, name: $name)
  }
`;

export const deleteBlogAuthor = gql`
  mutation DeleteBlogAuthor($id: ID!) {
    deleteBlogAuthor(id: $id)
  }
`;

export const createBlogPost = gql`
  mutation CreateBlogPost($title: String!, $content: String!, $blogAuthorId: ID!) {
    createBlogPost(title: $title, content: $content, blogAuthorId: $blogAuthorId) 
    {
      title
      content
      blogAuthorId
    }
  }
`;

export const updateBlogPost = gql`
  mutation UpdateBlogPost($id: ID!,$title: String!, $content: String!, $blogAuthorId: ID!) {
    updateBlogPost(id: $id,title: $title, content: $content, blogAuthorId: $blogAuthorId)
  }
`;

export const deleteBlogPost = gql`
  mutation DeleteBlogPost($id: ID!) {
    deleteBlogPost(id: $id)
  }
`;

export const createBlogComment = gql`
  mutation CreateBlogComment($content: String!, $blogAuthorId: ID!, $blogPostId: ID!) {
    createBlogComment(content: $content, blogAuthorId: $blogAuthorId, blogPostId: $blogPostId) 
    {
      content
      blogAuthorId
      blogPostId
    }
  }
`;

export const updateBlogComment = gql`
  mutation UpdateBlogComment($id: ID!,$content: String!, $blogAuthorId: ID!, $blogPostId: ID!) {
    updateBlogComment(id: $id,content: $content, blogAuthorId: $blogAuthorId, blogPostId: $blogPostId)
  }
`;

export const deleteBlogComment = gql`
  mutation DeleteBlogComment($id: ID!) {
    deleteBlogComment(id: $id)
  }
`;
