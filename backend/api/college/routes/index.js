const app = require("express").Router();

const { list, create } = require('../controller/index');

//app.post('//:id', loginUser);

app.get('/', (req, res, next)=>{
    try{
        if(null == req.body.searchString || undefined == req.body.searchString){
            throw 'Undefined or null search string'
        }
        list(req.body.searchString).then((resData)=>{
            res.send(resData);
        }).catch((err)=>{
            res.status(400).send({message:err.message})
        }
        )
        
    }catch(err){
        res.status(400).send({message: err.message});
    }
});

app.post('/', (req, res, next)=>{
    console.log(req.body.name);
    try{
        create(req.body.name)
    }catch(err){
        res.status(400).send({message: err.message});
    }
})

module.exports = app;