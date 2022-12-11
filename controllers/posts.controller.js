const Post = require('../models/posts.model');

async function getPost(req,res,next){
    try{
    let id = req.params.id
    let post = await Post.getById(id);
    if(post.length == 0) throw new Error("Not Found")
    let text = post[0].content;
    console.log(text)
    const myArray = text.split("\r\n");
    console.log(myArray)
    res.render('posts', {post})
    }catch(err){
        next(err)
    }
}
async function createPost(req,res,next){
    try{
    let post = await Post.create(new Post(req.body))
    let getPost = await Post.getById(post.insertId)
    console.log(getPost)
    res.redirect(`/cpanel/chapters/${getPost[0].chapter}`)
    }catch(err){
        next(err)
    }
}
async function updatePost(req,res,next){
    try{
    let post = await Post.update(req.params.id,new Post(req.body))
    let getPost = await Post.getById(req.params.id)
    res.redirect(`/cpanel/chapters/${getPost[0].chapter}`)
    }catch(err){
        next(err)
    }
}
async function setShownPost(req,res,next){
    try{
    let post = await Post.updateShown(req.params.id,1)
    let getPost = await Post.getById(req.params.id)
    res.redirect(`/cpanel/chapters/${getPost[0].chapter}`)
    }catch(err){
        next(err)
    }
}
async function setUnshownPost(req,res,next){
    try{
    let post = await Post.updateShown(req.params.id,0)
    let getPost = await Post.getById(req.params.id)
    res.redirect(`/cpanel/chapters/${getPost[0].chapter}`)
    }catch(err){
        next(err)
    }
}
async function removePost(req,res,next){
    try{
    let id = req.params.id
    let post = await Post.remove(id);
    res.redirect('/cpanel')
    }catch(err){
        next(err)
    }
}


module.exports = {getPost,createPost,updatePost,removePost,setShownPost,setUnshownPost}

