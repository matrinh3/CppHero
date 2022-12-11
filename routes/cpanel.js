const express = require('express')
const auth = require('../middlewares/auth.middleware')
const cpanelRoute = express.Router()
cpanelRoute.use(express.urlencoded({ extended: true })) 
const cpanelController = require('../controllers/cpanel.controller')

cpanelRoute.get('/add_post',auth,cpanelController.cpanel_add)
cpanelRoute.get('/edit_post/:id',auth,cpanelController.cpanel_edit)

cpanelRoute.get('/add_chapter',auth,cpanelController.cpanel_add_chapter)
cpanelRoute.get('/edit_chapter/:id',auth,cpanelController.cpanel_edit_chapter)



cpanelRoute.get('/chapters/:id',auth,cpanelController.cpanel_get_chapter)


cpanelRoute.get('/login',cpanelController.cpanel_login)
cpanelRoute.post('/login',cpanelController.cpanel_checkLogin)

cpanelRoute.get('/reg',cpanelController.cpanel_regAdmin)
cpanelRoute.post('/reg',cpanelController.cpanel_checkRegAdmin)


cpanelRoute.get('/',auth,cpanelController.cpanel_index)





cpanelRoute.delete('/',(req,res)=>{
    console.log(req.method)
})
module.exports = cpanelRoute

 