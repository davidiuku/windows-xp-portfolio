import style from "./app-bar.module.css"
import type { OpenWindow } from "../../types";
import type { Dispatch, SetStateAction } from "react";

type AppBarProps = {
    openWindows: OpenWindow[];
    inFocus: OpenWindow["id"] | null;
    setInFocus: Dispatch<SetStateAction<OpenWindow["id"] | null>>
    bringToFront: (id: OpenWindow["id"]) => void;
    minimizeWindow: (id:OpenWindow["id"]) => void;
    restoreWindow: (id:OpenWindow["id"]) => void;
}

export const AppBar = ({ openWindows, inFocus, setInFocus, bringToFront, minimizeWindow, restoreWindow }: AppBarProps) => {
    const handleClick = (item: OpenWindow) => {
        if (item.isMinimized) {
            restoreWindow(item.id);
            bringToFront(item.id);
        } else if (item.id === inFocus) {
            minimizeWindow(item.id)
            setInFocus(null)
        } else {
            bringToFront(item.id)
        }
    };

    return (
        <div className={style.appbar}>
            {openWindows.map(window => (
                <button
                    className={`${style.openedApp} ${window.id === inFocus ? style.focused : style.unfocused}`}
                    key={window.id}
                    style={{ "--icon-url": `url(${window.icon})`} as React.CSSProperties}
                    onClick={() => handleClick(window)}
                >
                    <img src={window.icon} alt={window.label} />
                    <span>{window.label}</span>
                </button>
            ))}
        </div>
    );
};
