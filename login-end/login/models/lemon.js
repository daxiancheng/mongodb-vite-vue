const mongoose = require('./index')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    studentId: {
        required: true,
        type: String
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('lemon', usersSchema)