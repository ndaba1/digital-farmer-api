import path from "path";
import url from "url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync, loadFiles } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const __dirname = path.resolve();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers,
});

export default schema;
