import { useState } from "react";
import MyComputer from "../../assets/mycomputer.png"
import RecycleBinEmpty from "../../assets/recyclebinempty.png"
import style from "./desktop.module.css"
import { DesktopIcon } from "./desktopicon"


const desktopItems = [
    { id: "my-computer", label: "My Computer", icon: MyComputer },
    { id: "recycle-bin", label: "Recycle Bin", icon: RecycleBinEmpty },
];

export const Desktop = () => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null)

    return (
        <div className={style.desktop}>
            {desktopItems.map(item => (
                <DesktopIcon
                    key={item.id}
                    item={item}
                    isSelected={selectedId === item.id}
                    onClick={() => setSelectedId(item.id)}
                />
            ))}
        </div>
    );
};
