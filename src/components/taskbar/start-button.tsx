import { StartLogoIcon } from "../../assets";
import style from "./start-button.module.css"

export const StartButton = () => {
    return (
        <button className={style.startButton}>
            <img src={StartLogoIcon} width='20' alt='WindowsLogo' draggable='false' />
            start
        </button>
    )
};
