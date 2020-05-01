module.exports = {
  client: {
    service: {
      name: "todo-mvc",
      // localSchemaFile: "./client-schema.graphql",
      localSchemaFile: ["./client-schema.graphql","../server/src/schema.graphql"]
    },
    // includes: ["src/**/*.{ts,tsx,graphql}", "../server/src/schema.graphql"]
  },
};
