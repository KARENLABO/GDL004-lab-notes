import React from 'react';
import Nav from'./Nav'
import Notes from './notes'

import './componentsCSS/dashBoard.css'

function DashBoard() {
    return <div className='dashboardPage'>
       <Nav/>
       <Notes/>
    </div>
}

export default DashBoard;