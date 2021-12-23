import { GraphQLClient } from "graphql-request";

const API_URL = process.env.API_URL ? process.env.API_URL : "";
const API_TOKEN = process.env.API_TOKEN;

const client = new GraphQLClient(API_URL, {
    headers: {
        authorization: `Bearer ${API_TOKEN}`,
        "Application-Type": "content/json",
    },
});

export default client;
