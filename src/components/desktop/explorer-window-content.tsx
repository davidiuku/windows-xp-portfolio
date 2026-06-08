import { ExplorerMainPane } from "./explorer-main-pane";
import { ExplorerSideBar } from "./explorer-side-bar";
import { ExplorerHeader } from "./explorer-header";
import type { OpenWindow } from "../../types";
import style from "./explorer-window-content.module.css"
import { LocalDiskIcon, CdrwIcon } from "../../assets";
import { useState } from "react";


type ExplorerWindowContentProps = {
    item: OpenWindow;
};

const drives = [
    { id: "c", label: "Local Disk (C:)", icon: LocalDiskIcon },
    { id: "d", label: "Local Disk (D:)", icon: LocalDiskIcon },
    { id: "e", label: "CD Drive (E:)", icon: CdrwIcon }
];

export function ExplorerWindowContent({ item }: ExplorerWindowContentProps) {
    const [ selectedId, setSelectedId ] = useState<string | null>(null);

    return (
        <>
            <ExplorerHeader
                    icon={item.icon}
                    label={item.label}
            />
                <div className={style.contentArea}>
                    <ExplorerSideBar />
                    <ExplorerMainPane
                        drives={drives}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                </div>
        </>
    );
};
