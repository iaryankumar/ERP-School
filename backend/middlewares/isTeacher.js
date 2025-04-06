import jwt from 'jsonwebtoken'
import teacherCollection from '../modals/teacherCollection.js';

const isTeacher = async (req,res,next)=>{
    const token = req.headers.authorization;
        if(!token){
            return res.status(500).json({message:"Token is missing"})
        }
        try {
            const decode = jwt.verify(token,process.env.Token_KEY)
            const {id} = decode;
            const confirmTeacher = await teacherCollection.findById(id);
            if(!confirmTeacher){
                return res.status(404).json({message:"You are not allowed for this task"})
            }
            req.grade = confirmTeacher.grade
            req.teacher = confirmTeacher
            next()
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" , error:error.message });
        }
}


export {isTeacher}