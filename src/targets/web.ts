import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};

export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  id: Scalars['ID'];
  name: Scalars['ID'];
  blogComments?: Maybe<Array<Maybe<BlogComment>>>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
};

export type BlogComment = {
  __typename?: 'BlogComment';
  id: Scalars['ID'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
  blogPostId: Scalars['ID'];
  blogPost?: Maybe<BlogPost>;
  blogAuthor?: Maybe<BlogAuthor>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  blogAuthor?: Maybe<BlogAuthor>;
  blogAuthorId: Scalars['ID'];
  blogComments?: Maybe<Array<Maybe<BlogComment>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimal: Animal;
  updateAnimal: Scalars['Boolean'];
  deleteAnimal: Scalars['Boolean'];
  createBlogAuthor: BlogAuthor;
  updateBlogAuthor: Scalars['Boolean'];
  deleteBlogAuthor: Scalars['Boolean'];
  createBlogPost: BlogPost;
  updateBlogPost: Scalars['Boolean'];
  deleteBlogPost: Scalars['Boolean'];
  createBlogComment: BlogComment;
  updateBlogComment: Scalars['Boolean'];
  deleteBlogComment: Scalars['Boolean'];
};


export type MutationCreateAnimalArgs = {
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationUpdateAnimalArgs = {
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationDeleteAnimalArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBlogAuthorArgs = {
  name: Scalars['String'];
};


export type MutationUpdateBlogAuthorArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationDeleteBlogAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBlogPostArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
};


export type MutationUpdateBlogPostArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
};


export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBlogCommentArgs = {
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
  blogPostId: Scalars['ID'];
};


export type MutationUpdateBlogCommentArgs = {
  id: Scalars['ID'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
  blogPostId: Scalars['ID'];
};


export type MutationDeleteBlogCommentArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  animal?: Maybe<Animal>;
  animals: Array<Maybe<Animal>>;
  blogAuthor?: Maybe<BlogAuthor>;
  blogAuthors: Array<Maybe<BlogAuthor>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts: Array<Maybe<BlogPost>>;
  blogComment?: Maybe<BlogComment>;
  blogComments: Array<Maybe<BlogComment>>;
};


export type QueryAnimalArgs = {
  id: Scalars['ID'];
};


export type QueryBlogAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};


export type QueryBlogCommentArgs = {
  id: Scalars['ID'];
};

export type CreateAnimalMutationVariables = Exact<{
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type CreateAnimalMutation = (
  { __typename?: 'Mutation' }
  & { createAnimal: (
    { __typename?: 'Animal' }
    & Pick<Animal, 'species' | 'favoriteFood'>
  ) }
);

export type UpdateAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type UpdateAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateAnimal'>
);

export type DeleteAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAnimal'>
);

export type CreateBlogAuthorMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateBlogAuthorMutation = (
  { __typename?: 'Mutation' }
  & { createBlogAuthor: (
    { __typename?: 'BlogAuthor' }
    & Pick<BlogAuthor, 'name'>
  ) }
);

export type UpdateBlogAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
}>;


export type UpdateBlogAuthorMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBlogAuthor'>
);

export type DeleteBlogAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBlogAuthorMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBlogAuthor'>
);

export type CreateBlogPostMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
}>;


export type CreateBlogPostMutation = (
  { __typename?: 'Mutation' }
  & { createBlogPost: (
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'title' | 'content' | 'blogAuthorId'>
  ) }
);

export type UpdateBlogPostMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
}>;


export type UpdateBlogPostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBlogPost'>
);

export type DeleteBlogPostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBlogPostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBlogPost'>
);

export type CreateBlogCommentMutationVariables = Exact<{
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
  blogPostId: Scalars['ID'];
}>;


export type CreateBlogCommentMutation = (
  { __typename?: 'Mutation' }
  & { createBlogComment: (
    { __typename?: 'BlogComment' }
    & Pick<BlogComment, 'content' | 'blogAuthorId' | 'blogPostId'>
  ) }
);

