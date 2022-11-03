import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../db/db.js'
// users, posts are tables  in database

export const register =  (req,res) =>{
   const q = "SELECT * FROM users WHERE username = ? OR email = ?"
   db.query(q, [req.body.username,req.body.email],(err,data)=>{
       if(err) return res.status(400).json(err)
       if(data.length) return res.status(409).json('User already exists!')
       const salt =   bcrypt.genSaltSync(10)
      //  const newPassword = req.body.password.toString();
       const hashPass =  bcrypt.hashSync(req.body.password.toString(), salt)

       const q = "INSERT INTO users(`username`, `email`, `password` ) VALUES (?)"

      const value = [
         req.body.username,
         req.body.email,
         hashPass,
      ]
      db.query(q,[value], (err,data)=>{
         if(err) return res.status(400).json(err)
         return res.status(200).json('User Registration successful')
      }); 
   });  
};

export const login = (req,res) =>{
   const q = "SELECT * FROM users WHERE username = ? "
   db.query(q, [req.body.username], (err,data)=>{
      if(err) return res.status(400).json(err)
      if(data.length === 0) return res.status(409).json('User not found!!')

      // compare password
      const isCompare = bcrypt.compare(req.body.password, data[0].password)
      if(!isCompare) return res.status(400).json('Invalid credentials')

      const token = jwt.sign({id : data[0].id}, "jwtkey")
      const {password, ...other} = data[0]
      res.cookie("access_token", token, {
         httOnly: true
      }).status(200).json(other)
   })
    
}


export const logout = (req,res) =>{

   res.clearCookie('access_token', {
      sameSite : 'none',
      secure:  true
   }).status(200).json('User has been logged out')

}