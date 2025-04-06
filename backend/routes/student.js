import express from 'express';
import { assignmentData, login, myData } from '../controllers/studentControllers.js';
import { tokenCheck } from '../middlewares/checkToken.js';
const router = express.Router();

router.post('/login',login)
router.get('/myData',tokenCheck,myData)
router.get('/assignments',tokenCheck,assignmentData)



export default router