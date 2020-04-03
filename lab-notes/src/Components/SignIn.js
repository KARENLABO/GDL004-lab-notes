import React, {useState} from 'react';
import firebase from '../config/firebase'
import '../Components/componentsCSS/Auth.css'
import Banner from './Banner'


function SignIn () {
    const [email, setName] =useState ('')
    const [password, setPassword] =useState ('')
  
    return (
        <div className='SignIn'>
            <Banner className='banner'/>
            <div className='inputSignin'>
            <form >   
                <label>
                    Email:
                    <input
                        name='inputNameSignIn'
                        value ={email}
                        type='email'
                        onChange ={(e)=>{
                            setName(e.target.value)
                        }}
                    >
                    </input>
                </label>   

                <label>
                    Password:
                    <input
                        name='inputPasswordSignIn'
                        value ={password}
                        type='password'
                        onChange ={(e)=>{
                            setPassword(e.target.value)
                        }}
                    >
                    </input>
                </label>  

                <button type = 'submit' onClick={login}>Sign In</button>

            </form>
            
        </div>
    
        </div>
    )
    async function login (){
        try {
            await firebase.login(email,password)
        } catch (error) {
            alert ('please verify your information and try again!')
        }
    }
}




export default SignIn;