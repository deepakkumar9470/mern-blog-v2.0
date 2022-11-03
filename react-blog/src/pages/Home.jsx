import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
// import {posts} from '../post'
import moment from 'moment'
import axios from 'axios'
const Home = () => {

   const [postsData,setPostsData] = useState([])
   const cat = useLocation().search
   console.log(cat)
   
   useEffect(() => {
    const fetchPostData = async () =>{
      try {
        const res = await axios.get(`/posts${cat}`)
        console.log(res.data)
        setPostsData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPostData()  
   }, [cat])
   
  return (
    <div className='home'>
      <div className="posts">
        {
          postsData?.map((post)=>(
            <div className="post">
              <div className="img">
                <img src={post.img} alt="pmfxf" />
              </div>
              <div className="content">
                <Link  className='link' to={`/post/${post.id}`}>
                   <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <span>{moment(post.date).fromNow()}</span>
                <button>Read more</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home