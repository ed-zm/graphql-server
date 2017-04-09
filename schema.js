const graphql = require('graphql');
const MongoClient = require('mongodb').MongoClient;
const co = require('co');
const assert = require('assert');

co(function*(){
  const url = 'mongodb://localhost:27017/graphql';
  const db = yield MongoClient.connect(url);
  console.log(db);
  debugger;
  db.close();
}).catch(err => {
  console.log(err.stack);
})
debugger
const users = require('./test_data');
const UserType = new graphql.GraphQLObjectType({
  name: 'user',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLID
      },
       first_name: {
         type: graphql.GraphQLString
       },
      last_name: {
        type: graphql.GraphQLBoolean
      }
    }
  }
})

const QueryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new graphql.GraphQLList(UserType),
        resolve: () => {
          return users
        }
      }
    }
  }
})

module.exports = new graphql.GraphQLSchema({
  query: QueryType
});