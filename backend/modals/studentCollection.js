import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    motherName:{
        type:String,
    },
    parentEmail:{
        type:String,
    },
    aadhar:{
        type:String,
    },
    grade:{
        type:String,
    },
    address:{
        type:String
    },
    phone:{
        type:String,
    },
    parentPhone:{
        type:String,
    },
    status:{
        type:String,
    },
    attendance:[
        {
            date:{
                type:String
            },
            status:{
                type:String
            },
        }
    ]
},{timestamps:true})


studentSchema.add({
    uid:{
        type:String
    },
    schoolName:{
        type:String
    },
    password:{
        type:String,
        select:false
    },
})


studentSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
            next()
        }
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password,salt)
        } catch (error) {
            next(error)
        }
})


const studentCollection = mongoose.model("Students" , studentSchema);
export default studentCollection