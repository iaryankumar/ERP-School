// admin register , login , forgot_password , datafetching , regiatser students , register teacher , teachers featching , student fetching , fee upadtes , salary upadtes , send messages , delete messages , delete student , delete teacher , view assignments , delete assignments.

import { validationResult } from "express-validator"
import adminCollection from "../modals/adminCollection.js";
import randomInteger from "random-int";
import nodemailer from 'nodemailer'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import randomString from "random-string";
import teacherCollection from "../modals/teacherCollection.js";
import assignmentCollection from "../modals/assignmentCollection.js";
import studentCollection from "../modals/studentCollection.js";
import { date } from "../utils/extraFunctions.js";

const registerAdmin = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json(error.errors[0])
    }
    const detaills = req.body;
    try {
        const emailExists = await adminCollection.findOne({ email: detaills.email })
        if (emailExists) {
            return res.status(409).json({ message: "Email is already exists" })
        }
        const schCodeExists = await adminCollection.findOne({ schoolCode: detaills.schoolCode })
        if (schCodeExists) {
            return res.status(409).json({ message: "School Code is already exists , please use diffrent" })
        }
        const uid = randomInteger(99999999) + '@' + "webnxt";
        const password = randomInteger(788) + randomString({ length: 5 }) + randomInteger(788);
        const role = "Admin";
        detaills.uid = uid;
        detaills.password = password
        detaills.role
        const sent = await adminCollection.insertOne(detaills);
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "k.aryan5710@gmail.com",
                pass: "icpk xjwb dgpc lblq",
            },
        });
        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: 'k.aryan5710@gmail.com', // sender address
                to: detaills.email, // list of receivers
                subject: "Registration Successful – Welcome!", // Subject line
                text: `Dear [Recipient's Name],

We are pleased to inform you that your registration has been successfully completed! Thank you for joining Service.

You can now access all the features and benefits our platform offers. To get started, please log in to your account using the credentials you created during registration.

Login Details:

Username: ${uid}

Password: ${password} (if you set one)

If you need any assistance or have questions, feel free to reach out to our support team at [support email or phone number].

Thank you again for registering with us! We look forward to serving you`, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);
        return res.status(200).json({ message: "Registration Complete" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const loginAdmin = async (req, res) => {
    const { uid, password } = req.body;
    try {
        const uidExist = await adminCollection.findOne({ uid }).select('password');
        if (!uidExist) {
            return res.status(404).json({ message: "User not found" })
        }
        const passwordMatch = await bcrypt.compare(password, uidExist.password);
        if (!passwordMatch) {
            return res.status(404).json({ message: "Incorrect password" })
        }
        const token = jwt.sign({ id: uidExist._id }, process.env.Token_KEY)
        return res.status(200).json({ message: "logged inn...", token })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const myData = async (req, res) => {
    const id = req.id;
    try {
        const idVaild = await adminCollection.findById(id)
        if (!idVaild) {
            return res.status(404).json({ message: "Something went wrong" })
        }
        return res.status(200).json(idVaild)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const addTeacher = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json(error.errors[0])
    }
    const details = req.body;
    try {
        const emailExists = await teacherCollection.findOne({ email: details.email });
        if (emailExists) {
            return res.status(404).json({ message: "Email already exists" })
        }
        const gradeExists = await teacherCollection.findOne({ grade: details.grade });
        if (gradeExists) {
            return res.status(404).json({ message: "Already appoint a teacher for this class" })
        }
        const uid = randomInteger(99999999) + '@' + "webnxt";
        const password = randomInteger(788) + randomString({ length: 5 }) + randomInteger(788);
        // const password = "12345678"
        details.uid = uid;
        details.password = password
        const createTeacher = await teacherCollection.insertOne(details)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "k.aryan5710@gmail.com",
                pass: "icpk xjwb dgpc lblq",
            },
        });
        async function main() {
            const info = await transporter.sendMail({
                from: 'k.aryan5710@gmail.com',
                to: details.email,
                subject: "Registration Successful – Welcome!",
                text: `Dear Sir/Mam,

We are thrilled to inform you that your registration has been successfully completed! Congratulations and welcome to our school.

You can now access all the features and resources our platform offers. To get started, please log in to your account using the credentials you provided during registration.

Login Details:

Username: ${uid}

Password: ${password} (if you set one)

If you need any assistance or have any questions, please feel free to contact our support team at [support email or phone number].

Thank you once again for joining our school. We look forward to supporting you in your teaching journey!`, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);
        return res.status(201).json({ message: "Teacher Added Success" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const addStudent = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json(error.errors[0])
    }
    const details = req.body;
    const schoolName = req.schoolName;
    try {
        const emailExists = await studentCollection.findOne({ email: details.email });
        if (emailExists) {
            return res.status(404).json({ message: "Email already exists" })
        }
        const uid = randomInteger(99999999) + '@' + "webnxt";
        const password = randomInteger(788) + randomString({ length: 5 }) + randomInteger(788);
        // const password = "12345678"
        details.uid = uid;
        details.password = password
        details.schoolName = schoolName
        details.status = "Waiting"
        const createStudent = await studentCollection.insertOne(details);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "k.aryan5710@gmail.com",
                pass: "icpk xjwb dgpc lblq",
            },
        });
        async function main() {
            const info = await transporter.sendMail({
                from: 'k.aryan5710@gmail.com',
                to: details.email,
                subject: "Registration Successful – Welcome!",
                text: `We are thrilled to inform you that your admission has been successfully completed! Congratulations and welcome to our School.

You can now enjoy all the features and benefits our platform offers. To get started, please log in to your account using the credentials you provided during the admission process.

Login Details:

Username: ${uid}

Password: ${password} (if you set one)

If you need any assistance or have any questions, please feel free to contact our support team at [support email or phone number].

Thank you once again for choosing our school. We look forward to supporting you on your journey!`, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);
        return res.status(201).json({ message: "Student Added Success" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const fetchTeachers = async (req, res) => {
    try {
        const teachers = await teacherCollection.find();
        return res.status(200).json(teachers)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const fetchStudents = async (req, res) => {
    try {
        const students = await studentCollection.find();
        return res.status(200).json(students)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const fetchAllAssignments = async (req, res) => {
    try {
        const assignments = await assignmentCollection.find();
        return res.status(200).json(assignments)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deletAssignments = async(req,res)=>{
    const {assignmentId} = req.params;
    try {
        const found = await assignmentCollection.findByIdAndDelete(assignmentId)
        return res.status(200).json({message:"Assignment Deleted"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


const markPending = async (req, res) => {
    try {
        const findStudents = await studentCollection.find();
        const today = date();
        const arr=[]
        try {
            findStudents.forEach(async (ele) => {
                const isTodayAlreadyMarked = ele.attendance.some((val) => val.date === today)
                if (isTodayAlreadyMarked) {
                }
                else {
                    ele.attendance.push({ date: today, status: "W" })
                    ele.status="Waiting"
                    arr.push(ele)
                    await ele.save()
                }
            })
            if(arr.length==findStudents.length){
                return res.status(200).json({message:"operation Success"})
            }
            else{
                return res.status(200).json({message:"Already Marked"})
            }

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}




export { registerAdmin, loginAdmin, myData, addTeacher, addStudent, fetchTeachers, fetchStudents, markPending ,fetchAllAssignments , deletAssignments}