import { useState } from 'react'
import './App.css'
import LoginForm from './components/forms/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className='font-mono flex justify-center text-3xl m-5'>Login User</h1>
<LoginForm />
    </>
  )
}

export default App
