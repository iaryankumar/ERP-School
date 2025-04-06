import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    grade:{
        type:String,
    },
    by:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const assignmentCollection = mongoose.model("Assignments",assignmentSchema);
export default assignmentCollection