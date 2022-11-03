import express from 'express'
import { createPost, getPostById, getPosts ,editPost, deletePost} from '../controllers/postController.js'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, '..react-blog/public/upload')
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now()+file.originalname)
    }
});

const upload = multer({storage})

// @/api/posts
router.post('/',  createPost)

// /api/posts/upload
router.post('/upload',upload.single('file'),(req,res)=>{
    const file = req.body.file
    res.status(200).json('Image has been uploaded..', file.filename)
});

router.get('/',  getPosts)
router.get('/:id',  getPostById)
router.put('/:id',  editPost)
router.delete('/:id',  deletePost)

export default router