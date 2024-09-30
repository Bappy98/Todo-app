const { Schema, default: mongoose } = require("mongoose");

const todo = new Schema({
    name:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        default:false
    },
    rank:{
        type:String,
        enum:["red","green","yellow",''],
        default: ''
    }
})
const Todo = mongoose.model('Todo',todo)
module.exports = Todo