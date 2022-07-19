import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { BlogPost } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

// Trust me, as your project grows, you'll want
// to pick the types for your query and mutation
// resolvers
const queries: Pick<QueryResolvers, "blogPost" | "blogPosts"> = {
  blogPost: async (_, { id }) => (await BlogPost.findOne(id)) ?? null,
  blogPosts: async () => (await BlogPost.find()) ?? [],
};

const mutations: Pick<
  MutationResolvers,
  "createBlogPost" | "updateBlogPost" | "deleteBlogPost"
> = {
  createBlogPost: async (_, { title, content, blogAuthorId}) => {
    const blogPost = BlogPost.create({
      title: title,
      content: content,
      blogAuthorId: blogAuthorId
    });

    await blogPost.save();

    return blogPost;
  },
  updateBlogPost: async (_, { id, ...args }) => {
    try {
      await BlogPost.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteBlogPost: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(BlogPost)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const blogPosts: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
