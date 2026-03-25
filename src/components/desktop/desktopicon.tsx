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
        <div className={`${style.icon} ${isSelected ? style.selected : ""}`} onClick={onClick}>
            <img src={item.icon} alt={item.label} />
            <span className={`${style.label} ${isSelected ? style.selected : ""}`}>{item.label}</span>
        </div>
    );
};
