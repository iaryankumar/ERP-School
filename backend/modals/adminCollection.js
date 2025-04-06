import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const adminSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    schoolName:{
        type:String
    },
    schoolCode:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    app_key:{
        type:String,
        select:false
    }
},{timestamps:true})


adminSchema.add({
    uid:{
        type:String
    },
    password:{
        type:String,
        select:false
    },
    role:{
        type:String
    },
})

adminSchema.pre('save', async function(next) {
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

const adminCollection = mongoose.model('Admins',adminSchema);
export default adminCollection