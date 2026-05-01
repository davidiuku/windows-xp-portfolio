import style from "./taskbar.module.css"
import type { OpenWindow } from "../../types";

type AppBarProps = {
    openWindows: OpenWindow[];
    inFocus: OpenWindow["id"] | null;
    bringToFront: (id: string) => void;
}

export const AppBar = ({ openWindows, inFocus, bringToFront }: AppBarProps) => {
    const handleClick = (item: OpenWindow) => {
        if (!(item.id === inFocus)) {
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
