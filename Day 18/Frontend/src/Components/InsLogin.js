import React,{ useState } from 'react'
import "./login.css"
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'
import { RepeatOneSharp } from '@mui/icons-material';
function InsLogin() {
  const [Email,setEmail]=useState('')
  const [Pass,setPass]=useState('')
  const nav=useNavigate();

  const dispatch=useDispatch();
  const type="ins"
  const validate=(e)=>{
    e.preventDefault();
    if(Email.length===0||Pass.length===0)
    {
      alert("Enter All fields")
    }
    else{
      const loginCred={
        email:Email,
        password:Pass
      }
      axios.post("http://localhost:8080/auth/login",loginCred).then(response=>{
        if(response.data.token&&response.data.role==="INSTRUCTOR"){

          localStorage.setItem("token",response.data.token)
          localStorage.setItem("role",response.data.role)
          localStorage.setItem("email",Email)
          nav("/staffpanel")
        }
        else{
          alert("something went wrong")
        }
      }).catch(error=>{
        alert(error.response.data)
      })
    }
  }
  return (
    <div>
    <section>
    <div class="imgBx">
        <img alt="img" src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.webp?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="/>

    </div>
    <div class="contentBx">
        <div class="formBx">
        <img alt="img" class="logologin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCX5_wYEa6hyWoqSBOaPbaHw5Ff8Ljp0WcA&usqp=CAU"/>
            <br></br><h2 id="font">Staff-Login</h2>
            <br/>
            <br></br>
            <form>
                <div class="inputBx">
                    <span>Username</span>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" name=""/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input onChange={(e)=>setPass(e.target.value)} type="password" name=""/>
                    
                </div>
               <br></br>
                <div class="inputBx">
                    <input onClick= {validate} type="submit" value="Submit" name=""/>
                </div>
                <div class="inputBx">
                    <p>Don't have an account? Signup as <br></br><br></br>
                    <Link to="/fac-register">   Faculty</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</section>
    </div>
  )
}

export default InsLogin