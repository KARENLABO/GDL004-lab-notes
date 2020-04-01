import React, {useState} from 'react';
import firebase from '../config/firebase'
import '../Components/componentsCSS/Auth.css'

function SignUp(){
    const [name, setName] =useState ('')
    const [email, setEmail] =useState ('')
    const [password, setPassword] =useState ('')

    
    return (
        <div>
            <form className= 'authTemplate'>   
            <label>
                    Name:
                    <input
                        name='inputNameSignUp'
                        value ={name}
                        onChange ={(e)=>{
                            setName(e.target.value)
                        }}
                    >
                    </input>
                </label>   

                <label>
                    Email:
                    <input
                        name='inputEmailSignUp'
                        value ={email}
                        type ='email'
                        onChange ={(e)=>{
                            setEmail(e.target.value)
                        }}
                    >
                    </input>
                </label>   

                <label>
                    Password:
                    <input
                        name='inputPasswordSignUp'
                        value ={password}
                        type='password'
                        onChange ={(e)=>{
                            setPassword(e.target.value)
                        }}
                    >
                    </input>
                </label>  

                <button type = 'submit' onClick={onRegister}>Sign Up</button>

            </form>
            
        </div>
    
    )

    async function onRegister() {
		try {
			await firebase.register(name, email, password)
		} catch(error) {
			alert(error.message)
		}
	}
}




export default SignUp;