import { Router } from "express";
import * as userContoller from '../controllers/user.controller.js';
import {body} from 'express-validator';


const router =Router();

router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min:5}).withMessage('Password must be atleast 5 number')
    ,userContoller.createUserController);

export default router;
