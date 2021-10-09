const mongoose = require('./index')
const Schema = mongoose.Schema

const lemonSchema = new Schema({
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

module.exports = mongoose.model('lemon', lemonSchema)