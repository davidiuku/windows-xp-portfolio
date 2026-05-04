import { useState, type Dispatch, type SetStateAction } from "react";
import MyComputer from "../../assets/mycomputer.png"
import RecycleBinEmpty from "../../assets/recyclebinempty.png"
import style from "./desktop.module.css"
import { DesktopIcon } from "./desktopicon"
import { DesktopWindow } from "./desktopwindow";
import type { OpenWindow } from "../../types";

type DesktopProps = {
    openWindows: OpenWindow[];
    setOpenWindows: Dispatch<SetStateAction<OpenWindow[]>>;
    inFocus: OpenWindow["id"] | null;
    windowZIndexes: Record<string, number>;
    bringToFront: (id: OpenWindow["id"]) => void;
    minimizeWindow: (id: OpenWindow["id"]) => void;
}

type DesktopItems = {
    id: string;
    label: string;
    icon: string;
};

const desktopItems = [
    { id: "my-computer", label: "My Computer", icon: MyComputer},
    { id: "recycle-bin", label: "Recycle Bin", icon: RecycleBinEmpty},
];



export const Desktop = ({ openWindows, setOpenWindows, inFocus, windowZIndexes, bringToFront, minimizeWindow }: DesktopProps) => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null)

    const getCenteredPosition = () => {
        const DEFAULT_WINDOW_WIDTH = 600;
        const DEFAULT_WINDOW_HEIGHT = 400;
        const TASKBAR_HEIGHT = 30;

        const centeredX = (window.innerWidth - DEFAULT_WINDOW_WIDTH) / 2
        const centeredY = (window.innerHeight - TASKBAR_HEIGHT - DEFAULT_WINDOW_HEIGHT) / 2

        return {
            x: Math.max(0, centeredX),
            y: Math.max(0, centeredY)
        }
    }

    const handleOpenWindow = (item : DesktopItems) => {
        const alreadyOpen = openWindows.some(openWindow => openWindow.id === item.id)

        if (!alreadyOpen) {
            const newWindow = {
                ...item,
                isMinimized: false,
                position: getCenteredPosition(),
                size: {
                    width: 650,
                    height: 550,
                }
            };

            setOpenWindows(prev => [...prev, newWindow])
        }

        bringToFront(item.id)
    }

    const handleCloseWindow = (item : DesktopItems) => {
        setOpenWindows(prev => prev.filter(window => window.id !== item.id))
    }

    const updateWindowPosition = (id: OpenWindow["id"], position: OpenWindow["position"]) => {
        setOpenWindows(prev => prev.map(openWindow => {
            if (openWindow.id === id) {
                return {
                    ...openWindow,
                    position: position
                }
            }
            return openWindow
        }))
    }

    const updateWindowSize = (id: OpenWindow["id"], size: OpenWindow["size"]) => {
        setOpenWindows(prev => prev.map(openWindow => {
            if (openWindow.id === id) {
                return {
                    ...openWindow,
                    size: size
                };
            };
            return openWindow
        }))
    }

    return (
        <div
            className={style.desktop}
            onClick={() => {
                setSelectedId(null)
            }}
        >
            {desktopItems.map(item => (
                <DesktopIcon
                    key={item.id}
                    item={item}
                    isSelected={selectedId === item.id}
                    onClick={() => setSelectedId(item.id)}
                    onDoubleClick={() => handleOpenWindow(item)}
                />
            ))}
            {openWindows.filter(openWindow => !openWindow.isMinimized).map(item => (
                <DesktopWindow
                    key={item.id}
                    item={item}
                    onClose={() => handleCloseWindow(item)}
                    zIndex={windowZIndexes[item.id] ?? 1}
                    onFocus={() => bringToFront(item.id)}
                    inFocus={item.id === inFocus}
                    onMinimize={() => minimizeWindow(item.id)}
                    updateWindowPosition={updateWindowPosition}
                    updateWindowSize={updateWindowSize}
                />
            ))}
        </div>
    );
};
