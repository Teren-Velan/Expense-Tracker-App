const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const Income = new Schema({
    user: { type: ObjectId, ref: "User" },
    created_date: { type: Date, default: Date.now },
    incurred_date:{ type: Date, default: Date.now },
    description:String,
    amount:Number,
    category: { name: String, color: String },
    type: {
        type: String,
        default: "Income"
      }

})

module.exports = mongoose.model('Income' , Income);