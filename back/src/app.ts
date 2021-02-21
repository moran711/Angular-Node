import {ApolloServer, makeExecutableSchema} from 'apollo-server';
import {connectDB} from './db/db.connection';
import verifyUser from './helpers/verifyToken';
import UserService from './modules/user/user.service';
import {resolvers} from './resolvers';
import {typeDefs} from './typeDefs';
import dotenv from 'dotenv';
import {applyMiddleware} from 'graphql-middleware';
import permissions from './permissions';
dotenv.config();
connectDB();

interface IHeaders {
  token: string;
}

interface IReq {
  headers: IHeaders;
}

interface IContext {
  req: IReq;
}

const schema = applyMiddleware(
  makeExecutableSchema({typeDefs, resolvers}),
  permissions,
);

const server = new ApolloServer({
  schema,
  context: async ({req}: IContext) => {
    const token = req.headers.token || '';
    if (token) {
      const user = verifyUser(token);

      if (!user) {
        return null;
      }
      return {
        user: await UserService.getUserByEmail(user.email),
      };
    }
  },
});

server.listen(5000).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
