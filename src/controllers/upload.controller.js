const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { uploadService} = require('../services');
const fs = require('fs');

const uploadFile = catchAsync( async (req, res) => {
    const uplodedCsv = await uploadService.uploadFile(req);
    res.send(uplodedCsv, httpStatus.OK)
  });

  module.exports = {
    uploadFile
  };