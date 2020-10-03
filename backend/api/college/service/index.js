const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const College = require('../models');
mongoose.model("college");

const getAllColleges = async() =>{
    try{
        const collegeList = await College.find();
        return collegeList;
    }catch(err){
        throw err;
    }
}

const findByCollegeName = searchQuery =>{

}

module.exports= {
    getAllColleges,
    findByCollegeName
} 