module.exports.postimage=(req,res)=>{
    console.log(req.body.Name);
    console.log(req.body.Price);
    console.log(req.file);
    const response = {
        status: 'success',
        message: 'Image uploaded successfully',
        data: {
            name: req.body.Name,
            price: req.body.Price,
            file: req.file,
        },
    };
    res.status(200).json(response);
}