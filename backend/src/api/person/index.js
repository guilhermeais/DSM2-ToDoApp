const Person = require('./schema')

Person.methods(['get', 'post', 'put','delete'])

Person.updateOptions({new: true, runValidators: true})

module.exports = Person