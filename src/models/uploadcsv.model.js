const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const {
  toJSON,
  paginate
} = require('./plugins');
const {
  roles
} = require('../config/roles');
const {
  MIN_COMPANY_LENGTH,
  MAX_COMPANY_LENGTH
} = require('../constants');

const uploadcsvSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: roles,
    default: 'user',
  },
}, {
  timestamps: true,
});

// add plugin that converts mongoose to json
uploadcsvSchema.plugin(toJSON);
uploadcsvSchema.plugin(paginate);

/**
 * @typedef UploadCsv
 */
const UploadCsv = mongoose.model('UploadCsv', uploadcsvSchema);

module.exports = UploadCsv;
