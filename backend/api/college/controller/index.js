const {
    getAllColleges,
    findByCollegeName
} = require('../service');
const College = require('../models');
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

const create = async (collegeBody) => {

    try {
        const college = new College({
            name: collegeBody.name,
            courses: collegeBody.courses,
            city: collegeBody.city,
            rating: 0.0
        });

        const newUser = await college.save();
        return newUser;
    } catch (err) {
        throw err;
    }

}
module.exports = {
    list,
    create
}