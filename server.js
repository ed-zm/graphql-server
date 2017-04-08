const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const GraphSchema = graphql.GraphQLSchema;
const server = express();

server.use('/graphql', graphqlHTTP({
  schema: GraphSchema,
  graphiql: process.env.NODE_ENV === 'development',
}));

server.listen(3000,()=>{
  console.log("graphql is serving on loscalhost://3000")
});