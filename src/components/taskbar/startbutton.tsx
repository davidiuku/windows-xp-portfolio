import StartLogo from '../../assets/startlogo.png'
import style from "./taskbar.module.css"

export const StartButton = () => {
    return (
        <button className={style.startbutton}>
            <img src={StartLogo} width='20' alt='WindowsLogo' draggable='false' />
            start
        </button>
    )
};
