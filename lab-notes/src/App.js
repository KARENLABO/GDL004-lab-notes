import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={SignIn}/>
                <Route path='/SignIn' component={SignIn}/>
                <Route path='/SignUp' component={SignUp}/>
                <Route path='/Dashboard' component={DashBoard}/>
            </Switch>
            
        </Router>
    )
}



  export default App