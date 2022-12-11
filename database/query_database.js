const pool = require('./db_connection')
module.exports = async (sql, params) => new Promise((resolve, reject)=>{ //function return a promise, resolve *results or reject *error after connecting and query database
        pool.getConnection(function(err, connection) {
            if (err){ 
                reject(new Error("can't connect to database")); //reject when can't connect to database
                return;
            }
            const handler = (error,results)=>{
                connection.release()
                if(error){
                    console.log(error)
                    reject(new Error("Query Fail")); //reject when query database fail
                    return;
                }
                resolve(results); //resolve results
            }
            connection.query(sql,params,handler)
        })
})

