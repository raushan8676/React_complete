import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  const increase = ()=>{
    if(count < 20){
      setCount(count+1)
    }
  }

  const Decrease = ()=>{
    if(count > 0){
      setCount(count-1)
    }
  }

  return (
   <>
    <h1>Counter: {count}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={Decrease}>Decrease</button>
   </>
  )
}

export default App
