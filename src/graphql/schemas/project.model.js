'use strict'

const mongoose = require('mongoose')
const { NAME_MAX_LENGTH, NAME_MIN_LENGTH } = require('../../constants/validations')
const projectsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter Your Name'],
      maxLength: [NAME_MAX_LENGTH, 'Name cannot exceed 30 characters'],
      minLength: [NAME_MIN_LENGTH, 'Name should have more than 3 characters']
    },
    user: {
      type: String,
      required: [true, 'Please Enter Your Name'],
      maxLength: [NAME_MAX_LENGTH, 'Name cannot exceed 30 characters'],
      minLength: [NAME_MIN_LENGTH, 'Name should have more than 3 characters']
    }
  },
  { timestamps: true }
)

const Projects = mongoose.model('Projects', projectsSchema)

module.exports = {
  Projects
}
