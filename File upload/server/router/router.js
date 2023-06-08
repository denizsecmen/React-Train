const express = require('express');
const multer = require('multer');
var fs=require('fs');
const Fetch=import('node-fetch');
const storage = multer({ dest: '../uploads' });
const router = express.Router();
const model=require('../model/model');
router.post('/upload', storage.single('Image'), (req, res) => {
  console.log(req.body.Name);
  console.log(req.body.Price);
  console.log(req.file.filename);
  model.create({Name:req.body.Name,Price:req.body.Price,imageUrl:req.file.filename}).catch((err)=>{console.log(err)});
  res.send('Success');
});
router.get('/retrieve',(req,res)=>{
  model.find({}).then((result)=>{
    var datalist=[];
    result.map((elem,index)=>{
      var data=fs.readFileSync('../uploads/'+elem.imageUrl);
      const encodedImage = Buffer.from(data).toString('base64');
      var structure={
        Name:elem.Name,
        Price:elem.Price,
        imageUrl:encodedImage
      }
      datalist.push(structure);
      console.log(datalist);
    });
    res.json(JSON.stringify(datalist));
  });
});
module.exports = router;