export type UpdateBlogCommentMutationVariables = Exact<{
  id: Scalars['ID'];
  content: Scalars['String'];
  blogAuthorId: Scalars['ID'];
  blogPostId: Scalars['ID'];
}>;


export type UpdateBlogCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBlogComment'>
);

export type DeleteBlogCommentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBlogCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBlogComment'>
);

export type GetAnimalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAnimalQuery = (
  { __typename?: 'Query' }
  & { animal?: Maybe<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  )> }
);

export type GetAnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimalsQuery = (
  { __typename?: 'Query' }
  & { animals: Array<Maybe<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  )>> }
);

export type GetBlogAuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogAuthorQuery = (
  { __typename?: 'Query' }
  & { blogAuthor?: Maybe<(
    { __typename?: 'BlogAuthor' }
    & Pick<BlogAuthor, 'id'>
  )> }
);

export type GetBlogAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogAuthorsQuery = (
  { __typename?: 'Query' }
  & { blogAuthors: Array<Maybe<(
    { __typename?: 'BlogAuthor' }
    & Pick<BlogAuthor, 'id'>
  )>> }
);

export type GetBlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogPostQuery = (
  { __typename?: 'Query' }
  & { blogPost?: Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'id'>
  )> }
);

export type GetBlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPostsQuery = (
  { __typename?: 'Query' }
  & { blogPosts: Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'id'>
  )>> }
);

export type GetBlogCommentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogCommentQuery = (
  { __typename?: 'Query' }
  & { blogComment?: Maybe<(
    { __typename?: 'BlogComment' }
    & Pick<BlogComment, 'id'>
  )> }
);

export type GetBlogCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogCommentsQuery = (
  { __typename?: 'Query' }
  & { blogComments: Array<Maybe<(
    { __typename?: 'BlogComment' }
    & Pick<BlogComment, 'id'>
  )>> }
);


export const CreateAnimalDocument = gql`
    mutation CreateAnimal($species: String!, $favoriteFood: String!) {
  createAnimal(species: $species, favoriteFood: $favoriteFood) {
    species
    favoriteFood
  }
}
    `;
export type CreateAnimalMutationFn = ApolloReactCommon.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;
export type CreateAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>
    } & TChildProps;
export function withCreateAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnimalMutation,
  CreateAnimalMutationVariables,
  CreateAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnimalMutation, CreateAnimalMutationVariables, CreateAnimalProps<TChildProps, TDataName>>(CreateAnimalDocument, {
      alias: 'createAnimal',
      ...operationOptions
    });
};
export type CreateAnimalMutationResult = ApolloReactCommon.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const UpdateAnimalDocument = gql`
    mutation UpdateAnimal($id: ID!, $species: String!, $favoriteFood: String!) {
  updateAnimal(id: $id, species: $species, favoriteFood: $favoriteFood)
}
    `;
export type UpdateAnimalMutationFn = ApolloReactCommon.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export type UpdateAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>
    } & TChildProps;
export function withUpdateAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnimalMutation,
  UpdateAnimalMutationVariables,
  UpdateAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnimalMutation, UpdateAnimalMutationVariables, UpdateAnimalProps<TChildProps, TDataName>>(UpdateAnimalDocument, {
      alias: 'updateAnimal',
      ...operationOptions
    });
};
export type UpdateAnimalMutationResult = ApolloReactCommon.MutationResult<UpdateAnimalMutation>;
export type UpdateAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export const DeleteAnimalDocument = gql`
    mutation DeleteAnimal($id: ID!) {
  deleteAnimal(id: $id)
}
    `;
export type DeleteAnimalMutationFn = ApolloReactCommon.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export type DeleteAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>
    } & TChildProps;
export function withDeleteAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnimalMutation,
  DeleteAnimalMutationVariables,
  DeleteAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnimalMutation, DeleteAnimalMutationVariables, DeleteAnimalProps<TChildProps, TDataName>>(DeleteAnimalDocument, {
      alias: 'deleteAnimal',
      ...operationOptions
    });
};
export type DeleteAnimalMutationResult = ApolloReactCommon.MutationResult<DeleteAnimalMutation>;
export type DeleteAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export const CreateBlogAuthorDocument = gql`
    mutation CreateBlogAuthor($name: String!) {
  createBlogAuthor(name: $name) {
    name
  }
}
    `;
