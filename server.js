const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const server = express();

server.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

server.listen(3000,() => {
  console.log("graphql is serving on loscalhost:3000")
});