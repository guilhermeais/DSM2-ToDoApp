const express = require('express')


module.exports = function(server) {
    const router = express.Router()
    const todoService = require('../api/todo/todoService')
    const personService = require('../api/person')


    server.use('/api', router)
    todoService.register(router, '/todos')
    personService.register(router, '/persons')  
}