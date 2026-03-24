import { AppBar } from "./appbar"
import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray"

export const Taskbar = () => {
    return (
        <div className="taskbar">
            <StartButton />
            <AppBar />
            <SystemTray />
        </div>
    )
}
