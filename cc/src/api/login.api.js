export const loginWithGoogle = async (navigate,accessToken,setError)=>{
    try {
        console.log(accessToken)
        let result = await fetch(`https://localhost:8080/api/v1/authentication/google`,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({googleAccessToken:accessToken})
        })
        result = await result.json()
        if(result.error){
            setError(result.error)
        }
        else{
            localStorage.setItem("user",JSON.stringify(result))
            console.log(result)
            navigate("/profile")
        }
    } catch (error) {
        console.log(error)
    }
}



export const signUpWithEmail = async(name,email,pass,cPass,setError,validator,navigate)=>{
    try {
        if(name && email && pass && cPass ){
            if(name.length>=4){
              if(validator.isEmail(email)){
                if(pass===cPass && pass.length >7){
                  setError("just wait...")  // https://outtinc-ecommere.onrender.com/api/v1/authentication/emailsignup
            
                let result = await fetch(`https://localhost:8080/api/v1/authentication/emailsignup`,{
                    method:"post",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({name,email,password:pass})
                })
                result = await result.json()
                console.log(email,pass,name)
                if(result.error){
                    setError(result.error)
                }
                else{
                    localStorage.setItem("user",JSON.stringify(result))
                    navigate("/profile")
                }
            }
            else{
              setError("password must have 8 characters and matched")
            }
            }
              else{
                setError("please enter a valid email");
              }
            }
          
            else{
              setError("name must have at least 4 characters");
            }
          }
          else{
            setError("please fill all details")
          }
    } catch (error) {
        console.log(error)
    }
}

export const loginWithEmail = async(email,pass,setError,navigate,validator) =>{
    try {
        setError("just wait")
        if(email && pass){
            if(validator.isEmail(email)){
                let result = await fetch(`https://localhost:8080/api/v1/authentication/emaillogin`,{
                    method:"post",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({email,password:pass})
                })
              result= await result.json();
           if(result.error){
               setError(result.error)
             }
             else{
                navigate("/profile")
               localStorage.setItem("user",JSON.stringify(result))
             }
            }
            else{
              setError("please enter a vilid email")
            }
          }
          else{
            setError("please fill all details")
          }
    } catch (error) {
        console.log(error)
    }
}