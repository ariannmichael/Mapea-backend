const Mapea = require('./mapea')

Mapea.methods(['get', 'post', 'put', 'delete'])
Mapea.updateOptions({new: true, runValidators: true})

module.exports = Mapea