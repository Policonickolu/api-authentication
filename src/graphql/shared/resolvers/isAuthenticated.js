import { ApolloError } from 'apollo-server-express';
import { skip } from 'graphql-resolvers';

const isAuthenticated = async (parent, args, { me }) =>
  me ? skip : new ApolloError('Not authorized', 'UNAUTHENTICATED');

export default isAuthenticated;
