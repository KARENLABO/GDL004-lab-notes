import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';



function OptionsAuth (){
    return ( 
        <nav>
            <ul>
                <Link to='/SignIn'>
                <li>Sign In</li>
                </Link>
                <Link to='/SignUp'>
                <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
    )
}


export default OptionsAuth;