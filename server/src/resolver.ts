import { Resolvers, TaskStatus, AddTasksInput } from "./generated/graphql";

const resolvers: Resolvers = {
  Query: {
    tasks(_, args) {
      return {
        pageInfo: { hasPreviousPage: false, hasNextPage: false },
        edges: [
          {
            cursor: "cursor1",
            node: {
              id: "1",
              name: "task1",
              status: TaskStatus.Active,
              order: 1,
            },
          },
          {
            cursor: "cursor2",
            node: {
              id: "2",
              name: "task2",
              status: TaskStatus.Active,
              order: 2,
            },
          },
        ],
      };
    },
    node(_, args) {
      return { id: "1", name: "task1", status: TaskStatus.Active, order: 1 };
    },
  },
  Mutation: {
    addTasks(_, args) {
      return args.input;
    },
    updateTasks(_, args) {
      return args.input;
    },
    removeTasks(_, args) {
      return args.input;
    },
  },
};
export default resolvers;
