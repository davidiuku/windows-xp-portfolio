import { Clock } from './clock/clock'
import Volume from '../assets/volume.png'
import Security from '../assets/security.png'

export const SystemTray = () => {
    return (
        <div className='systemtray'>
            <img src={Volume} className='tray_icon' alt='Volume' draggable='false' />
            <img src={Security} className='tray_icon' alt='Security' draggable='false' />
            <Clock />
        </div>
    )
}
