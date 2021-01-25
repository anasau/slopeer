const mutationSchema = `

  input NewRouteInput {
    name: String!
    grade: String!
    public: Boolean!
    author: ID!
    lat: String!
    lng: String!
    type: String!
    picture: FileUpload
    description: String
  }

  input UpdateRouteInput {
    name: String
    grade: String
    public: Boolean
    picture: FileUpload
    type: String
    description: String
    lat: String
    lng: String
  }

  input NewUserInput {
    email: String!
    username: String!
    password: String!
  }

   input UpdateUserInput {
    username: String
    profile_picture: FileUpload
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    createRoute(input: NewRouteInput!): Route
    updateRoute(_id: ID!, input: UpdateRouteInput!): Route!
    removeRoute(_id: ID!): Route!
    createUser(input: NewUserInput): String
    updateUser(_id: ID!, input: UpdateUserInput): User!
    saveRoute(userId: ID!, routeId: ID!): User!
    unsaveRoute(userId: ID!, routeId: ID!): User!
    login(email: String!, password: String!): String
  }
  `;

export default mutationSchema;