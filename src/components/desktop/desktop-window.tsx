import style from "./desktop-window.module.css";
import { LocalDiskIcon, CdrwIcon } from "../../assets";
import { useEffect, useState, useRef } from "react";
import { Resizable } from "re-resizable";
import type { OpenWindow } from "../../types";
import { ExplorerMainPane } from "./explorer-main-pane";
import { ExplorerSideBar } from "./explorer-side-bar";
import { ExplorerHeader } from "./explorer-header";
import { WindowTitleBar } from "./window-title-bar";

type Props = {
    item: OpenWindow;
    onClose: () => void;
    zIndex: number;
    onFocus: () => void;
    inFocus: boolean;
    onMinimize: () => void;
    onToggleMaximize: () => void;
    updateWindowPosition: (id: OpenWindow["id"], position: OpenWindow["position"]) => void;
    updateWindowSize: (id: OpenWindow["id"], size: OpenWindow["size"]) => void;
};

const drives = [
    { id: "c", label: "Local Disk (C:)", icon: LocalDiskIcon },
    { id: "d", label: "Local Disk (D:)", icon: LocalDiskIcon },
    { id: "e", label: "CD Drive (E:)", icon: CdrwIcon }
];

export const DesktopWindow = ({ item, onClose, zIndex, onFocus, inFocus, onMinimize, onToggleMaximize, updateWindowPosition, updateWindowSize }: Props) => {
    const [ selectedId, setSelectedId ] = useState<string | null>(null);

    const windowRef = useRef<HTMLDivElement>(null);
    const titleBarRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0});

    useEffect(() => {
        if (!windowRef.current || !titleBarRef.current) return;

        const titleBar = titleBarRef.current;
        const windowElement = windowRef.current;

        const onMouseDown = (event:MouseEvent) => {
            if (item.isMaximized) return;

            event.stopPropagation();
            event.preventDefault();

            const rect = windowElement.getBoundingClientRect();
            if (!rect) return;

            isDragging.current = true;
            dragOffset.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        };

        const onMouseMove = (event: MouseEvent) => {
            if (!isDragging.current) return;

            updateWindowPosition(
                item.id,
                {x: event.clientX - dragOffset.current.x, y: event.clientY - dragOffset.current.y}
            );
        };

        const onMouseUp = () => {
            isDragging.current = false;
        };

        titleBar.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);


        const cleanup = () => {
            titleBar.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        return cleanup;
    }, [item.id, item.isMaximized, updateWindowPosition]);

    const resizeStartPosition = useRef({ x: 0, y: 0 });

    const taskbarHeight = 30;

    const displaySize = item.isMaximized
        ? { width: innerWidth, height: innerHeight - taskbarHeight }
        : item.size;

    const displayPosition = item.isMaximized
        ? { x: 0, y: 0 }
        : item.position;

    return (
        <div
            ref={windowRef}
            className={`
                ${style.window}
                ${inFocus ? style.focused : style.unfocused}
                ${item.isMaximized ? style.maximized : ""}
            `}
            style={{ left: `${displayPosition.x}px`, top: `${displayPosition.y}px`, zIndex: zIndex }}
            onMouseDown={onFocus}
        >
            <Resizable
                size={displaySize}
                minWidth={600}
                minHeight={400}
                enable={item.isMaximized ? false : undefined}
                onResizeStart={() => {
                    if (!windowRef.current || item.isMaximized) return;

                    const rect = windowRef.current.getBoundingClientRect();

                    resizeStartPosition.current = {
                        x: rect.left,
                        y: rect.top
                    };
                }}
                onResize={(_, direction, __, delta) => {
                    const resizeDirection = direction.toLowerCase();

                    const isLeft = resizeDirection.includes("left");
                    const isTop = resizeDirection.includes("top");

                    if (windowRef.current) {
                        if (isLeft) {
                            windowRef.current.style.left =
                                `${resizeStartPosition.current.x - delta.width}px`;
                        }
                        if (isTop) {
                            windowRef.current.style.top =
                                `${resizeStartPosition.current.y - delta.height}px`;
                        }
                    }
                }}
                onResizeStop={(_, direction, ref, delta) => {
                    const resizeDirection = direction.toLowerCase();

                    const isLeft = resizeDirection.includes("left");
                    const isTop = resizeDirection.includes("top");

                    updateWindowPosition(item.id, {
                        x: isLeft
                            ? resizeStartPosition.current.x - delta.width
                            : item.position.x,

                        y: isTop
                            ? resizeStartPosition.current.y - delta.height
                            : item.position.y
                    });

                    updateWindowSize(item.id, {
                        width: ref.offsetWidth,
                        height: ref.offsetHeight
                    });
                }}
            >
                <div className={style.windowInner}>
                    <WindowTitleBar
                        titleBarRef={titleBarRef}
                        inFocus={inFocus}
                        icon={item.icon}
                        label={item.label}
                        isMaximized={item.isMaximized}
                        onClose={onClose}
                        onMinimize={onMinimize}
                        onToggleMaximize={onToggleMaximize}
                    />
                    <div className={style.windowBody}>
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
                    </div>
                </div>
            </Resizable>
        </div>
    );
};
