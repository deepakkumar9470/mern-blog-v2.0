import express from 'express'
import { } from '../controllers/userController.js'

const router = express.Router()


// router.post('/',  createPost)
// router.get('/', console.log('helo'))
router.get('/', (req,res)=>{
    res,send('hello bhai')
})
// router.get('/:id',  getPostById)
// router.put('/:id',  editPost)
// // router.delete('/:id',  deletePost)

export default router
