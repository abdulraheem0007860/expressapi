const express=require('express');
const path=require('path');
const logger=require('./Middleware/logger')
const members =require('./Members')
const app=express();


app.use(logger)

app.get('/routes/api',(req,res)=>{
    res.json(members)
})
// get all the specific number
//  app.get('/routes/api/:uid',(req,res) =>{
//      console.log(req.params.uid)
// })

const PORT=3000;
// app.get('/test',(req,res)=>{
//     res.send("this is test url")
// })


// app.get('/test2',(req,res)=>{
//     res.send("this is test2  url!!!")
// })
app.listen(PORT,() => console.log(`Server is running at ${PORT}`))