export type CreateBlogAuthorMutationFn = ApolloReactCommon.MutationFunction<CreateBlogAuthorMutation, CreateBlogAuthorMutationVariables>;
export type CreateBlogAuthorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBlogAuthorMutation, CreateBlogAuthorMutationVariables>
    } & TChildProps;
export function withCreateBlogAuthor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBlogAuthorMutation,
  CreateBlogAuthorMutationVariables,
  CreateBlogAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBlogAuthorMutation, CreateBlogAuthorMutationVariables, CreateBlogAuthorProps<TChildProps, TDataName>>(CreateBlogAuthorDocument, {
      alias: 'createBlogAuthor',
      ...operationOptions
    });
};
export type CreateBlogAuthorMutationResult = ApolloReactCommon.MutationResult<CreateBlogAuthorMutation>;
export type CreateBlogAuthorMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogAuthorMutation, CreateBlogAuthorMutationVariables>;
export const UpdateBlogAuthorDocument = gql`
    mutation UpdateBlogAuthor($id: ID!, $name: String!) {
  updateBlogAuthor(id: $id, name: $name)
}
    `;
export type UpdateBlogAuthorMutationFn = ApolloReactCommon.MutationFunction<UpdateBlogAuthorMutation, UpdateBlogAuthorMutationVariables>;
export type UpdateBlogAuthorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBlogAuthorMutation, UpdateBlogAuthorMutationVariables>
    } & TChildProps;
export function withUpdateBlogAuthor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBlogAuthorMutation,
  UpdateBlogAuthorMutationVariables,
  UpdateBlogAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBlogAuthorMutation, UpdateBlogAuthorMutationVariables, UpdateBlogAuthorProps<TChildProps, TDataName>>(UpdateBlogAuthorDocument, {
      alias: 'updateBlogAuthor',
      ...operationOptions
    });
};
export type UpdateBlogAuthorMutationResult = ApolloReactCommon.MutationResult<UpdateBlogAuthorMutation>;
export type UpdateBlogAuthorMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBlogAuthorMutation, UpdateBlogAuthorMutationVariables>;
export const DeleteBlogAuthorDocument = gql`
    mutation DeleteBlogAuthor($id: ID!) {
  deleteBlogAuthor(id: $id)
}
    `;
export type DeleteBlogAuthorMutationFn = ApolloReactCommon.MutationFunction<DeleteBlogAuthorMutation, DeleteBlogAuthorMutationVariables>;
export type DeleteBlogAuthorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteBlogAuthorMutation, DeleteBlogAuthorMutationVariables>
    } & TChildProps;
export function withDeleteBlogAuthor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBlogAuthorMutation,
  DeleteBlogAuthorMutationVariables,
  DeleteBlogAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBlogAuthorMutation, DeleteBlogAuthorMutationVariables, DeleteBlogAuthorProps<TChildProps, TDataName>>(DeleteBlogAuthorDocument, {
      alias: 'deleteBlogAuthor',
      ...operationOptions
    });
};
export type DeleteBlogAuthorMutationResult = ApolloReactCommon.MutationResult<DeleteBlogAuthorMutation>;
export type DeleteBlogAuthorMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBlogAuthorMutation, DeleteBlogAuthorMutationVariables>;
export const CreateBlogPostDocument = gql`
    mutation CreateBlogPost($title: String!, $content: String!, $blogAuthorId: ID!) {
  createBlogPost(title: $title, content: $content, blogAuthorId: $blogAuthorId) {
    title
    content
    blogAuthorId
  }
}
    `;
export type CreateBlogPostMutationFn = ApolloReactCommon.MutationFunction<CreateBlogPostMutation, CreateBlogPostMutationVariables>;
export type CreateBlogPostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBlogPostMutation, CreateBlogPostMutationVariables>
    } & TChildProps;
