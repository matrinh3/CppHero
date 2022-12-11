const Chapter = require('../models/chapters.model');
const Post = require('../models/posts.model');


async function getChapter(req,res,next){
    try{
    let listPosts = await Post.getAllByChapter(req.params.id)
    res.send(listPosts)
    }catch(err){
        next(err)
    }
}
async function createChapter(req,res,next){
    try{
    let chap = await Chapter.create(new Chapter(req.body))
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}
async function updateChapter(req,res,next){
    try{
    let chap = await Chapter.update(req.params.id,new Chapter(req.body))
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}

async function setShownChapter(req,res,next){
    try{
    let chap = await Chapter.updateShown(req.params.id,1)
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}
async function setUnshownChapter(req,res,next){
    try{
    let chap = await Chapter.updateShown(req.params.id,0)
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}

async function removeChapter(req,res,next){
    try{
    let id = req.params.id
    let chap = await Chapter.remove(id)
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}


module.exports = {getChapter,createChapter,updateChapter,removeChapter,setShownChapter,setUnshownChapter}

