import React, { useState } from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import '../index.css';
import Button from 'react-bootstrap/Button'


function OptionsAuth (){
    const [option, setOption] = useState ('sign-in');
 
    return ( 
    <div>
        <Button variant="link" 
        onClick={()=> setOption('sign-in')}>Sign In</Button>
        <Button  variant="link" 
        onClick={()=> setOption('sign-up')}>Sign Up</Button>
        {option === 'sign-in'
        ? (<SignIn/>)
        : (<SignUp/>)}
    </div>
    )
}


export default OptionsAuth;