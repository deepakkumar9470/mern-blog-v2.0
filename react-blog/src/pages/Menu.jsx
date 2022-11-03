import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {posts} from '../post'
import axios from 'axios'

const Menu = ({cat}) => {

  console.log('from menu', {cat})

  const [posts,setPosts] = useState([])
  
  useEffect(() => {
   const fetchPostData = async () =>{
     try {
       const res = await axios.get(`/posts/?cat=${cat}`)
       setPosts(res.data)
     } catch (error) {
       console.log(error)
     }
   }
   fetchPostData()  
  }, [cat])

  return (
    <div className='menu'>
        <h1>Other's Post you may like</h1>
        {
            posts.map((post)=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))
        }
    </div>
  )
}

export default Menu