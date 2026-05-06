import style from "./desktop-icon.module.css"

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
    };
    isSelected: boolean;
    onClick: () => void;
    onDoubleClick: () => void;
};

export const DesktopIcon = ({ item, isSelected, onClick, onDoubleClick }: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        onClick();
    }

    const handleDoubleClick = () => {
        onDoubleClick();
    };


    return (
        <div className={style.icon} onClick={handleClick} onDoubleClick={handleDoubleClick}>
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
