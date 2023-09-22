import { gql } from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';


  
const typeDefs = gql`
 type Query{
    greet:String
 }
`;

 const resolvers = {
    Query: {
       greet:()=>"helloworld"
    },
};
 const server = new ApolloServer({
    resolvers,
    typeDefs
});
export default startServerAndCreateNextHandler(server); 