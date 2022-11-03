import React,{useState,useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'
import edit from '../images/edit1.png'
import trash from '../images/delete.png'
import Menu from './Menu'
import axios from 'axios'
import moment from 'moment'
import { useContext } from 'react'
import {AuthContext} from '../context/context'

const Single = () => {
    const [post,setPost] = useState({})

    const location = useLocation()
    console.log(location)

    const {currentUser} = useContext(AuthContext)

    const postId = location.pathname.split('/')[2]
    console.log(postId)

    useEffect(() => {
        const fetchPostData = async () =>{
          try {
            const res = await axios.get(`/posts/${postId}`)
            console.log(res.data)
            setPost(res.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchPostData()  
       }, [postId])
       
    

  return (
    <div className='single'>
        <div className="content">
            <img src={post?.img ? post?.img : 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="singleimg" />
            <div className="user">
                <img src={post.userImg ? post.userImg : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="userImg" />
                <div className="info">
                    <span>{post?.username}</span>
                    <p>{moment(post.date).fromNow()}</p>
                </div>
                {
                    currentUser.username === post.username && 
                     <div className="actions">
                        <Link className='link' to={`write?edit=2`}>
                            <img src={edit} alt="edit" />
                        </Link>
                        <Link className='link' to={`write?delete=2`}>
                        <img src={trash} alt="trash" />
                        </Link>
                    </div>
                    
                }
               
            </div>
            <h1>{post.title}</h1>
            {post.desc}

            
        </div>
       <Menu cat={post.cat}/>
    </div>
  )
}

export default Single