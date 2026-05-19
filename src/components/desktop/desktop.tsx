import { useState, type Dispatch, type SetStateAction } from "react";
import { MyComputerIcon, RecycleBinEmptyIcon, TextDocumentIcon } from "../../assets";
import style from "./desktop.module.css";
import { DesktopIcon } from "./desktop-icon";
import { DesktopWindow } from "./desktop-window";
import type { OpenWindow } from "../../types";

type DesktopProps = {
    openWindows: OpenWindow[];
    setOpenWindows: Dispatch<SetStateAction<OpenWindow[]>>;
    inFocus: OpenWindow["id"] | null;
    windowZIndexes: Record<string, number>;
    bringToFront: (id: OpenWindow["id"]) => void;
    minimizeWindow: (id: OpenWindow["id"]) => void;
};

type DesktopItem = {
    id: string;
    label: string;
    icon: string;
    position: {
        x: number;
        y: number;
    }
};

const initialDesktopItems: DesktopItem[] = [
    {
        id: "my-computer",
        label: "My Computer",
        icon: MyComputerIcon,
        position: { x: 8, y: 10 },
    },
    {
        id: "recycle-bin",
        label: "Recycle Bin",
        icon: RecycleBinEmptyIcon,
        position: { x: 8, y: 88 },
    },
    {
        id: "text-document",
        label: "David's Resume",
        icon: TextDocumentIcon,
        position: { x: 8, y: 166 },
    }
];

const GRID_START_X = 8;
const GRID_START_Y = 10;

const GRID_CELL_WIDTH = 82;
const GRID_CELL_HEIGHT = 78;

export const Desktop = ({ openWindows, setOpenWindows, inFocus, windowZIndexes, bringToFront, minimizeWindow }: DesktopProps) => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null);
    const [ desktopItems, setDesktopItems ] = useState<DesktopItem[]>(initialDesktopItems);
    const [ draggingIcon, setDraggingIcon ] = useState<null | {
        id: string;
        startMouseX: number;
        startMouseY: number;
        startIconX: number;
        startIconY: number;
    }>(null);

    const snapToGrid = ( x: number, y: number ) => {
        const snappedX = Math.round((x - GRID_START_X) / GRID_CELL_WIDTH) * GRID_CELL_WIDTH + GRID_START_X;
        const snappedY = Math.round((y - GRID_START_Y) / GRID_CELL_HEIGHT) * GRID_CELL_HEIGHT + GRID_START_Y;

        return {
            x: Math.max(GRID_START_X, snappedX),
            y: Math.max(GRID_START_Y, snappedY),
        };
    };

    const handleIconMouseDown = (
        event: React.MouseEvent<HTMLDivElement>,
        item: DesktopItem
    ) => {
        event.stopPropagation();

        setSelectedId(item.id);

        setDraggingIcon({
            id: item.id,
            startMouseX: event.clientX,
            startMouseY: event.clientY,
            startIconX: item.position.x,
            startIconY: item.position.y,
        })
    }

    const handleMouseMove = (event:React.MouseEvent<HTMLDivElement>) => {
        if (!draggingIcon) return;

        const deltaX = event.clientX - draggingIcon.startMouseX;
        const deltaY = event.clientY - draggingIcon.startMouseY;

        setDesktopItems(prev =>
            prev.map(icon => {
                if (icon.id !== draggingIcon.id) return icon;

                return {
                    ...icon,
                    position: {
                        x: draggingIcon.startIconX + deltaX,
                        y: draggingIcon.startIconY + deltaY,
                    },
                };
            })
        );
    };

    const handleMouseUp = () => {
        if (!draggingIcon) return;

        setDesktopItems(prev =>
            prev.map(icon => {
                if (icon.id !== draggingIcon.id) return icon;

                const snappedPosition = snapToGrid( icon.position.x, icon.position.y )
                const positionTaken = prev.some(otherIcon =>
                    otherIcon.position.x === snappedPosition.x &&
                    otherIcon.position.y === snappedPosition.y
                );

                return {
                    ...icon,
                    position: positionTaken ? { x: draggingIcon.startIconX, y: draggingIcon.startIconY} : snappedPosition
                };
            })
        );

        setDraggingIcon(null);
    };

    const getStartingPosition = () => {
        const DEFAULT_WINDOW_WIDTH = 650;
        const DEFAULT_WINDOW_HEIGHT = 550;
        const TASKBAR_HEIGHT = 30;

        const centeredX = (window.innerWidth - DEFAULT_WINDOW_WIDTH) / 2;
        const centeredY = (window.innerHeight - TASKBAR_HEIGHT - DEFAULT_WINDOW_HEIGHT) / 2;

        let startingPosition = {
            x: Math.max(0, centeredX),
            y: Math.max(0, centeredY)
        };

        while (
            openWindows.some(openWindow =>
                openWindow.position.x === startingPosition.x &&
                openWindow.position.y === startingPosition.y
            )
        ) {
            startingPosition = {
                x: startingPosition.x + 30 ,
                y: startingPosition.y + 30
            };
        }

        return startingPosition;
    };

    const handleOpenWindow = (item : DesktopItem) => {
        const alreadyOpen = openWindows.some(openWindow => openWindow.id === item.id);

        if (!alreadyOpen) {
            const newWindow = {
                ...item,
                isMinimized: false,
                isMaximized: false,
                position: getStartingPosition(),
                size: {
                    width: 650,
                    height: 550,
                }
            };
            setOpenWindows(prev => [...prev, newWindow]);
        }
        bringToFront(item.id);
    };

    const handleCloseWindow = (item : DesktopItem) => {
        setOpenWindows(prev => prev.filter(window => window.id !== item.id));
    };

    const updateWindowPosition = (id: OpenWindow["id"], position: OpenWindow["position"]) => {
        setOpenWindows(prev => prev.map(openWindow => {
            if (openWindow.id === id) {
                return {
                    ...openWindow,
                    position
                };
            }
            return openWindow;
        }));
    };

    const updateWindowSize = (id: OpenWindow["id"], size: OpenWindow["size"]) => {
        setOpenWindows(prev => prev.map(openWindow => {
            if (openWindow.id === id) {
                return {
                    ...openWindow,
                    size
                };
            }
            return openWindow;
        }));
    };

    const toggleMaximizeWindow = (id: OpenWindow["id"]) => {
        setOpenWindows(prev => prev.map(window => {
            if (window.id === id) {
                return {
                    ...window,
                    isMaximized: !window.isMaximized
                };
            }
            return window;
        }));
    };

    return (
        <div
            className={style.desktop}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={() => {
                setSelectedId(null);
            }}
        >
            {desktopItems.map(item => (
                <DesktopIcon
                    key={item.id}
                    item={item}
                    isSelected={selectedId === item.id}
                    onClick={() => setSelectedId(item.id)}
                    onMouseDown={(event) => handleIconMouseDown(event, item)}
                    onDoubleClick={() => handleOpenWindow(item)}
                />
            ))}
            {openWindows.filter(openWindow => !openWindow.isMinimized).map(item => (
                <DesktopWindow
                    key={item.id}
                    item={item}
                    onClose={() => handleCloseWindow(item)}
                    zIndex={windowZIndexes[item.id] ?? 1}
                    onFocus={() => bringToFront(item.id)}
                    inFocus={item.id === inFocus}
                    onMinimize={() => minimizeWindow(item.id)}
                    onToggleMaximize={() => toggleMaximizeWindow(item.id)}
                    updateWindowPosition={updateWindowPosition}
                    updateWindowSize={updateWindowSize}
                />
            ))}
        </div>
    );
};
