import React from 'react';
import ControllerBanner from './Components/Banner.js'
import ChooseOptionAuth from './Components/ChooseOptionAuth'

import '../src/Components/componentsCSS/App.css'  



  function App() {
    return <div className='signUpandsignInPage'>
        <ControllerBanner/>
        <ChooseOptionAuth/>
    </div>
  }



  export default App