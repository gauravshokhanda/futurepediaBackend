const express = require('express');
const validate = require('../../middlewares/validate');
const uploadController = require('../../controllers/upload.controller');
const multer = require('multer');
var storage = require('../../utils/ImageUploader');
const router = express.Router();
var upload = multer({ storage: storage });

router.post('/uploadFile', upload.single('csv'), uploadController.uploadFile);
module.exports = router;