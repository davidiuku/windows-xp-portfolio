export type FileType = "folder" | "text" | "image" | "link" | "download";

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
    type: "folder" | "text" | "image" | "link",
    content?: string;
};
