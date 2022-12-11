const query_database = require('../database/query_database')


class Users{
    constructor(username, password){
        this.username = username
        this.password = password
    }
}
Users.get = async (username) => {
    let sql = 'SELECT * FROM users WHERE `username`= ?'
    let params = [username]
    return query_database(sql,params)    
}
Users.getAll = async (username) => {
    let sql = 'SELECT * FROM users'
    let params = []
    return query_database(sql,params)  
}
Users.create = async (user) => {
    let sql = 'INSERT INTO users (`username`,`password`,`admin`) VALUES (?,?,?)'
    let params = [user.username,user.password,1]
    return query_database(sql,params)    
}

Users.remove = async (id) => {
    let sql = 'DELETE FROM users WHERE `id` = ?'
    let params = [id]
    return query_database(sql,params)   
}

Users.update = async (user) => {
    let sql = 'UPDATE users SET `password` = ? WHERE `id` = ?'
    let params = [user.password,user.id]
    return query_database(sql,params)    
}
module.exports = Users