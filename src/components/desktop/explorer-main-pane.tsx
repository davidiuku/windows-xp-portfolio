import style from "./explorer-main-pane.module.css";

import type { Dispatch, SetStateAction, CSSProperties } from "react";
import type { OpenWindow } from "../../types";

type Drive ={
    id: OpenWindow["id"];
    label: OpenWindow["label"];
    icon: OpenWindow["icon"];
};

type ExplorerMainPaneProps = {
    drives: Drive[];
    selectedId: string | null;
    setSelectedId: Dispatch<SetStateAction<string | null>>;
};

export function ExplorerMainPane({ drives, selectedId, setSelectedId }: ExplorerMainPaneProps) {

    return (
        <div className={style.mainPane} onClick={()=> {setSelectedId(null); }}>
            {drives.map(drive => (
                <button
                    key={drive.id}
                    className={style.driveButton}
                    onClick={(event)=> {
                        event.stopPropagation();
                        setSelectedId(drive.id);
                    }}
                >
                    <span
                        className={`${style.iconImage} ${selectedId === drive.id ? style.iconImageSelected : ""}`}
                        style={{ "--icon-url": `url(${drive.icon})` } as CSSProperties}
                    >
                        <img src={drive.icon} alt={drive.label} />
                    </span>
                    <span className={`${selectedId === drive.id ? style.driveLabelSelected : ""}`}>{drive.label}</span>
                </button>
            ))}
        </div>
    );
}
