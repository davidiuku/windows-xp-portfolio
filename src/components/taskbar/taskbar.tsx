import { AppBar } from "./appbar"
import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray"
import style from "./taskbar.module.css"
import type { OpenWindow } from "../../types"
import type { Dispatch, SetStateAction } from "react"

type TaskbarProps = {
    openWindows: OpenWindow[];
    inFocus: OpenWindow["id"] | null;
    setInFocus: Dispatch<SetStateAction<OpenWindow["id"] | null>>
    bringToFront: (id: OpenWindow["id"]) => void;
    minimizeWindow: (id:OpenWindow["id"]) => void;
    restoreWindow: (id:OpenWindow["id"]) => void;
}

export const Taskbar = ({ openWindows, inFocus, setInFocus, bringToFront, minimizeWindow, restoreWindow }: TaskbarProps) => {
    return (
        <div className={style.taskbar}>
            <StartButton />
            <AppBar
                openWindows={openWindows}
                inFocus={inFocus}
                setInFocus={setInFocus}
                bringToFront={bringToFront}
                minimizeWindow={minimizeWindow}
                restoreWindow={restoreWindow}
            />
            <SystemTray />
        </div>
    )
}
