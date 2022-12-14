const mongoose=require('mongoose')
const empdetailsSchema= new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:String,
        id:Number,
        location:Object,
        ctc:Number,
        exp:Number,
    }
)
module.exports=mongoose.model("empdetails",empdetailsSchema)

