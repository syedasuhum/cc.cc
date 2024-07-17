import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const [profile,setProfile]=useState({})
    const navigate=useNavigate()
    let user = localStorage.getItem("user")
    const get=async()=>{
        
        if(user){
        console.log(user)
        user= JSON.parse(user)
        let result = await fetch('https://outtinc-ecommere.onrender.com/api/v1/authentication/getprofile',{
            headers:{
                token:user.token
            }
        })
        result= await result.json()
        setProfile(result)
        console.log("profile :",result.profile)
        console.log(result)
    }
    else{
        navigate("/login")
    }
    }
    useState(()=>{
        get()
    },[])
  return (
<div>
   <p>log out first to access login page</p>
    <h1>name : {profile.name}</h1>
    <h1>email : {profile.email}</h1>
    <button onClick={()=>{localStorage.clear(); navigate("/login")}} className='btn btn-primary'>logout</button>
    
</div>
  )
}
