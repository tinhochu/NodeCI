const mongoose = require('mongoose')
const keys = require('../../config/keys')
const User = mongoose.model('User')

module.exports = () => new User({}).save()