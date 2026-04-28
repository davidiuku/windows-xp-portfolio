import type { Dispatch, SetStateAction } from "react";
import style from "./taskbar.module.css"
import type { OpenWindow } from "../../types";

type AppBarProps = {
    openWindows: OpenWindow[];
    setOpenWindows: Dispatch<SetStateAction<OpenWindow[]>>;
    inFocus: OpenWindow["id"] | null;
    setInFocus: Dispatch<SetStateAction<OpenWindow["id"] | null>>;
}

export const AppBar = ({ openWindows, setOpenWindows, inFocus, setInFocus }: AppBarProps) => {
    return (
        <div className={style.appbar}>
            {openWindows.map(window => (
                <button
                    className={`${style.openedApp} ${window.id === inFocus ? style.focused : style.unfocused}`}
                    key={window.id}
                    style={{ "--icon-url": `url(${window.icon})`} as React.CSSProperties}
                >
                    <img src={window.icon} alt={window.label} />
                    <span>{window.label}</span>
                </button>
            ))}
        </div>
    )
}
