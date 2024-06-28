const mongoose = require('mongoose');

const Client = mongoose.model('Client',{
    title:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    position:{type:String},
    company:{type:String},
    title:{type:String},
    business:{type:String},
    employees:{type:String},
    street:{type:Number},
    additional:{type:String},
    zip:{type:Number},
    place:{type:String},
    country:{type:String},
    code:{type:Number},
    phone:{type:Number},
    email:{type:String}
})
module.exports = Client;