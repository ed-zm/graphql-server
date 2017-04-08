const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const server = express();

//let query = 'query { users { id, first_name, last_name}}'
//graphql(Schema, query).then(result => {
//  console.log(JSON.stringify(result, null, ""))
//})

server.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

server.listen(3000,() => {
  console.log("graphql is serving on loscalhost://3000")
});