import './App.css'
import { Desktop } from './components/desktop/desktop'
import { Taskbar } from './components/taskbar'

function App() {

  return (
    <div className='app'>
    <Desktop />
    <Taskbar />
    </div>
  )
}

export default App
