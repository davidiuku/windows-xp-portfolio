import style from "./desktopwindow..module.css"

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
    };
}

export const DesktopWindow = ({ item }: Props) => {

    return (
        <div className={style.window}>
            <div className={style.titleBar}>
                <div
                    style={{ "--icon-url": `url(${item.icon})` } as React.CSSProperties}
                >
                    <img src={item.icon} alt={item.label} />
                </div>
                <span>{item.label}</span>
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
