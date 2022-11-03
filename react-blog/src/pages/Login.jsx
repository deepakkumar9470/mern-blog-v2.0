import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/context'
import { useContext } from 'react'

const Login = () => {
  const [inputs,setInputs] = useState({
    username:  "",
    password:  "",
  })

  const [err,setErr] = useState(null)
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handleChange = (e) =>{
    setInputs((prev)=>({...prev, [e.target.name] : e.target.value }))
  }
  const handleClick = async (e) =>{
    e.preventDefault()

    try {
      await login(inputs)
      navigate('/')
    } catch (error) {
      console.log(error)
      setErr(error.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input value={inputs.username}  onChange={handleChange} type="text" name="username" placeholder='email'/>
        <input value={inputs.password} onChange={handleChange} type="password" name="password" placeholder='password'/>
        {err && <p>{err}</p> }
        <button onClick={handleClick}>Login</button>
        <span>Don't have an account? <Link className='link' to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login