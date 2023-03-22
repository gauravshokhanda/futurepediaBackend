'use strict'

const mongoose = require('mongoose')
const messageTemplateSchema = new mongoose.Schema(
  {
    templateName: {
      type: String,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: [true, 'template cannot be empty']
    }
  },
  { timestamps: true }
)

const MessageTemplate = mongoose.model('MessageTemplate', messageTemplateSchema)

module.exports = {
  MessageTemplate
}
