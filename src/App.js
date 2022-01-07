import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';
import { AuthProvider } from './Components/auth/AuthContext';
import PrivateRoute from './Components/auth/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                   <Switch>
                    <Route path='/' exact component={SignIn}/>
                    <Route path='/SignIn' component={SignIn}/>
                    <Route path='/SignUp' component={SignUp}/>
                    <PrivateRoute path='/Dashboard' component={DashBoard} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}



  export default App