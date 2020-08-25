const {
    getAllColleges,
    findByCollegeName
} = require('../service');

const list = async(searchString) =>{
    try{
        const collegeList = [];
        if(searchString===''){
            collegeList = await getAllColleges();
            console.log(collegeList);
        }else{
            collegeList = await findByCollegeName(searchString);
            console.log(collegeList);
        }
        return collegeList;
    }catch(err){
        throw err;
    }
}

module.exports={
    list
}