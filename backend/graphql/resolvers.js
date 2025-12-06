const Employee = require('../models/Employee');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const resolvers = {
    Query: {
        listEmployees: async (_, { page = 1, limit = 10, sortField = "name", sortOrder = "asc" }, context) => {
            if(!context.user) throw new Error("Unauthorized");
            const skip = (page - 1) * limit;
            const sort = { [sortField]: sortOrder === 'asc' ? 1 : -1 };
            return await Employee.find().sort(sort).skip(skip).limit(limit);
        },
        getEmployee: async (_, { id }, context) => {
            if(!context.user) throw new Error("Unauthorized");
            return await Employee.findById(id);
        }
    },
    Mutation: {
        addEmployee: async (_, { input }, context) => {
            if(!context.user || context.user.role !== 'admin') throw new Error("Unauthorized");
            const emp = new Employee(input);
            return await emp.save();
        },
        updateEmployee: async (_, { id, input }, context) => {
            if(!context.user || context.user.role !== 'admin') throw new Error("Unauthorized");
            return await Employee.findByIdAndUpdate(id, input, { new: true });
        },
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });
            if(!user) throw new Error("User not found");
            const valid = await bcrypt.compare(password, user.password);
            if(!valid) throw new Error("Invalid password");
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return { id: user.id, username: user.username, role: user.role, token };
        }
    }
};

module.exports = resolvers;
