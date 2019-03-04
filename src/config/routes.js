const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Mapea Routes
    const mapeaService = require('../api/mapea/mapeaService')
    mapeaService.register(router, '/mapea')
}