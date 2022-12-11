const query_database = require('../database/query_database')
class Post{
    constructor(post){
        this.title = post.title
        this.content = post.content
        this.chapter = post.chapter
        this.order = post.order
    }
}
Post.getAll = async () => {
    let sql = 'SELECT * FROM posts GROUP BY `chapter` ORDER BY `order`'
    let params = []
    return query_database(sql,params)
}

Post.getAllByChapter = async (id_chapter) => {
    let sql = 'SELECT * FROM posts WHERE `chapter`=? ORDER BY `order`'
    let params = [id_chapter]
    return query_database(sql,params)  
}
Post.getAllByChapter_checkShown = async (id_chapter) => {
    let sql = 'SELECT * FROM posts WHERE `chapter`=? AND `shown` = 1 ORDER BY `order`'
    let params = [id_chapter]
    return query_database(sql,params)  
}

Post.getById = async (id) => {
    let sql = 'SELECT * FROM posts WHERE id=?'
    let params = [id]
    return query_database(sql,params)    
}

Post.create = async (newPost) => {
    let sql = 'INSERT INTO posts (`title`, `content`, `chapter`, `order`) VALUES (?,?,?,?)'
    let sqlGetOrderMax = 'SELECT `order` FROM posts WHERE `chapter` = ? ORDER BY `order` DESC'
    let paramsGetOrderMax = [newPost.chapter]
    let getOrderMax = await query_database(sqlGetOrderMax,paramsGetOrderMax);
    let nextOrder;
    if(getOrderMax.length == 0){
        nextOrder = 1;
    }else{
     nextOrder = getOrderMax[0].order + 1
    }
    
    let params = [newPost.title,newPost.content,newPost.chapter,nextOrder]
    console.log(params)
    return query_database(sql,params)   
}


Post.remove = async (id) => {
    let sql = 'DELETE FROM posts WHERE `id` = ?'
    let params = [id]
    return query_database(sql,params)  
}


Post.update = async (id,post) => {
    let sql = 'UPDATE posts SET `title` = ?, `content` = ?, `chapter` = ?, `order`= ? WHERE `id` = ?'
    let params = [post.title,post.content,post.chapter,post.order,id]
    return query_database(sql,params)     
}
Post.updateShown = async (id,bool) => {
    let sql = 'UPDATE posts SET `shown` = ? WHERE `id` = ?'
    let params = [bool,id]
    return query_database(sql,params)     
}
module.exports = Post
