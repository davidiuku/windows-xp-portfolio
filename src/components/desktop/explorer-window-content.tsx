import { ExplorerMainPane } from "./explorer-main-pane";
import { ExplorerSideBar } from "./explorer-side-bar";
import { ExplorerHeader } from "./explorer-header";
import type { FileSystemItem, OpenWindow } from "../../types";
import style from "./explorer-window-content.module.css"
import { useState } from "react";


type ExplorerWindowContentProps = {
    item: OpenWindow;
    onOpenWindow: (item: FileSystemItem) => void;
};

export function ExplorerWindowContent({ item, onOpenWindow }: ExplorerWindowContentProps) {
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
                        items={item.children ?? []}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        onDoubleClick={onOpenWindow}
                    />
                </div>
        </>
    );
};
