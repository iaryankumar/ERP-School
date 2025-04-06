import jwt from 'jsonwebtoken'
import adminCollection from "../modals/adminCollection.js";

const isAdmin = async (req,res,next)=>{
    const token = req.headers.authorization;
        if(!token){
            return res.status(500).json({message:"Token is missing"})
        }
        try {
            const decode = jwt.verify(token,process.env.Token_KEY)
            const {id} = decode;
            const confirmAdmin = await adminCollection.findById(id);
            if(!confirmAdmin){
                return res.status(404).json({message:"You are not allowed for this task"})
            }
            req.schoolName = confirmAdmin.schoolName
            next()
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" , error:error.message });
        }
}


export {isAdmin}