export function withCreateBlogPost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBlogPostMutation,
  CreateBlogPostMutationVariables,
  CreateBlogPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBlogPostMutation, CreateBlogPostMutationVariables, CreateBlogPostProps<TChildProps, TDataName>>(CreateBlogPostDocument, {
      alias: 'createBlogPost',
      ...operationOptions
    });
};
export type CreateBlogPostMutationResult = ApolloReactCommon.MutationResult<CreateBlogPostMutation>;
export type CreateBlogPostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogPostMutation, CreateBlogPostMutationVariables>;
export const UpdateBlogPostDocument = gql`
    mutation UpdateBlogPost($id: ID!, $title: String!, $content: String!, $blogAuthorId: ID!) {
  updateBlogPost(id: $id, title: $title, content: $content, blogAuthorId: $blogAuthorId)
}
    `;
export type UpdateBlogPostMutationFn = ApolloReactCommon.MutationFunction<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;
export type UpdateBlogPostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>
    } & TChildProps;
export function withUpdateBlogPost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBlogPostMutation,
  UpdateBlogPostMutationVariables,
  UpdateBlogPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBlogPostMutation, UpdateBlogPostMutationVariables, UpdateBlogPostProps<TChildProps, TDataName>>(UpdateBlogPostDocument, {
      alias: 'updateBlogPost',
      ...operationOptions
    });
};
export type UpdateBlogPostMutationResult = ApolloReactCommon.MutationResult<UpdateBlogPostMutation>;
export type UpdateBlogPostMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;
export const DeleteBlogPostDocument = gql`
    mutation DeleteBlogPost($id: ID!) {
  deleteBlogPost(id: $id)
}
    `;
export type DeleteBlogPostMutationFn = ApolloReactCommon.MutationFunction<DeleteBlogPostMutation, DeleteBlogPostMutationVariables>;
export type DeleteBlogPostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteBlogPostMutation, DeleteBlogPostMutationVariables>
    } & TChildProps;
export function withDeleteBlogPost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBlogPostMutation,
  DeleteBlogPostMutationVariables,
  DeleteBlogPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBlogPostMutation, DeleteBlogPostMutationVariables, DeleteBlogPostProps<TChildProps, TDataName>>(DeleteBlogPostDocument, {
      alias: 'deleteBlogPost',
      ...operationOptions
    });
};
export type DeleteBlogPostMutationResult = ApolloReactCommon.MutationResult<DeleteBlogPostMutation>;
export type DeleteBlogPostMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBlogPostMutation, DeleteBlogPostMutationVariables>;
export const CreateBlogCommentDocument = gql`
    mutation CreateBlogComment($content: String!, $blogAuthorId: ID!, $blogPostId: ID!) {
  createBlogComment(content: $content, blogAuthorId: $blogAuthorId, blogPostId: $blogPostId) {
    content
    blogAuthorId
    blogPostId
  }
}
    `;
export type CreateBlogCommentMutationFn = ApolloReactCommon.MutationFunction<CreateBlogCommentMutation, CreateBlogCommentMutationVariables>;
export type CreateBlogCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBlogCommentMutation, CreateBlogCommentMutationVariables>
    } & TChildProps;
export function withCreateBlogComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBlogCommentMutation,
  CreateBlogCommentMutationVariables,
  CreateBlogCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBlogCommentMutation, CreateBlogCommentMutationVariables, CreateBlogCommentProps<TChildProps, TDataName>>(CreateBlogCommentDocument, {
      alias: 'createBlogComment',
      ...operationOptions
    });
};
export type CreateBlogCommentMutationResult = ApolloReactCommon.MutationResult<CreateBlogCommentMutation>;
export type CreateBlogCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogCommentMutation, CreateBlogCommentMutationVariables>;
export const UpdateBlogCommentDocument = gql`
    mutation UpdateBlogComment($id: ID!, $content: String!, $blogAuthorId: ID!, $blogPostId: ID!) {
  updateBlogComment(id: $id, content: $content, blogAuthorId: $blogAuthorId, blogPostId: $blogPostId)
}
    `;
