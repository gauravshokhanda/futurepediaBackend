const multer = require('multer');
const config = require('../config/config');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Production and Development Upload Folder
     cb(null, config.filePath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    }
});

module.exports = storage;