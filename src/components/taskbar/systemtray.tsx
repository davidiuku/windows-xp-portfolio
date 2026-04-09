import { Clock } from '../clock/clock'
import Volume from '../../assets/volume.png'
import Security from '../../assets/security.png'
import style from './taskbar.module.css'

export const SystemTray = () => {
    return (
        <div className={style.systemtray}>
            <img src={Volume} className={style.tray_icon} alt='Volume' draggable='false' />
            <img src={Security} className={style.tray_icon} alt='Security' draggable='false' />
            <Clock />
        </div>
    )
}
