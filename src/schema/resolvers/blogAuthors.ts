import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { BlogAuthor } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

const queries: Pick<QueryResolvers, "blogAuthor" | "blogAuthors"> = {
  blogAuthor: async (_, { id }) => (await BlogAuthor.findOne(id)) ?? null,
  blogAuthors: async () => (await BlogAuthor.find()) ?? [],
};

const mutations: Pick<
  MutationResolvers,
  "createBlogAuthor" | "updateBlogAuthor" | "deleteBlogAuthor"
> = {
   createBlogAuthor: async (_, { name }) => {
    const blogAuthor = BlogAuthor.create({
      name: name
    });

    await blogAuthor.save();

    return blogAuthor;
  },
  updateBlogAuthor: async (_, { id, ...args }) => {
    try {
      await BlogAuthor.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteBlogAuthor: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(BlogAuthor)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const blogAuthors: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
