const express = require('express');
const { graphqlHTTP }= require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Helloworld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello world'
      }
    })
  })
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log(`Running a GraphQL API server at http://localhost:4000/graphql`);
});
