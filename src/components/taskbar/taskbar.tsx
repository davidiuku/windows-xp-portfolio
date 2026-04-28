import { AppBar } from "./appbar"
import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray"
import style from "./taskbar.module.css"
import type { OpenWindow } from "../../types"
import type { Dispatch, SetStateAction } from "react"

type TaskbarProps = {
    openWindows: OpenWindow[];
    setOpenWindows: Dispatch<SetStateAction<OpenWindow[]>>
    inFocus: OpenWindow["id"] | null;
    setInFocus: Dispatch<SetStateAction<OpenWindow["id"] | null>>;
}

export const Taskbar = ({ openWindows, setOpenWindows, inFocus, setInFocus}: TaskbarProps) => {
    return (
        <div className={style.taskbar}>
            <StartButton />
            <AppBar
                openWindows={openWindows}
                setOpenWindows={setOpenWindows}
                inFocus={inFocus}
                setInFocus={setInFocus}
            />
            <SystemTray />
        </div>
    )
}
