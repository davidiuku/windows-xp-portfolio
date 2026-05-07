import style from "./explorer-header.module.css";
import { StartLogoIcon, BackIcon, ForwardIcon, UpIcon, SearchIcon, FolderViewIcon, IconViewIcon, GoIcon } from "../../assets";
import type { OpenWindow } from "../../types";

type ExplorerHeaderProps = {
    icon:OpenWindow["icon"];
    label:OpenWindow["label"];
};

export function ExplorerHeader({ icon, label }:ExplorerHeaderProps) {

    return (
        <div>
            <div className={style.menuBar}>
                <button>
                    File
                </button>
                <button>
                    Edit
                </button>
                <button>
                    View
                </button>
                <button>
                    Favorites
                </button>
                <button>
                    Tools
                </button>
                <button>
                    Help
                </button>
                <img src={StartLogoIcon} alt="Windows Logo" />
            </div>
            <div className={style.toolBar}>
                <div className={style.group}>
                    <button>
                        <img src={BackIcon} alt="Back Button"/>
                        <span>Back</span>
                        <span className={style.arrowDivider}></span>
                        <span className={style.arrow}></span>
                    </button>
                    <button>
                        <img src={ForwardIcon} alt="Forward Button"/>
                        <span className={style.arrowDivider}></span>
                        <span className={style.arrow}></span>
                    </button>
                    <button>
                        <img src={UpIcon} alt="Up Button"/>
                    </button>
                </div>
                <div className={style.groupDivider}></div>
                <div className={style.group}>
                    <button>
                        <img src={SearchIcon} alt="Search"/>
                        <span>Search</span>
                    </button>
                    <button>
                        <img src={FolderViewIcon} alt="Folder View Button"/>
                        <span>Folders</span>
                    </button>
                </div>
                <div className={style.groupDivider}></div>
                <button>
                    <img src={IconViewIcon} alt="Icon View Button" />
                    <span className={style.arrowDivider}></span>
                    <span className={style.arrow}></span>
                </button>
            </div>
            <div className={style.addressBar}>
                <span>Address</span>
                <div className={style.pathField}>
                    <img src={icon} alt="File Icon" />
                    <span>{label}</span>
                </div>
                <div className={style.goArea}>
                    <img src={GoIcon} alt="Go Button" />
                    <span>Go</span>
                </div>
            </div>
        </div>
    );
}
