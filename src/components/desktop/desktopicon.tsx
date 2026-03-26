import style from "./desktopicon.module.css"

type Props = {
    item: {
        id: string;
        label: string;
        icon: string;
    };
    isSelected: boolean;
    onClick: () => void;
};

export const DesktopIcon = ({ item, isSelected, onClick }: Props) => {
    return (
        <div className={style.icon} onClick={onClick}>
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
