import { Container  ,Tabs, TabList, TabPanels, Tab, TabPanel, Box,ButtonGroup,Button, EnvironmentProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { loginWithGoogle } from "../api/login.api"



export default function Login() {
    const navigate=useNavigate()
    const [error,setError]=useState()

  
    useEffect(() => {
     
        let user=localStorage.getItem("user")
        if(user){
          navigate("/profile")
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


         
          //  FACEBOOK
          const responseFacebook = (response) => {
            // Check if Facebook login was successful
            console.log(response)
          };

  return (
    <div className='login' style={{width:"100%",display:"flex",justifyContent:"center"}} >
    <div className='login-container'>
    <Tabs>
  <TabList>
    <Tab width="100%" >Sign-up</Tab>
  </TabList>


  <TabPanels>
    <TabPanel>
      
    <GoogleLogin 
        className='goole-login-button'
    clientId={"833075335038-aqji6l1ccmhk5vngr3dut3pg4q3subtc.apps.googleusercontent.com"}
   onSuccess={onSuccess}
   onFailure={onFailure}
   buttonText={'continue with google'}
   style={{marginRight:"5px !important"}}
     />

        <h5 style={{textAlign:"center"}}>--------------- or ---------------</h5>

<div onClick={()=>navigate("/emaillogin")} className='another-email-box'>
  <img src='https://img.freepik.com/free-psd/phone-icon-design_23-2151311652.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714867200&semt=ais' />
  <p>Another Email</p>
  </div> 

   {/* <GoogleLogout
     clientId={"265468244962-t99fss5jlmggghtcrngk6d5g35tfa6kh.apps.googleusercontent.com"}
     onLogoutSuccess={onLogoutSuccess}
       />  */}

    </TabPanel>
  </TabPanels>
</Tabs>


    </div>
    </div>
  )
}
