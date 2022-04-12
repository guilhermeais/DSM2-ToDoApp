const restful = require('node-restful')
const mongoose = restful.mongoose

const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Person', personSchema)