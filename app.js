const express=require('express');
const app=express();
const path=require('path');
const ejs=require('ejs');
require('dotenv');
//Serving Static Files
app.use(express.static(__dirname+'/static'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Setting EJS
app.set('view engine','ejs');
app.set('views',__dirname+path.join('/views/templates'));


app.get('/',(req,res)=>{
    res.render('homepage');
})
app.get('/videoplay/:id',(req,res)=>{
    res.render('videopage');
})
app.get('/searchpage',(req,res)=>{
    res.render('searchpage');
})
app.get('/searchpage/:title',(req,res)=>{
    res.render('searchpage');
})
app.listen(process.env.PORT||3000,()=>{
    console.log('Server is Running');
})