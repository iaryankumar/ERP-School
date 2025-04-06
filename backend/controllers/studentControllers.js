import studentCollection from "../modals/studentCollection.js";
import assignmentCollection from '../modals/assignmentCollection.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const login = async(req,res)=>{
    const {uid,password}= req.body;
    console.log(uid,password)
    if(!uid || !password){
        return res.status(404).json({message:"Details are missing"})
    }
    try {
        const userFound = await studentCollection.findOne({uid}).select('password');
        if(!userFound){
            return res.status(404).json({message:"invaild credentails"})
        }
        const passwordMatch = await bcrypt.compare(password,userFound.password);
        if(!passwordMatch){
            return res.status(404).json({message:"invaild credentails"})
        }
        const token = jwt.sign({ id: userFound._id }, process.env.Token_KEY ,{expiresIn:'7d'})
        return res.status(200).json({message:"logged In" , token })
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}

const myData = async(req,res)=>{
    const id = req.id;
    try {
        const found = await studentCollection.findById(id);
        if(!found){
            return res.status(404).json({message:'user not found'}) 
        }
        return res.status(200).json(found) 
        
    } catch (error) {
        return res.status(500).json({message:error.message}) 
    }

}

const assignmentData = async(req,res)=>{
    const id = req.id;
    try {
        const found = await studentCollection.findById(id);
        if(!found){
            return res.status(404).json({message:'something went wrong'})
        }
        const assiFound = await assignmentCollection.find({grade:found.grade})
        return res.status(200).json(assiFound)
    } catch (error) {
        return res.status(500).json({message:error.message}) 
    }
}


export {login,myData,assignmentData}