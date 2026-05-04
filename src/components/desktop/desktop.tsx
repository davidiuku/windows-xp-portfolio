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



export const Desktop = ({ openWindows, setOpenWindows, inFocus, windowZIndexes, bringToFront }: DesktopProps) => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null)

    const handleOpenWindow = (item : DesktopItems) => {
        const alreadyOpen = openWindows.some(window => window.id === item.id)

        if (!alreadyOpen) {
            const newWindow = {
                ...item,
                isMinimized: false,
            };

            setOpenWindows(prev => [...prev, newWindow])
        }

        bringToFront(item.id)
    }

    const handleCloseWindow = (item : DesktopItems) => {
        setOpenWindows(prev => prev.filter(window => window.id !== item.id))
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
            {openWindows.filter(window => !window.isMinimized).map(item => (
                <DesktopWindow
                    key={item.id}
                    item={item}
                    onClose={() => handleCloseWindow(item)}
                    zIndex={windowZIndexes[item.id] ?? 1}
                    onFocus={() => bringToFront(item.id)}
                    inFocus={item.id === inFocus}
                />
            ))}
        </div>
    );
};
