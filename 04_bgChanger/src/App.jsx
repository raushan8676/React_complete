import { useState } from 'react'
import "./App.css"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='h-screen' style={{ backgroundColor: color }}>
      <h1 className='flex justify-center p-5 text-3xl text-white'>Background Color changer</h1>
      <div className='fixed bottom-15 left-10 right-10 bg-white flex flex-wrap p-10 rounded-4xl gap-15'>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-green-500'
          onClick={() => setColor("green")}>
          Green
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-red-500'
          onClick={() => setColor("red")}>
          red
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-yellow-500'
          onClick={() => setColor("yellow")}>
          yellow
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-olive-500'
          onClick={() => setColor("olive")}>
          olive
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-orange-500'
          onClick={() => setColor("orange")}>
          orange
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-blue-500'
          onClick={() => setColor("blue")}>
          blue
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-pink-500'
          onClick={() => setColor("pink")}>
          pink
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-purple-500'
          onClick={() => setColor("purple")}>
          purple
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-teal-500'
          onClick={() => setColor("teal")}>
          teal
        </button>
        <button
          className='text-white font-bold py-2 px-4 rounded bg-cyan-500'
          onClick={() => setColor("cyan")}>
          cyan
        </button>
      </div>
    </div>
  )
}

export default App
