const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const app = express();
const PORT = process.env.PORT || 4000 ;

mongoose.connect('mongodb://localhost:27017/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if(!err) console.log(`Connected to MongoDatabase blogSystem`)
    else console.log(err)
})

app.use('/users', userRouter);
app.use('/posts', postsRouter);




app.listen(PORT, (err) => {
    if(!err) console.log(`Server Started on port ${PORT}`)
})