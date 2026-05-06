import { Clock } from '../clock/clock'
import { VolumeIcon, SecurityIcon } from "../../assets"
import style from './system-tray.module.css'

export const SystemTray = () => {
    return (
        <div className={style.systemTray}>
            <img src={VolumeIcon} className={style.trayIcon} alt='Volume' draggable='false' />
            <img src={SecurityIcon} className={style.trayIcon} alt='Security' draggable='false' />
            <Clock />
        </div>
    )
}
