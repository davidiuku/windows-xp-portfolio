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

    setTopZ((prev) => prev + 1);

    setInFocus(id);
  };

  const minimizeWindow = (id: OpenWindow["id"]) => {
    setOpenWindows(prev =>
      prev.map(window => {
        if (window.id === id) {
          return {
            ...window,
            isMinimized: true,
          };
        } else {
          return window;
        }
      })
     );
     
     if (inFocus === id) {
            setInFocus(null)
          }
  };

  const restoreWindow = (id: OpenWindow["id"]) => {
    setOpenWindows(prev =>
      prev.map(window => {
        if (window.id === id) {
          return {
            ...window,
            isMinimized: false,
          };
        } else {
          return window
        }
      })
    );
  }

  return (
    <div className='app'>
    <Desktop
      openWindows={openWindows}
      setOpenWindows={setOpenWindows}
      inFocus={inFocus}
      windowZIndexes={windowZIndexes}
      bringToFront={bringToFront}
      minimizeWindow={minimizeWindow}
    />
    <Taskbar
      openWindows={openWindows}
      inFocus={inFocus}
      setInFocus={setInFocus}
      bringToFront={bringToFront}
      minimizeWindow={minimizeWindow}
      restoreWindow={restoreWindow}
    />
    </div>
  )
}

export default App
