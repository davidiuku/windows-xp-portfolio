import style from "./window-title-bar.module.css";
import { MinimizeIcon, RestoreIcon, MaximizeIcon, ExitIcon } from "../../assets";
import type { OpenWindow } from "../../types";

type WindowTitleBarProps = {
    titleBarRef: React.RefObject<HTMLDivElement | null>;
    inFocus: boolean;
    icon: OpenWindow["icon"];
    label: OpenWindow["label"];
    isMaximized: OpenWindow["isMaximized"];
    onClose: () => void;
    onMinimize: () => void;
    onToggleMaximize: () => void;
};

export function WindowTitleBar({ titleBarRef, inFocus, icon, label, isMaximized, onClose, onMinimize, onToggleMaximize }:WindowTitleBarProps) {
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClose();
    };

    const handleMinimize = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onMinimize();
    };

    const handleMaximizeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onToggleMaximize();
    };


    return (
        <div
            ref={titleBarRef}
            className={`${style.titleBar} ${inFocus ? style.focused : style.unfocused}`}
        >
            <div>
                <img src={icon} alt={label} />
            </div>
            <span>{label}</span>
            <div className={style.titleControls}>
                <button
                    className={style.titleButton}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={handleMinimize}>
                    <img src={MinimizeIcon} alt="Minimize"/>
                </button>
                <button
                    className={style.titleButton}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={handleMaximizeToggle}
                >
                    <img
                        src={isMaximized ? RestoreIcon : MaximizeIcon}
                        alt={isMaximized ? "Restore" : "Maximize"}
                    />
                </button>
                <button
                    className={style.titleButton} 
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={handleClose}>
                    <img src={ExitIcon} alt="Exit"/>
                </button>
            </div>
        </div>
    );
}
