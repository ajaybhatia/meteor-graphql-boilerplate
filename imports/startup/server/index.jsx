
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import { resolvers as tasksResolvers } from '/imports/api/tasks/graphql/resolvers.jsx'
import { typeDefs as tasksTypeDefs } from '/imports/api/tasks/graphql/typeDefs.jsx'

const typeList = [];
const resolverList = [];

// import and push typeDefs from api directory
typeList.push(tasksTypeDefs);

// import and push resolvers from api directory
resolverList.push(tasksResolvers);

// merge typeDefs and resolvers
if (typeList.length > 0 && resolverList.length > 0) {
  const typeDefs = mergeTypes(typeList);
  const resolvers = mergeResolvers(resolverList);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  createApolloServer({ schema });
}
