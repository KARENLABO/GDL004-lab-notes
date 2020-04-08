import React, {useState} from 'react';
import firebase from '../config/firebase'
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Auth.css'

function InputSignUp(){
    const [name, setName] =useState ('')
    const [email, setEmail] =useState ('')
    const [password, setPassword] =useState ('')
    const history = useHistory()
    
    return (
        <div>
            <form >   
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
   
    async function onRegister(event) {
        event.preventDefault()
		try {
            await firebase.register(name, email, password)
            history.push('/Dashboard')
		} catch(error) {
			alert(error)
		}
	}
}

export default InputSignUp;