import style from "./desktop-icon.module.css";

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
        position: {
            x: number;
            y: number;
        };
    };
    isSelected: boolean;
    onClick: () => void;
    onMouseDown: (event:React.MouseEvent<HTMLDivElement>) => void;
    onDoubleClick: () => void;
};

export const DesktopIcon = ({ item, isSelected, onClick, onMouseDown, onDoubleClick }: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        onClick();
    };

    const handleDoubleClick = () => {
        onDoubleClick();
    };

    return (
        <div
            className={style.icon}
            style={{
                left: item.position.x,
                top: item.position.y,
            }}
            onMouseDown={onMouseDown}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}

        >
            <div
                className={`${style.iconImage} ${isSelected ? style.iconImageSelected : ""}`}
                style={{ "--icon-url": `url(${item.icon})` } as React.CSSProperties}
            >
                <img src={item.icon} alt={item.label} />
            </div>
            <span className={`${style.label} ${isSelected ? style.labelSelected : ""}`}>{item.label}</span>
        </div>
    );
};
