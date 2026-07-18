import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  // function to generate random password
  const generatePassword = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+="!@#$%^&*(){}[]:;";

    let pass =""
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  // useeffect to call 
  useEffect(()=>{
    generatePassword();
  },[generatePassword])

  // copy password to clipboard
  const copyPassword = () => {
    if(passwordRef.current){
      passwordRef.current.select();
      document.execCommand('copy');
    }
  }


  return (
   <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl mb-5">Password Generator</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="p-2 text-black rounded bg-white w-64"
          ref={passwordRef}
        />
        <button className="bg-green-500 px-3 rounded" onClick={copyPassword}>
          Copy
        </button>
      </div>

      <div className="mb-3">
        <label>Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="ml-2"
        />
      </div>

      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          Include Numbers
        </label>
      </div>

      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          Include Symbols
        </label>
      </div>
    </div>
  )
}

export default App
