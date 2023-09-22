import { gql } from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';


  
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

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {

   return handler(request);
 
 }
 
 
 
 
 export async function POST(request: NextRequest) {
 
   return handler(request);
 
 }
 