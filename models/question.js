const mongoose=require("mongoose");
const questionSchema=mongoose.Schema({
    quest:{
        required:true,
        type:String
    },
    opt1:{
        required:true,
        type:String
    },
    opt2:{
        required:true,
        type:String
    },
    opt3:{
        required:true,
        type:String
    },
    opt4:{
        required:true,
        type:String
    },
})
module.exports=mongoose.model("question",questionSchema)