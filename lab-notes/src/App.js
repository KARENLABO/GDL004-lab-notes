import React from 'react';
import '../src/Components/componentsCSS/App.css'  

import ChooseOptionAuth from './Components/ChooseOptionAuth'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';

function App() {
    return (
        <Router>
            <div className='signUpandsignInPage'>
                <Switch>
                    <Route path='/' exact component={DashBoard}/>
                    <Route path='/SignIn' component={SignIn}/>
                    <Route path='/SignUp' component={SignUp}/>
                </Switch>
            </div>
        </Router>
    )
}



  export default App