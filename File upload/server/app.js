var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var router=require('./router/router');
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.listen(9000,()=>{
    console.log('Server runs at 9000.');
})