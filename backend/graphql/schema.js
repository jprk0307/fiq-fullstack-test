const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Employee {
        id: ID!
        name: String!
        age: Int!
        class: String!
        subjects: [String!]!
        attendance: Int!
    }

    input EmployeeInput {
        name: String!
        age: Int!
        class: String!
        subjects: [String!]!
        attendance: Int!
    }

    type User {
        id: ID!
        username: String!
        role: String!
        token: String
    }

    type Query {
        listEmployees(page: Int, limit: Int, sortField: String, sortOrder: String): [Employee!]!
        getEmployee(id: ID!): Employee
    }

    type Mutation {
        addEmployee(input: EmployeeInput!): Employee
        updateEmployee(id: ID!, input: EmployeeInput!): Employee
        login(username: String!, password: String!): User
    }
`;

module.exports = typeDefs;
