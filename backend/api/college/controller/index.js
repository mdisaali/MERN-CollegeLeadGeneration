const {
    getAllColleges,
    findByCollegeName
} = require('../service');
const College = require('../models');
const CollegeModel = require('../models/college')
const mongoose = require('mongoose');
mongoose.model("college");


const list = async (searchString) => {
    try {
        let collegeList = [];
        if (searchString === '') {
            collegeList = await getAllColleges();
        } else {
            collegeList = await findByCollegeName(searchString);
            console.log(collegeList);
        }
        return collegeList;
    } catch (err) {
        throw err;
    }
}

const create = async () => {
    console.log('abcde')

    try{
        const collegeDTO = new CollegeModel({
            name: 'shgknm'
        })
    
        let buf = new Buffer.from(JSON.stringify(collegeDTO))
    
        const college = new College({
            buffer: buf
        });
    
        const newUser = await college.save();
        console.log(newUser);
    }catch(err){
        throw err;
    }
    
}
module.exports = {
    list,
    create
}