const md5 = require('md5');
module.exports =  (password,username) => {
    let level1 = md5(username)
    let level2 = md5(password)
    let level3 = md5(level1+level2)
    let level4 = md5(password+level3);
    return level4;
}