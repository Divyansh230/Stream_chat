import React from 'react'
import Left from './Home/Left/Left'
import Right from './Home/Right/Right'
import Logout from './Home/Left1/Logout'
import Signup from './Home/components/Signup'
import Login from './Home/components/Login'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(auth)
  return (
    /*<div>
      <div className='flex h-screen'>
        <Logout/>
      <Left/>
      <Right/>
      </div>
      
    </div>*/
    <Signup/>
    //<Login/>
  )
}

export default App
