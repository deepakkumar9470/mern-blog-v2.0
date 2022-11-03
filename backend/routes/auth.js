import express from 'express'
import { register,login,logout} from '../controllers/authController.js'

const router = express.Router()

// @/api/auth/regsiter
router.post('/register',  register)

// @/api/auth/login
router.post('/login',  login)

// @/api/auth/logout
router.post('/logout',  logout)


export default router