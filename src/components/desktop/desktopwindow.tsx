import style from "./desktopwindow..module.css"
import Minimize from "../../assets/Minimize.png"
import Maximize from "../../assets/Maximize.png"
import Exit from "../../assets/Exit.png"
import Back from "../../assets/Back.png"
import Forward from "../../assets/Forward.png"
import Search from "../../assets/Search.png"
import Up from "../../assets/Up.png"
import FolderView from "../../assets/FolderView.png"
import IconView from "../../assets/IconView.png"
import startlogo from "../../assets/startlogo.png"
import Go from "../../assets/Go.png"

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
    };
    onClose: () => void;
};

export const DesktopWindow = ({ item, onClose }: Props) => {
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClose();
    }

    return (
        <div className={style.window}>
            <div className={style.titleBar}>
                <div>
                    <img src={item.icon} alt={item.label} />
                </div>
                <span>{item.label}</span>
                <div className={style.titleControls}>
                    <button className={style.titleButton}>
                        <img src={Minimize} alt="Minimize"/>
                    </button>
                    <button className={style.titleButton}>
                        <img src={Maximize} alt="Maximize"/>
                    </button>
                    <button className={style.titleButton} onClick={handleClose}>
                        <img src={Exit} alt="Exit"/>
                    </button>
                </div>
            </div>
            <div className={style.windowBody}>
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
                    <img src={startlogo} alt="Windows Logo" />
                </div>
                <div className={style.toolBar}>
                    <div className={style.group}>
                        <button>
                            <img src={Back} alt="Back Button"/>
                            <span>Back</span>
                            <span className={style.arrowDivider}></span>
                            <span className={style.arrow}></span>
                        </button>
                        <button>
                            <img src={Forward} alt="Forward Button"/>
                            <span className={style.arrowDivider}></span>
                            <span className={style.arrow}></span>
                        </button>
                        <button>
                            <img src={Up} alt="Up Button"/>
                        </button>
                    </div>
                    <div className={style.groupDivider}></div>
                    <div className={style.group}>
                        <button>
                            <img src={Search} />
                            <span>Search</span>
                        </button>
                        <button>
                            <img src={FolderView} alt="Folder View Button"/>
                            <span>Folders</span>
                        </button>
                    </div>
                    <div className={style.groupDivider}></div>
                    <button>
                        <img src={IconView} alt="Icon View Button" />
                        <span className={style.arrowDivider}></span>
                        <span className={style.arrow}></span>
                    </button>
                </div>
                <div className={style.addressBar}>
                    <span>Address</span>
                    <div className={style.pathField}>
                        <img src={item.icon} alt="File Icon" />
                        <span>{item.label}</span>
                    </div>
                    <div className={style.goArea}>
                        <img src={Go} alt="Go Button" />
                        <span>Go</span>
                    </div>
                </div>
                <div className={style.contentArea}>
                    <div className={style.sideBar}>
                        sidebar
                    </div>
                    <div className={style.mainPane}>
                        mainPane
                    </div>
                </div>
            </div>
        </div>

    );
};
