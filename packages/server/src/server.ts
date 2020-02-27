import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import { buildSchema } from 'graphql';

import schema from './schema';
import { graphqlPort } from './config';

const app = new Koa();
const router = new Router();

router.all(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(graphqlPort);

console.log(`Server running on port ${graphqlPort}`);
