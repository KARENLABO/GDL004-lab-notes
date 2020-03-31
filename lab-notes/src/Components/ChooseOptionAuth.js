import React, { useState } from 'react';
import '../index.css';
import SignIn from '../Components/SignIn';
// import SignUp from '../Components/SignIn';

function ChooseOptionAuth (){
    const [auth, setAuth] = useState([])

    const addAuth = (name, password) =>{
        const arr = [...auth];
        arr.push(name, password );
        setAuth(arr)
    }

    return (
        <div>  
            <SignIn addTodo={addAuth}/>
            {auth}
        </div>
    )
};

export default ChooseOptionAuth;