import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [inputs,setInputs] = useState({
    username:  "",
    email:  "",
    password:  "",
  })

  const [err,setErr] = useState(null)
  const navigate = useNavigate()

  const handleChane = (e) =>{
    setInputs((prev)=>({...prev, [e.target.name] : e.target.value }))
  }
  const handleClick = async (e) =>{
    e.preventDefault()

    try {
      const res = await axios.post(`/auth/register`, inputs)
      console.log(res.data)
      navigate('/login')
      // setInputs(res.data)
    } catch (error) {
      console.log(error)
      // setErr(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input value={inputs.username}
        onChange={handleChane} 
           type="text" name="username"
           placeholder='Enter username'/>
        <input value={inputs.email}
        onChange={handleChane} 
           type="text" name="email"
           placeholder='Enter email'/>
        <input value={inputs.password}
        onChange={handleChane} 
           type="password" name="password"
           placeholder='password'/>
        {err && <p>{err}</p>}
        <button onClick={handleClick}>Register</button>
        <span>Already have an account? <Link className='link' to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register