export type UpdateBlogCommentMutationFn = ApolloReactCommon.MutationFunction<UpdateBlogCommentMutation, UpdateBlogCommentMutationVariables>;
export type UpdateBlogCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBlogCommentMutation, UpdateBlogCommentMutationVariables>
    } & TChildProps;
export function withUpdateBlogComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBlogCommentMutation,
  UpdateBlogCommentMutationVariables,
  UpdateBlogCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBlogCommentMutation, UpdateBlogCommentMutationVariables, UpdateBlogCommentProps<TChildProps, TDataName>>(UpdateBlogCommentDocument, {
      alias: 'updateBlogComment',
      ...operationOptions
    });
};
export type UpdateBlogCommentMutationResult = ApolloReactCommon.MutationResult<UpdateBlogCommentMutation>;
export type UpdateBlogCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBlogCommentMutation, UpdateBlogCommentMutationVariables>;
export const DeleteBlogCommentDocument = gql`
    mutation DeleteBlogComment($id: ID!) {
  deleteBlogComment(id: $id)
}
    `;
export type DeleteBlogCommentMutationFn = ApolloReactCommon.MutationFunction<DeleteBlogCommentMutation, DeleteBlogCommentMutationVariables>;
export type DeleteBlogCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteBlogCommentMutation, DeleteBlogCommentMutationVariables>
    } & TChildProps;
export function withDeleteBlogComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBlogCommentMutation,
  DeleteBlogCommentMutationVariables,
  DeleteBlogCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBlogCommentMutation, DeleteBlogCommentMutationVariables, DeleteBlogCommentProps<TChildProps, TDataName>>(DeleteBlogCommentDocument, {
      alias: 'deleteBlogComment',
      ...operationOptions
    });
};
export type DeleteBlogCommentMutationResult = ApolloReactCommon.MutationResult<DeleteBlogCommentMutation>;
export type DeleteBlogCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBlogCommentMutation, DeleteBlogCommentMutationVariables>;
export const GetAnimalDocument = gql`
    query GetAnimal($id: ID!) {
  animal(id: $id) {
    id
    species
    favoriteFood
  }
}
    `;
export type GetAnimalProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAnimalQuery, GetAnimalQueryVariables>
    } & TChildProps;
export function withGetAnimal<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAnimalQuery,
  GetAnimalQueryVariables,
  GetAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAnimalQuery, GetAnimalQueryVariables, GetAnimalProps<TChildProps, TDataName>>(GetAnimalDocument, {
      alias: 'getAnimal',
      ...operationOptions
    });
};
export type GetAnimalQueryResult = ApolloReactCommon.QueryResult<GetAnimalQuery, GetAnimalQueryVariables>;
export const GetAnimalsDocument = gql`
    query GetAnimals {
  animals {
    id
    species
    favoriteFood
  }
}
    `;
export type GetAnimalsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAnimalsQuery, GetAnimalsQueryVariables>
    } & TChildProps;
export function withGetAnimals<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAnimalsQuery,
  GetAnimalsQueryVariables,
  GetAnimalsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAnimalsQuery, GetAnimalsQueryVariables, GetAnimalsProps<TChildProps, TDataName>>(GetAnimalsDocument, {
      alias: 'getAnimals',
      ...operationOptions
    });
};
export type GetAnimalsQueryResult = ApolloReactCommon.QueryResult<GetAnimalsQuery, GetAnimalsQueryVariables>;
export const GetBlogAuthorDocument = gql`
    query GetBlogAuthor($id: ID!) {
  blogAuthor(id: $id) {
    id
  }
}
    `;
export type GetBlogAuthorProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogAuthorQuery, GetBlogAuthorQueryVariables>
    } & TChildProps;
