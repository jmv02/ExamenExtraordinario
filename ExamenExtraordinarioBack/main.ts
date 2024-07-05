import { Character } from "./resolvers/Character.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Query } from "./resolvers/Query.ts";
import {Location} from "./resolvers/Location.ts"; 
import { startStandaloneServer } from "@apollo/server/standalone"; 
import { typeDefs } from "./gql/schema.ts";
import { ApolloServer } from "npm:@apollo/server@^4.9.5";

const resolvers = {
  Query,
  Character,
  Episode,
  Location
};
  const server = new ApolloServer({
    typeDefs,resolvers
  }); 

  const url = await startStandaloneServer(server,{listen:8000}); 