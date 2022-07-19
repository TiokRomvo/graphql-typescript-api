import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Animal: ResolverTypeWrapper<Animal>;
  String: ResolverTypeWrapper<Scalars['String']>;
  BlogAuthor: ResolverTypeWrapper<BlogAuthor>;
  BlogComment: ResolverTypeWrapper<BlogComment>;
  BlogPost: ResolverTypeWrapper<BlogPost>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Animal: Animal;
  String: Scalars['String'];
  BlogAuthor: BlogAuthor;
  BlogComment: BlogComment;
  BlogPost: BlogPost;
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type AnimalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Animal'] = ResolversParentTypes['Animal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favoriteFood?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogAuthor'] = ResolversParentTypes['BlogAuthor']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blogComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogComment']>>>, ParentType, ContextType>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogComment'] = ResolversParentTypes['BlogComment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blogAuthorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blogPostId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  blogAuthor?: Resolver<Maybe<ResolversTypes['BlogAuthor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogPost'] = ResolversParentTypes['BlogPost']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blogAuthor?: Resolver<Maybe<ResolversTypes['BlogAuthor']>, ParentType, ContextType>;
  blogAuthorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blogComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogComment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAnimal?: Resolver<ResolversTypes['Animal'], ParentType, ContextType, RequireFields<MutationCreateAnimalArgs, 'species' | 'favoriteFood'>>;
  updateAnimal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateAnimalArgs, 'id' | 'species' | 'favoriteFood'>>;
  deleteAnimal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteAnimalArgs, 'id'>>;
  createBlogAuthor?: Resolver<ResolversTypes['BlogAuthor'], ParentType, ContextType, RequireFields<MutationCreateBlogAuthorArgs, 'name'>>;
  updateBlogAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateBlogAuthorArgs, 'id' | 'name'>>;
  deleteBlogAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBlogAuthorArgs, 'id'>>;
  createBlogPost?: Resolver<ResolversTypes['BlogPost'], ParentType, ContextType, RequireFields<MutationCreateBlogPostArgs, 'title' | 'content' | 'blogAuthorId'>>;
  updateBlogPost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateBlogPostArgs, 'id' | 'title' | 'content' | 'blogAuthorId'>>;
  deleteBlogPost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBlogPostArgs, 'id'>>;
  createBlogComment?: Resolver<ResolversTypes['BlogComment'], ParentType, ContextType, RequireFields<MutationCreateBlogCommentArgs, 'content' | 'blogAuthorId' | 'blogPostId'>>;
  updateBlogComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateBlogCommentArgs, 'id' | 'content' | 'blogAuthorId' | 'blogPostId'>>;
  deleteBlogComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBlogCommentArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  animal?: Resolver<Maybe<ResolversTypes['Animal']>, ParentType, ContextType, RequireFields<QueryAnimalArgs, 'id'>>;
  animals?: Resolver<Array<Maybe<ResolversTypes['Animal']>>, ParentType, ContextType>;
  blogAuthor?: Resolver<Maybe<ResolversTypes['BlogAuthor']>, ParentType, ContextType, RequireFields<QueryBlogAuthorArgs, 'id'>>;
  blogAuthors?: Resolver<Array<Maybe<ResolversTypes['BlogAuthor']>>, ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Array<Maybe<ResolversTypes['BlogPost']>>, ParentType, ContextType>;
  blogComment?: Resolver<Maybe<ResolversTypes['BlogComment']>, ParentType, ContextType, RequireFields<QueryBlogCommentArgs, 'id'>>;
  blogComments?: Resolver<Array<Maybe<ResolversTypes['BlogComment']>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Animal?: AnimalResolvers<ContextType>;
  BlogAuthor?: BlogAuthorResolvers<ContextType>;
  BlogComment?: BlogCommentResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
