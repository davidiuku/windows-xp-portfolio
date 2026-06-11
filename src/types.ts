export type FileType = "folder" | "text" | "image" | "link" | "download";

export type FileSystemItem = {
    id: string;
    label: string;
    icon: string;
    type: FileType;
    content?: string;
    href?: string;
    downloadName?: string;
    src?: string;
    children?: FileSystemItem[];
}

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
    href?: string;
    src?: string;
    children?: FileSystemItem[];
};
