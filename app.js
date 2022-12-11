const express = require('express');
const dotenv = require('dotenv').config()
const cookieSession = require('cookie-session');
const { route } = require('./routes/index');
// const morgan = require('morgan')
const app = express()

// app.use(morgan('combined'))


app.use(cookieSession({
    name: 'session',
    keys: ['NguyenAnhTuan', 'TuanNguyen']
  }))


app.set('view engine', 'ejs')
app.use('/',require('./routes/index'))
app.use('/posts', require('./routes/posts'))
app.use('/chapters', require('./routes/chapters'))
app.use('/cpanel', require('./routes/cpanel'))
app.use(express.static('public'))










app.use((err,req,res,next)=>{
  res.send(err.message);
})


app.use((req,res,next)=>{
  res.send("Not Found")
})

const port = 5000;
app.listen(port);