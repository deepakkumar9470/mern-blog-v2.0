import express from 'express'

const app = express()
import cors from 'cors'
import cookieParser  from 'cookie-parser'
// import connection from './db/db.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import postRoute from './routes/posts.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.get('/', (req,res)=>{
    res.send('Hello')
});


app.listen(5000,()=>{
    console.log(`Server started at port 5000`)
})