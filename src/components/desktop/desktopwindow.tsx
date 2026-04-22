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
import NewFolder from "../../assets/NewFolder.png"
import Rename from "../../assets/Rename.png"
import Delete from "../../assets/Delete.png"
import MyDocuments from "../../assets/MyDocuments.png"
import Desktop from "../../assets/Desktop.png"
import MyComputer from "../../assets/mycomputer.png"
import LocalDisk from "../../assets/LocalDisk.png"
import CDRW from "../../assets/CDRW.png"
import { useEffect, useState, useRef } from "react"

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
    };
    onClose: () => void;
};

export const DesktopWindow = ({ item, onClose }: Props) => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null);
    const [ position, setPosition ] = useState({ x: 800, y: 300 });

    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClose();
    };

    const drives = [
        { id: "c", label: "Local Disk (C:)", icon: LocalDisk },
        { id: "d", label: "Local Disk (D:)", icon: LocalDisk },
        { id: "e", label: "CD Drive (E:)", icon: CDRW }
    ];

    const windowRef = useRef<HTMLDivElement>(null);
    const titleBarRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0});



    useEffect(() => {
        if (!windowRef.current || !titleBarRef.current) return;

        const titleBar = titleBarRef.current;

        const onMouseDown = (event:MouseEvent) => {
            event.preventDefault();

            const rect = windowRef.current?.getBoundingClientRect()
            if (!rect) return;

            isDragging.current = true;
            dragOffset.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        };

        const onMouseMove = (event: MouseEvent) => {
            if (!isDragging.current) return;

            setPosition({
                x: event.clientX - dragOffset.current.x,
                y: event.clientY - dragOffset.current.y
            });
        };

        const onMouseUp = () => {
            isDragging.current = false;
        }

        titleBar.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp);


        const cleanup = () => {
            titleBar.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp);
        }
        return cleanup;
    }, [])


    return (
        <div ref={windowRef} className={style.window} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <div ref={titleBarRef} className={style.titleBar}>
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
                        <div className={style.panel}>
                            <div className={style.panelHeader}>
                                <span>File and Folder Tasks</span>
                                <button className={style.panelToggle} aria-label="Collapse section">
                                    <span className={style.panelToggleArrow}></span>
                                </button>
                            </div>
                            <div className={style.panelBody}>
                                <button className={style.panelItem}>
                                    <img src={NewFolder} alt="Create New Folder" />
                                    <span>Make a New folder</span>
                                </button>
                                <button className={style.panelItem}>
                                    <img src={Rename} alt="Rename " />
                                    <span>Rename this selection</span>
                                </button>
                                <button className={style.panelItem}>
                                    <img src={Delete} alt="Delete Selection" />
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
                                    <img src={Desktop} alt="Desktop" />
                                    <span>Desktop</span>
                                </button>
                                <button className={style.panelItem}>
                                    <img src={MyDocuments} alt="My Documents" />
                                    <span>My Documents</span>
                                </button>
                                <button className={style.panelItem}>
                                    <img src={MyComputer} alt="My Computer" />
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
                    <div className={style.mainPane} onClick={()=> {setSelectedId(null)}}>
                        {drives.map(drive => (
                            <button
                                key={drive.id}
                                className={style.driveButton}
                                onClick={(event)=> {
                                    event.stopPropagation()
                                    setSelectedId(drive.id)
                                }}
                            >
                                <span
                                    className={`${style.iconImage} ${selectedId === drive.id ? style.iconImageSelected : ""}`}
                                    style={{ "--icon-url": `url(${drive.icon})` } as React.CSSProperties}
                                >
                                    <img src={drive.icon} alt={drive.label} />
                                </span>
                                <span className={`${selectedId === drive.id ? style.driveLabelSelected : ""}`}>{drive.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
