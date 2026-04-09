import { AppBar } from "./appbar"
import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray"
import style from "./taskbar.module.css"

export const Taskbar = () => {
    return (
        <div className={style.taskbar}>
            <StartButton />
            <AppBar />
            <SystemTray />
        </div>
    )
}
