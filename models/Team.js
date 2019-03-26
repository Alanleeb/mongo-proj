const mongoose = require ('mongoose')

const Team = new mongoose.Schema({
    teamName: {type:String, trim:true, default:''},
    cityName: {type:String, trim:true, default:''},
    good: {type:Boolean, default:' '}
})

module.exports = mongoose.model("team", Team)