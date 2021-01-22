const querySchema = `
  type Query {
    routes(author: ID public: Boolean): [Route]!
    route(_id: ID!): Route
    user(_id: ID!): User
  }
  `;

export default querySchema;