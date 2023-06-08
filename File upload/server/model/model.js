var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
var schema=mongoose.Schema({
    Name:{type:String,unique:true},
    Price:{type:String},
    imageUrl:{type:String}
})
var model=mongoose.model('test',schema);
module.exports=model;