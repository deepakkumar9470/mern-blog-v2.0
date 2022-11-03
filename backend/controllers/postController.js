import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../db/db.js'

export const createPost = (req,res) =>{

  const q = "INSERT INTO posts `title`, `desc`, `img`, `date` , `cat`"

  const value = [
    req.body.title,
    req.body.desc,
    req.file.img,
    req.body.cat,
  ]
  db.query(q,[value],(err,data) =>{
    if(err) return res.status(400).json(err)
    return res.status(200).json('Post has been published')
  });
 
};

export const getPosts = (req,res) =>{
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?"  : 
    "SELECT * FROM posts"
    db.query(q,[req.query.data],(err,data) =>{
      if(err) return res.status(400).json(err)
      return res.status(200).json(data)
    });
}

export const getPostById = (req,res) =>{
  const q = "SELECT `username`, `title`, `desc`, p.img, u.img as userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?"
  db.query(q, [req.params.id], (err,data)=>{
    if(err) return res.status(400).json(err)
    return res.status(200).json(data[0])
  })
  
}

export const editPost = (req,res) =>{

}

export const deletePost = (req,res) =>{

  const token = req.cookies.access_token
  if(!token) return res.status(400).json('Not Authenticated!')

  jwt.verify(token, 'jwtkey', (err,userinfo)=>{
      if(err)return res.status(400).json('Token is not valid')

      const postId = req.params.id
      
      const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

     db.query(q, [postId , userinfo.id], (err,data)=>{
      if(err) return res.status(500).json("You dont't have permission to delete")
      return res.status(200).json("Post has been deleted!")
     })


  })



}