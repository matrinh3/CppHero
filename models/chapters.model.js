const query_database = require('../database/query_database')


class Chapter{
    constructor(chapter){
        this.title = chapter.title
        this.order = chapter.order
    }
}

Chapter.getAll = async () => {
        let sql = 'SELECT * FROM chapter ORDER BY `order`'
        let params = []
        return query_database(sql,params)  
}
Chapter.getAll_checkShown = async () => {
    let sql = 'SELECT * FROM chapter WHERE `shown` = 1 ORDER BY `order`'
    let params = []
    return query_database(sql,params)  
}
Chapter.getById = async (id) => {
    let sql = 'SELECT * FROM chapter WHERE `id`= ?'
    let params = [id]
    return query_database(sql,params)    
}

Chapter.create = async (newChapter) => {
    let sql = 'INSERT INTO chapter (`order`,`title`) VALUES (?,?)'
    let sqlGetOrderMax = 'SELECT `order` FROM chapter ORDER BY `order` DESC'
    let paramsGetOrderMax = []
    let getOrderMax = await query_database(sqlGetOrderMax,paramsGetOrderMax);
    let nextOrder;
    if(getOrderMax.length == 0){
        nextOrder = 1;
    }else{
     nextOrder = getOrderMax[0].order + 1
    }
    let params = [nextOrder,newChapter.title]
    return query_database(sql,params)    
}

Chapter.remove = async (id) => {
    let sql = 'DELETE FROM Chapter WHERE `id` = ?'
    let params = [id]
    return query_database(sql,params)      
}

Chapter.update = async (id,chapter) => {
    let sql = 'UPDATE Chapter SET `order` = ?, `title` = ? WHERE `id` = ?'
    let params = [chapter.order,chapter.title,id]
    return query_database(sql,params)   
}
Chapter.updateShown = async (id,bool) => {
    let sql = 'UPDATE Chapter SET `shown` = ? WHERE `id` = ?'
    let params = [bool,id]
    return query_database(sql,params)   
}
module.exports = Chapter