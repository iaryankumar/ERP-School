import express from 'express';
import { absentStudent, addAssignment, loginTeacher, myData, myStudents, presentStudent } from '../controllers/teacherController.js';
import { tokenCheck } from '../middlewares/checkToken.js';
import { isTeacher } from '../middlewares/isTeacher.js';
const router = express.Router();


router.post('/login',loginTeacher)
router.get('/myData',tokenCheck,myData)
router.get('/myStudents',isTeacher,myStudents)
router.post('/addAssignment',isTeacher,addAssignment)
router.put('/present/:studentId',isTeacher,presentStudent)
router.put('/absent/:studentId',isTeacher,absentStudent)



export default router;