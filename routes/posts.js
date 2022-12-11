const express = require('express')
const postsRoute = express.Router()
const postController = require('../controllers/posts.controller')
const auth = require('../middlewares/auth.middleware')

postsRoute.use(express.urlencoded({ extended: true })) 
postsRoute.get('/:id',postController.getPost)
postsRoute.post('/',auth,postController.createPost)
postsRoute.post('/:id/edit',auth,postController.updatePost)
postsRoute.get('/:id/delete',auth,postController.removePost)
postsRoute.get('/:id/shown',auth,postController.setShownPost)
postsRoute.get('/:id/unshown',auth,postController.setUnshownPost)
module.exports = postsRoute