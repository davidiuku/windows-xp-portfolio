import { useState } from "react";
import MyComputer from "../../assets/mycomputer.png"
import RecycleBinEmpty from "../../assets/recyclebinempty.png"
import style from "./desktop.module.css"
import { DesktopIcon } from "./desktopicon"
import { DesktopWindow } from "./desktopwindow";

type OpenWindow = {
    id: string;
    label: string;
    icon: string;
}

type DesktopItems = {
    id: string;
    label: string;
    icon: string;
};

const desktopItems = [
    { id: "my-computer", label: "My Computer", icon: MyComputer },
    { id: "recycle-bin", label: "Recycle Bin", icon: RecycleBinEmpty },
];



export const Desktop = () => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null)
    const [ openWindows, setOpenWindows ] = useState<OpenWindow[]>([])
    const [ windowZIndexes, setWindowZIndexes ] = useState<Record<string, number>>({});
    const [ topZ, setTopZ ] = useState(1);
    const [ inFocus, setInFocus ] = useState<OpenWindow["id"] | null>(null)

    const handleOpenWindow = (item : DesktopItems) => {
        const alreadyOpen = openWindows.some(window => window.id === item.id)

        if (!alreadyOpen) {
            setOpenWindows(prev => [...prev, item])
            setInFocus(item.id)
        } else {
            setInFocus(item.id)
            bringToFront(item.id)
        }

    }

    const handleCloseWindow = (item : DesktopItems) => {
        setOpenWindows(prev => prev.filter(window => window.id !== item.id))
    }

    const bringToFront = (id: string) => {
        setWindowZIndexes((prev) => ({
            ...prev,
            [id]: topZ,
        }));

        setTopZ((prev) => prev + 1)

        setInFocus(id)
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
            {openWindows.map(item => (
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
