import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://task-graphql-query.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "IM3I7M9ForWfVT0LLK7VNtIkwDIh47BoFrzH8LEIVF17xAERJWyh8W544ekfWJn6",
    }
})

export default client;