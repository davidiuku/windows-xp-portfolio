export type OpenWindow = {
    id: string;
    label: string;
    icon: string;
    isMinimized: boolean;
    isMaximized: boolean;
    position: {
        x: number,
        y: number
    };
    size: {
        width: number,
        height: number
    };
};
