import { useState } from 'react'
import './App.css'
import { Desktop } from './components/desktop/desktop'
import { Taskbar } from './components/taskbar/taskbar'
import type { OpenWindow } from './types'


function App() {
  const [ openWindows, setOpenWindows ] = useState<OpenWindow[]>([])
  const [ inFocus, setInFocus ] = useState<OpenWindow["id"] | null>(null)

  return (
    <div className='app'>
    <Desktop
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      inFocus={inFocus}
      setInFocus={setInFocus}
    />
    <Taskbar
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      inFocus={inFocus}
      setInFocus={setInFocus}
    />
    </div>
  )
}

export default App
