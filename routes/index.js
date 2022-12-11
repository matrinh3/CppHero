const express = require('express')
const indexRoute = express.Router()
const indexController = require('../controllers/index.controller')
indexRoute.get('/',indexController)
module.exports = indexRoute

 