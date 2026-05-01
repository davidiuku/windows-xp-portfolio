import { AppBar } from "./appbar"
import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray"
import style from "./taskbar.module.css"
import type { OpenWindow } from "../../types"

type TaskbarProps = {
    openWindows: OpenWindow[];
    inFocus: OpenWindow["id"] | null;
    bringToFront: (id: string) => void;
}

export const Taskbar = ({ openWindows, inFocus, bringToFront }: TaskbarProps) => {
    return (
        <div className={style.taskbar}>
            <StartButton />
            <AppBar
                openWindows={openWindows}
                inFocus={inFocus}
                bringToFront={bringToFront}
            />
            <SystemTray />
        </div>
    )
}
