import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="https://www.pngplay.com/wp-content/uploads/13/Freepnglogos-Free-PNG.png" alt="ChitChat Logo" />
        <div>
          <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>

      <div class="flex flex-col gap-2 p-8  sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://th.bing.com/th/id/OIP.699VPCE9B9uElT3ay2CadQHaE8?w=283&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>
    </>
  )
}

export default App
