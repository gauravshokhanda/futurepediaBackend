const httpStatus = require('http-status');
const { UploadCsv } = require('../models');
const ApiError = require('../utils/ApiError');
const csvToJson = require('csvtojson');
const config = require('../config/config');
const fs = require('fs');
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const uploadFile = async (req) => {
    const insertRecord = await insertCsvData(req.file.path);
    // file delete logic after uploading to db.
    const fileName = config.filePath + "/" + req.file.filename;
    fs.unlink(fileName,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
   }); 
    return 'file uploded';
};

const insertCsvData = async (filePath) => {
    const jsonObj = await csvToJson().fromFile(filePath);
    UploadCsv.insertMany(jsonObj,(err,data)=>{
     if(err){  
        console.log(err);  
    }
 });
}

module.exports = {
    uploadFile
};