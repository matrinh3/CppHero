const Chapter = require('../models/chapters.model')
const Post = require('../models/posts.model')

class ListChapter{
    constructor(chap){
        this.order = chap.order;
        this.title = chap.title;
        this.listPosts = []
    }
    getListPosts(listpost){
        this.listPosts = listpost;
    }
}

async function indexController(req,res,next){
    try{
    var list = []
    let results = await Chapter.getAll_checkShown()
    for(let chap of results){
        list.push(new ListChapter(chap));
        let posts = await Post.getAllByChapter_checkShown(chap.order)
        list[list.length-1].getListPosts(posts)
    }
    res.render('index', {list})
    }catch(err){
        next(err)
    }
}

module.exports = indexController

