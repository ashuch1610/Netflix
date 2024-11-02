import React, { useState } from 'react';
import Header from "./Header";


function Login()
{
    const [isSignInForm, setIsSignInForm]= useState(true)
    const [title, setTitle]= useState("sign in")

    const toggleSignInform=()=>{
        //setTitle("Signup")
        setIsSignInForm(!isSignInForm)

         
        
    }
 
    return(
        <div > 
          
            <div  >
            <Header/>
            <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" alt="" />

            </div>
            
            
            <form action="" className='flex flex-col relative top-[-300px] ml-[231px] z-11 '>
                   {/* <h1 className='bg-white'>{title}</h1> */}
                  
                    <h1 className='bg-white'>{isSignInForm?"Sign IN":"Sign Up"}</h1>
                  { !isSignInForm && <input type="text"  placeholder='Full Name'/>}
                    <input type="text" placeholder='email address' />
                    <input type="password" placeholder='password' />
                    <button type='submit'>{isSignInForm?"Sign IN":"Sign Up"}</button>
                    <p className='bg-white' onClick={toggleSignInform}>{isSignInForm?"new to netflix?Sign up now":"Already resigtered? Sign In now"}</p>
            </form>

          
        </div>
    )
}
export default Login;