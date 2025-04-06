import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    grade:{
        type:String
    },
    aadhar:{
        type:String,
    },
})


teacherSchema.add({
    uid:{
        type:String
    },
    password:{
        type:String,
        select:false
    },
})


teacherSchema.pre('save', async function (next) {
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



const teacherCollection = mongoose.model("Teachers",teacherSchema);
export default teacherCollection

