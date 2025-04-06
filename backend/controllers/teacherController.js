import teacherCollection from "../modals/teacherCollection.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import studentCollection from "../modals/studentCollection.js";
import assignmentCollection from "../modals/assignmentCollection.js";
import { date } from "../utils/extraFunctions.js";

const loginTeacher = async (req, res) => {
    try {
        const { uid, password } = req.body;
        if (!(uid && password)) {
            return res.status(404).json({ message: "Please Fill details" })
        }
        const uidExixts = await teacherCollection.findOne({uid}).select('password');
        if(!uidExixts){
            return res.status(404).json({ message: "User not found" })
        }
        const passwordCorrect = await bcrypt.compare(password,uidExixts.password)
        if(!passwordCorrect){
            return res.status(404).json({ message: "Invaild Credentails" })
        }
        const token = jwt.sign({id:uidExixts._id} , process.env.Token_KEY)
        return res.status(200).json({ message: "logged In..." , token })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const myData = async(req,res) => {
    try {
        const id = req.id;
        const idFound = await teacherCollection.findById(id);
        if(!idFound){
            return res.status(404).json({ message:"User Not Found" })
        }
        return res.status(200).json(idFound)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const myStudents = async(req,res)=>{
    try {
        const grade = req.grade;
        const studentsFind = await studentCollection.find({grade})
        if(!studentsFind){
            return res.status(404).json({ message:"No students found"})
        }
        return res.status(200).json(studentsFind)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const addAssignment = async(req,res)=>{
    try {
        const {title,content}=req.body;
        const {grade , name} = req.teacher;
        console.log(grade,name)
        const sent = await assignmentCollection.insertOne({grade:grade,title,content,by:name})
        return res.status(200).json({ message:"Assignmen Feeded" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const presentStudent = async(req,res)=>{
    const {studentId} = req.params;
    const today = date();
    try {
        const found = await studentCollection.findById(studentId);
        const sheet = found.attendance;
        console.log(sheet)
        const todayFound =  sheet.filter((ele)=>ele.date == today)
        console.log(todayFound[0])
        if(todayFound[0].status === 'W'){
            found.status="Present"
            todayFound[0].status = "P"
            await found.save();
            return res.status(200).json({message:"Mraked present"})
        }
        else{
            return res.status(200).json({message:"Its seems attendance already marked"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const absentStudent = async(req,res)=>{
    const {studentId} = req.params;
    const today = date();
    try {
        const found = await studentCollection.findById(studentId);
        const sheet = found.attendance;
        const todayFound =  sheet.filter((ele)=>ele.date == today)
        console.log(todayFound[0])
        if(todayFound[0].status === 'W'){
            found.status="Absent"
            todayFound[0].status = "A"
            await found.save();
            return res.status(200).json({message:"marked absent"})
        }
        else{
            return res.status(200).json({message:"Its seems attendance already marked"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export { loginTeacher , myData , myStudents , addAssignment , presentStudent , absentStudent}