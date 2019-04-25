const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Author = new Schema({
  firstName: String,
  lastName: String,
  cookbooks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cookbook'
    }
  ]
})

module.exports = mongoose.model('Author', Author)
