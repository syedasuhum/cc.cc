
import { Container  ,Tabs, TabList, TabPanels, Tab, TabPanel, Box,ButtonGroup,Button, EnvironmentProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import validator from 'validator'
import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { loginWithEmail, loginWithGoogle } from '../api/login.api';
import { signUpWithEmail } from '../api/login.api';

export default function LoginEmail() {
    const [mode,setMode]=useState("s");
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [cPass,setcPass]=useState("")
    const [error,setError]=useState("")
    const [imageUrl,setImageUrl]=useState("https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg")
    const [imageFile,setImageFile]=useState()
    const navigate=useNavigate()
    const [haveAc,setHaveAc]=useState(true)

    const handleSubmit =async()=>{
        if(mode==="s"){
         signUpWithEmail(name,email,pass,cPass,setError,validator,navigate)
      }
        else{
          loginWithEmail(email,pass,setError,navigate,validator)
        }
    }

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImageUrl(reader.result);
        };
      }
    };

    useEffect(()=>{
       if(localStorage.getItem("user")){
        navigate("/")
      }
            setcPass("")
            setEmail("")
            setName("")
            setPass("")
            setImageUrl("https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg")
    },[mode])


    useEffect(() => {
      let user=localStorage.getItem("user")
        if(user){
          navigate("/")
        }
      function start() {
      gapi.client.init({
      clientId:"833075335038-aqji6l1ccmhk5vngr3dut3pg4q3subtc.apps.googleusercontent.com",
      scope: 'email',
        });
         }
        gapi.load('client:auth2', start);
         }, []);
     
    
         const onSuccess = async (response)=> {
          loginWithGoogle(navigate,response.accessToken,setError)
          };


       const onFailure = response => {
         console.log('FAILED', response);
         };


        const onLogoutSuccess = () => {
         console.log('SUCESS LOG OUT');
          };

  return (
    <div className='login' style={{width:"100%",display:"flex",justifyContent:"center"}} >
    <div className='login-container'>
    <Tabs>
  <TabList>
  { mode==="s" ? <Tab width="100%" onClick={()=>setMode("s")}>Sign-up</Tab>:
    <Tab width="100%"onClick={()=>setMode("l")} >Log-in</Tab> }
  </TabList>

  <TabPanels>

    { mode==="s" ?
    <TabPanel>
      {/* <div className='profile-box'>
        <input  name='image' type='file' onChange={(e)=>{ handleImageChange(e); setImageFile(e.target.files) }} style={{width:"0px",height:"0px"}}  id='image' accept='image/*' />
        <label htmlFor='image' className='image-label' >
          <img src={imageUrl} style={{width:"100%",height:"100%"}} />
        </label>

      </div> */}
      <div className="mb-2">
<input type="email"  value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="enter name here..."/>
        </div>
        <div className="mb-2">
<input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="enter email here..."/>
        </div>
        <div className="mb-2">
<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="enter password here..."/>
        </div>
        <div className="mb-1">
<input type="password" value={cPass} onChange={(e)=>setcPass(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="confirm password here..."/>
        </div>

        <p  style={{color:"red",marginBottom:"2px",fontSize:"10px",textAlign:"center"}}>{error}</p>

        <h5>--------------- or ---------------</h5>


 <GoogleLogin 
        className='goole-login-button'
         width="520"
    clientId={"833075335038-aqji6l1ccmhk5vngr3dut3pg4q3subtc.apps.googleusercontent.com"}
   onSuccess={onSuccess}
   onFailure={onFailure}
   buttonText={'continue with google'}
   style={{marginRight:"5px !important"}}
     />
   {/* <GoogleLogout
     clientId={"265468244962-t99fss5jlmggghtcrngk6d5g35tfa6kh.apps.googleusercontent.com"}
     onLogoutSuccess={onLogoutSuccess}
       />  */}

<div  style={{display:"flex",justifyContent:'center'}}>
<p > i have an account &nbsp;</p><p onClick={()=>setMode("l")}  style={{color:"red",cursor:"pointer"}}> login</p>
</div>
        <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    mb={0}
  >
   
    <ButtonGroup gap='4'>
      <Button onClick={handleSubmit} colorScheme='blackAlpha'>Submit</Button>
    </ButtonGroup>
  </Box>
  
    </TabPanel>
:
    <TabPanel>
    <div className="mb-2">
<input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="enter email here..."/>
        </div>
        <div className="mb-1">
<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="enter password here..."/>
        </div>
        <p style={{color:"red",marginBottom:"2px",textAlign:"center"}}>{error}</p>
        

  <h5>--------------- or ---------------</h5>

 <GoogleLogin 
        className='goole-login-button'
         width="520"
    clientId={"833075335038-aqji6l1ccmhk5vngr3dut3pg4q3subtc.apps.googleusercontent.com"}
   onSuccess={onSuccess}
   onFailure={onFailure}
   buttonText={'continue with google'}
   style={{marginRight:"5px !important"}}
     />
   {/* <GoogleLogout
     clientId={"265468244962-t99fss5jlmggghtcrngk6d5g35tfa6kh.apps.googleusercontent.com"}
     onLogoutSuccess={onLogoutSuccess}
       />  */}
<div style={{display:"flex",justifyContent:'center'}}>
<p > i have no account &nbsp;</p><p onClick={()=>setMode("s")} style={{color:"red",cursor:'pointer'}}> register</p>
</div>

<Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    mb={0}
  >

    <ButtonGroup gap='1'>
      <Button colorScheme='blackAlpha' onClick={handleSubmit}>Submit</Button>
    </ButtonGroup>

  </Box>

    </TabPanel>
}
  </TabPanels>
</Tabs>


    </div>
    </div>
  )
}

