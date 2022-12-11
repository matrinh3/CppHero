const express = require('express')
const chapterRoute = express.Router()
const chapterController = require('../controllers/chapters.controller')
const auth = require('../middlewares/auth.middleware')

chapterRoute.use(express.urlencoded({ extended: true }))
chapterRoute.get('/:id',auth,chapterController.getChapter) 
chapterRoute.post('/',auth,chapterController.createChapter)
chapterRoute.post('/:id/edit',auth,chapterController.updateChapter)
chapterRoute.get('/:id/delete',auth,chapterController.removeChapter)
chapterRoute.get('/:id/shown',auth,chapterController.setShownChapter)
chapterRoute.get('/:id/unshown',auth,chapterController.setUnshownChapter)
 
module.exports = chapterRoute