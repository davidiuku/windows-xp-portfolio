import { StartLogoIcon } from "../../assets";
import style from "./taskbar.module.css"

export const StartButton = () => {
    return (
        <button className={style.startbutton}>
            <img src={StartLogoIcon} width='20' alt='WindowsLogo' draggable='false' />
            start
        </button>
    )
};
