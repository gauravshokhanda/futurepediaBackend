'use strict'

const mongoose = require('mongoose')
const { NAME_MAX_LENGTH, NAME_MIN_LENGTH } = require('../../constants/validations')
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter Your Name'],
      maxLength: [NAME_MAX_LENGTH, 'Name cannot exceed 30 characters'],
      minLength: [NAME_MIN_LENGTH, 'Name should have more than 3 characters']
    },
    phone: {
      type: Number,
      required: [true, 'Please Enter Your Mobile number'],
      unique: true
    },
    tag: {
      type: [String]
    },
    attributes: {
      type: [String]
    },
    projectId: {
      type: String,
      required: [false, 'Please Enter Your Project Id']
    }
  },
  { timestamps: true }
)

const Contact = mongoose.model('Contact', contactSchema)

module.exports = {
  Contact
}
