import express from 'express';
import { addStudent, addTeacher, deletAssignments, fetchAllAssignments, fetchStudents, fetchTeachers, loginAdmin, markPending, myData, registerAdmin } from '../controllers/adminControllers.js';
import { body } from 'express-validator';
import { tokenCheck } from '../middlewares/checkToken.js';
import { isAdmin } from '../middlewares/isAdmin.js';
const router = express.Router();

router.post('/create',[
    body('name').isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body('email').isEmail().withMessage("Invaild email type"),
    body('schoolName').isLength({min:3}).withMessage("School Name must be at least 3 characters long"),
    body('schoolCode').isLength({min:3}).withMessage("School Code must be at least 3 characters long"),
    body('address').isLength({min:3}).withMessage("Address must be at least 3 characters long"),
],registerAdmin)

router.post('/login',loginAdmin)
router.get('/myData',tokenCheck,myData)
router.get('/fetchTeachers',isAdmin,fetchTeachers)
router.get('/fetchStudents',isAdmin,fetchStudents)
router.get('/fetchAllAssignments',isAdmin,fetchAllAssignments)
router.post('/addTeacher',isAdmin,[
    body('name').isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body('email').isEmail().withMessage("Invaild email type"),
] ,addTeacher)
router.post('/addStudent',[
    body('name').isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body('email').isEmail().withMessage("Invaild email type"),
    body('parentEmail').isEmail().withMessage("Invaild parent email type"),
    body('fatherName').isLength({min:3}).withMessage("Father name must be at least 3 characters long"),
    body('motherName').isLength({min:3}).withMessage("Mother name must be at least 3 characters long"),
],isAdmin,addStudent)
router.get('/markPending',markPending)
router.delete('/deleteAssignment/:assignmentId',isAdmin,deletAssignments)


export default router

