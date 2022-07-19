import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { BlogComment } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

// Trust me, as your project grows, you'll want
// to pick the types for your query and mutation
// resolvers
const queries: Pick<QueryResolvers, "blogComment" | "blogComments"> = {
  blogComment: async (_, { id }) => (await BlogComment.findOne(id)) ?? null,
  blogComments: async () => (await BlogComment.find()) ?? [],
};

const mutations: Pick<
  MutationResolvers,
  "createBlogComment" | "updateBlogComment" | "deleteBlogComment"
> = {
  createBlogComment: async (_, { content, blogAuthorId, blogPostId}) => {
    const blogComment = BlogComment.create({
      content: content,
      blogAuthorId: blogAuthorId,
      blogPostId: blogPostId
    });

    await blogComment.save();

    return blogComment;
  },
  updateBlogComment: async (_, { id, ...args }) => {
    try {
      await BlogComment.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteBlogComment: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(BlogComment)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const blogComments: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
