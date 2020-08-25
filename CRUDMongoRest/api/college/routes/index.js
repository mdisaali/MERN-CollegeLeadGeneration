const app = require("express").Router();

const { list } = require('../controller');

//app.post('//:id', loginUser);

app.get('/', (req, res, next)=>{
    try{
        if(!req.body.searchString){
            throw 'Bad Request, search string should not be undefined or null'
        }
        const collegeList =list(req.body.searchString);
        res.send(collegeList)
    }catch(err){
        res.status(400).send({message: err.message})
    }
});

module.exports = app;