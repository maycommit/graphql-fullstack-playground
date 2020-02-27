import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';

const typeDefList = fileLoader(path.join(__dirname, './modules/**/*.graphql'));
const resolverList = fileLoader(path.join(__dirname, './modules/**/resolvers.ts'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(typeDefList),
  resolvers: mergeResolvers(resolverList),
})

export default schema