export function withGetBlogAuthor<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogAuthorQuery,
  GetBlogAuthorQueryVariables,
  GetBlogAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogAuthorQuery, GetBlogAuthorQueryVariables, GetBlogAuthorProps<TChildProps, TDataName>>(GetBlogAuthorDocument, {
      alias: 'getBlogAuthor',
      ...operationOptions
    });
};
export type GetBlogAuthorQueryResult = ApolloReactCommon.QueryResult<GetBlogAuthorQuery, GetBlogAuthorQueryVariables>;
export const GetBlogAuthorsDocument = gql`
    query GetBlogAuthors {
  blogAuthors {
    id
  }
}
    `;
export type GetBlogAuthorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogAuthorsQuery, GetBlogAuthorsQueryVariables>
    } & TChildProps;
export function withGetBlogAuthors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogAuthorsQuery,
  GetBlogAuthorsQueryVariables,
  GetBlogAuthorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogAuthorsQuery, GetBlogAuthorsQueryVariables, GetBlogAuthorsProps<TChildProps, TDataName>>(GetBlogAuthorsDocument, {
      alias: 'getBlogAuthors',
      ...operationOptions
    });
};
export type GetBlogAuthorsQueryResult = ApolloReactCommon.QueryResult<GetBlogAuthorsQuery, GetBlogAuthorsQueryVariables>;
export const GetBlogPostDocument = gql`
    query GetBlogPost($id: ID!) {
  blogPost(id: $id) {
    id
  }
}
    `;
export type GetBlogPostProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogPostQuery, GetBlogPostQueryVariables>
    } & TChildProps;
export function withGetBlogPost<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogPostQuery,
  GetBlogPostQueryVariables,
  GetBlogPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogPostQuery, GetBlogPostQueryVariables, GetBlogPostProps<TChildProps, TDataName>>(GetBlogPostDocument, {
      alias: 'getBlogPost',
      ...operationOptions
    });
};
export type GetBlogPostQueryResult = ApolloReactCommon.QueryResult<GetBlogPostQuery, GetBlogPostQueryVariables>;
export const GetBlogPostsDocument = gql`
    query GetBlogPosts {
  blogPosts {
    id
  }
}
    `;
export type GetBlogPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogPostsQuery, GetBlogPostsQueryVariables>
    } & TChildProps;
export function withGetBlogPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
  GetBlogPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogPostsQuery, GetBlogPostsQueryVariables, GetBlogPostsProps<TChildProps, TDataName>>(GetBlogPostsDocument, {
      alias: 'getBlogPosts',
      ...operationOptions
    });
};
export type GetBlogPostsQueryResult = ApolloReactCommon.QueryResult<GetBlogPostsQuery, GetBlogPostsQueryVariables>;
export const GetBlogCommentDocument = gql`
    query GetBlogComment($id: ID!) {
  blogComment(id: $id) {
    id
  }
}
    `;
export type GetBlogCommentProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogCommentQuery, GetBlogCommentQueryVariables>
    } & TChildProps;
export function withGetBlogComment<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogCommentQuery,
  GetBlogCommentQueryVariables,
  GetBlogCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogCommentQuery, GetBlogCommentQueryVariables, GetBlogCommentProps<TChildProps, TDataName>>(GetBlogCommentDocument, {
      alias: 'getBlogComment',
      ...operationOptions
    });
};
export type GetBlogCommentQueryResult = ApolloReactCommon.QueryResult<GetBlogCommentQuery, GetBlogCommentQueryVariables>;
export const GetBlogCommentsDocument = gql`
    query GetBlogComments {
  blogComments {
    id
  }
}
    `;
export type GetBlogCommentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBlogCommentsQuery, GetBlogCommentsQueryVariables>
    } & TChildProps;
export function withGetBlogComments<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBlogCommentsQuery,
  GetBlogCommentsQueryVariables,
  GetBlogCommentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBlogCommentsQuery, GetBlogCommentsQueryVariables, GetBlogCommentsProps<TChildProps, TDataName>>(GetBlogCommentsDocument, {
      alias: 'getBlogComments',
      ...operationOptions
    });
};
export type GetBlogCommentsQueryResult = ApolloReactCommon.QueryResult<GetBlogCommentsQuery, GetBlogCommentsQueryVariables>;