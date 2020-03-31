import React, {useState} from 'react';
import '../Components/componentsCSS/Auth.css'

function SignIn ({addTodo}) {
    const [email, setName] =useState ('')
    const [password, setPassword] =useState ('')
    
    return (
        <div>
            <form className= 'authTemplate'onSubmit ={(e) => {
                e.preventDefault()
                addTodo(email,password)
                setName('')
                setPassword('')
            }}>   
                
                <input
                    name='inputNameSignIn'
                    value ={email}
                    placeholder='name:'
                    onChange ={(e)=>{
                        setName(e.target.value)
                    }}
                >
                </input>
                <input
                    name='inputPasswordSignIn'
                    value ={password}
                    placeholder='password:'
                    onChange ={(e)=>{
                        setPassword(e.target.value)
                    }}
                >
                </input>
                <button type = 'submit'>Sign In</button>
            </form>
            
        </div>
    
    )
}




export default SignIn;