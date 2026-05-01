import { useState } from 'react'
import './App.css'
import { Desktop } from './components/desktop/desktop'
import { Taskbar } from './components/taskbar/taskbar'
import type { OpenWindow } from './types'


function App() {
  const [ openWindows, setOpenWindows ] = useState<OpenWindow[]>([]);
  const [ inFocus, setInFocus ] = useState<OpenWindow["id"] | null>(null);
  const [ windowZIndexes, setWindowZIndexes ] = useState<Record<string, number>>({});
  const [ topZ, setTopZ ] = useState(1);

  const bringToFront = (id: OpenWindow["id"]) => {
        setWindowZIndexes((prev) => ({
            ...prev,
            [id]: topZ,
        }));

        setTopZ((prev) => prev + 1)

        setInFocus(id)
    }

  const minimizeWindow = (id: OpenWindow["id"]) => {

  }

  return (
    <div className='app'>
    <Desktop
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      inFocus={inFocus}
      windowZIndexes={windowZIndexes}
      bringToFront={bringToFront}
    />
    <Taskbar
      openWindows={openWindows}
      inFocus={inFocus}
      bringToFront={bringToFront}
    />
    </div>
  )
}

export default App
