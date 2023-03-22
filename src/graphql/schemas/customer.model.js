'use strict'
const mongoose = require('mongoose')
const validator = require('validator')
const { PASSWORD_MIN_LENGTH, NAME_MAX_LENGTH, NAME_MIN_LENGTH } = require('../../constants/validations')
const customersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please Enter Your Name'],
      maxLength: [NAME_MAX_LENGTH, 'Name cannot exceed 30 characters'],
      minLength: [NAME_MIN_LENGTH, 'Name should have more than 3 characters']
    },
    company: {
      type: String,
      required: [true, 'Please Enter Your Company Name']
    },
    email: {
      type: String,
      required: [true, 'Please Enter Your Email'],
      unique: true,
      validate: [validator.isEmail, 'Please Enter a valid Email']
    },
    password: {
      type: String,
      required: [true, 'Please Enter Your Password'],
      minLength: [PASSWORD_MIN_LENGTH, 'Password should be greater than 8 characters'],
      select: false
    },
    role: {
      type: String
    },
    isEmailVerified: {
      type: Boolean
    }
  },
  { timestamps: true }
)
const Customers = mongoose.model('Customers', customersSchema)
module.exports = {
  Customers
}
