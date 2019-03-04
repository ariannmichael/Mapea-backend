const restful = require('node-restful')
const mongoose = restful.mongoose

const mapeaSchema = new mongoose.Schema({
    description: {type: String, require: true}
})

module.exports = restful.model('Todo', mapeaSchema)