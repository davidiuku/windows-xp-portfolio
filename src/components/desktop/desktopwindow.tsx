import style from "./desktopwindow..module.css"
import Minimize from "../../assets/Minimize.png"
import Maximize from "../../assets/Maximize.png"
import Exit from "../../assets/Exit.png"

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
                <div
                    style={{ "--icon-url": `url(${item.icon})` } as React.CSSProperties}
                >
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
                    File Edit View Favorites Tools Help
                </div>
                <div className={style.toolBar}>
                    {"<-"} Back {"->"} Search Folders
                </div>
                <div className={style.addressBar}>
                    Address
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
