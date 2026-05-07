import style from "./explorer-side-bar.module.css";
import { NewFolderIcon, RenameIcon, DeleteIcon, DesktopAssetIcon, MyDocumentsIcon, MyComputerIcon } from "../../assets";

export function ExplorerSideBar() {

    return (
        <div className={style.sideBar}>
            <div className={style.panel}>
                <div className={style.panelHeader}>
                    <span>File and Folder Tasks</span>
                    <button className={style.panelToggle} aria-label="Collapse section">
                        <span className={style.panelToggleArrow}></span>
                    </button>
                </div>
                <div className={style.panelBody}>
                    <button className={style.panelItem}>
                        <img src={NewFolderIcon} alt="Create New Folder" />
                        <span>Make a New folder</span>
                    </button>
                    <button className={style.panelItem}>
                        <img src={RenameIcon} alt="Rename " />
                        <span>Rename this selection</span>
                    </button>
                    <button className={style.panelItem}>
                        <img src={DeleteIcon} alt="Delete Selection" />
                        <span>Delete this selection</span>
                    </button>
                </div>
            </div>
            <div className={style.panel}>
                <div className={style.panelHeader}>
                    <span>Other Places</span>
                    <button className={style.panelToggle} aria-label="Collapse section">
                        <span className={style.panelToggleArrow}></span>
                    </button>
                </div>
                <div className={style.panelBody}>
                    <button className={style.panelItem}>
                        <img src={DesktopAssetIcon} alt="Desktop" />
                        <span>Desktop</span>
                    </button>
                    <button className={style.panelItem}>
                        <img src={MyDocumentsIcon} alt="My Documents" />
                        <span>My Documents</span>
                    </button>
                    <button className={style.panelItem}>
                        <img src={MyComputerIcon} alt="My Computer" />
                        <span>My Computer</span>
                    </button>
                </div>
            </div>
            <div className={style.panel}>
                <div className={style.panelHeader}>
                    <span>Details</span>
                    <button className={style.panelToggle} aria-label="Collapse section">
                        <span className={style.panelToggleArrow}></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
