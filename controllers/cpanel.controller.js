const Chapter = require('../models/chapters.model');
const Post = require('../models/posts.model')
const Users = require('../models/users.model')
const hashPassword = require('../functions/hashPassword')



exports.cpanel_index = async (req,res,next) => {
    try{
    const listChapter = await Chapter.getAll();
    res.render('cpanel',{listChapter})
    }catch(err){
    next(err)
    }
}

exports.cpanel_add = async (req,res,next) => {
    try{
    const listChapter = await Chapter.getAll();
    let id_chapter = req.query.chuong
    res.render('add_post',{listChapter, id_chapter})
    }catch(err){
    next(err)
    }
}
exports.cpanel_edit = async (req,res,next) => {
    try{
    const listChapter = await Chapter.getAll();
    const post = await Post.getById(req.params.id)
    res.render('edit_post',{post,listChapter})
    }catch(err){
    next(err)
    }
}


exports.cpanel_get_chapter = async (req,res,next)=>{
    try{
    const getChapter = await Chapter.getById(req.params.id);
    if(getChapter.length ==0){
        throw new Error("Không có Chương này")
    }
    const getListPosts = await Post.getAllByChapter(req.params.id);
   
    let id = req.params.id;
    let titleChapter = getChapter[0].title
    res.render('cpanel_chapter',{getListPosts,id,titleChapter})
    }catch(err){
    next(err)
    }
}



exports.cpanel_add_chapter = async (req,res,next) => {
    try{
    const listChapter = await Chapter.getAll();
    
    res.render('add_chapter',{listChapter})

    }catch(err){
    next(err)
    }
}

exports.cpanel_edit_chapter = async (req,res,next) => {
    try{
    const chap = await Chapter.getById(req.params.id);
    res.render('edit_chapter',{chap})
    }catch(err){
    next(err)
    }
}
exports.cpanel_checkLogin = async (req,res,next) => {
    try{
    const getUser = await Users.get(req.body.username)
    if(getUser.length == 1){
    let hashPass = hashPassword(req.body.password,req.body.username)
    if(hashPass == getUser[0].password){
        req.session.username = req.body.username
        res.redirect('/cpanel')
    }
    else{
        res.redirect('/cpanel/login')
    } 
    }else{
        res.redirect('/cpanel/login')
    }   
    }catch(err){
    next(err)
    }
}
exports.cpanel_login = async (req,res,next)=>{
    try{
    if(!req.session.username){
    let getCountUsers = await Users.getAll();
    if(getCountUsers.length == 0){
        res.redirect('/cpanel/reg')
    } else {
    res.render('login')
    }
    }else{
        res.redirect('/cpanel')
    }
    }catch(err){
    next(err)
    }
}








exports.cpanel_regAdmin = async (req,res,next)=>{
    try{
    let getCountUsers = await Users.getAll();
    if(getCountUsers.length == 1){
        res.redirect('/cpanel/login')
    } else {
    res.render('register')
    }
    }catch(err){
    next(err)
    }
}
exports.cpanel_checkRegAdmin = async (req,res,next)=>{
    try{
        let pass = hashPassword(req.body.password,req.body.username);
    await Users.create(new Users(req.body.username , pass))
    res.redirect('/cpanel/login')
    }catch(err){
    next(err)
    }
}