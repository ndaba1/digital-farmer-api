import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const __dirname = path.resolve();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers,
});

export default schema;
