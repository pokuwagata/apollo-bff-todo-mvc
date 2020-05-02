import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import * as React from "react";
import { Main } from "./Main";
import {
  TaskStatus,
  AddTaskInput,
} from "../../__generated__/globalTypes";
import { ApolloCache } from "apollo-cache";
import { task } from "./__generated__/task";
import { AppState } from "./__generated__/AppState";

const STATE = gql`
  query AppState {
    state {
      tasks {
        id
        name
        status
        order
      }
    }
  }
`;

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "http://localhost:4000",
      credentials: "same-origin",
    }),
  ]),
  cache: new InMemoryCache(),
  resolvers: {
    Query: {
      state: (_, __, { cache }) => {
        console.log(cache);
      },
    },
    Mutation: {
      addTask: (
        _,
        { input }: { input: AddTaskInput },
        { cache }: { cache: ApolloCache<NormalizedCacheObject> }
      ) => {
        console.log(input);

        const prev = cache.readQuery<AppState>({ query: STATE })!.state;
        const num = prev.tasks.length++; // NOTE: cache の初期値を与えているので非null

        const task: task = {
          __typename: "Task",
          id: num.toString(), // TODO: uuid を使う
          name: input.text,
          status: TaskStatus.ACTIVE,
          order: num,
        };

        cache.writeQuery<AppState>({
          query: STATE,
          data: {
            state: {
              __typename: "State",
              tasks: [
                ...prev.tasks, task
              ],
            },
          },
        });
      },
    },
  },
  defaultOptions: {
    query: {
      fetchPolicy: "cache-only",
      errorPolicy: "all",
    },
    mutate: {
      fetchPolicy: "cache-only",
      errorPolicy: "all",
    },
  },
  connectToDevTools: true,
});

client.cache.writeQuery<AppState>({
  query: STATE,
  data: {
    state: {
      __typename: "State",
      tasks: [
        {
          __typename: "Task",
          id: "1",
          name: "task1",
          status: TaskStatus.ACTIVE,
          order: 1,
        },
      ],
    },
  },
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Main></Main>
    </ApolloProvider>
  );
};
