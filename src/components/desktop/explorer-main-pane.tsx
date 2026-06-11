import style from "./explorer-main-pane.module.css";
import type { FileSystemItem } from "../../types";
import type { Dispatch, SetStateAction, CSSProperties } from "react";

type ExplorerMainPaneProps = {
    items: FileSystemItem[];
    selectedId: string | null;
    setSelectedId: Dispatch<SetStateAction<string | null>>;
    onDoubleClick: (item: FileSystemItem) => void;
};

export function ExplorerMainPane({ items, selectedId, setSelectedId, onDoubleClick }: ExplorerMainPaneProps) {

    return (
        <div className={style.mainPane} onClick={()=> {setSelectedId(null); }}>
            {items.map(item => (
                <button
                    key={item.id}
                    className={style.itemButton}
                    onClick={(event)=> {
                        event.stopPropagation();
                        setSelectedId(item.id);
                    }}
                    onDoubleClick={(event) => {
                        event.stopPropagation();
                        onDoubleClick(item)
                    }}
                >
                    <span
                        className={`${style.iconImage} ${selectedId === item.id ? style.iconImageSelected : ""}`}
                        style={{ "--icon-url": `url(${item.icon})` } as CSSProperties}
                    >
                        <img src={item.icon} alt={item.label} />
                    </span>
                    <span className={`${selectedId === item.id ? style.itemLabelSelected : ""}`}>{item.label}</span>
                </button>
            ))}
        </div>
    );
}
