import type { FileSystemItem } from "../types";
import { LocalDiskIcon, CdrwIcon, Folder, URL, JPG, Roamio001, Roamio004, Roamio003, Roamio002, WindowsScreenshot } from "../assets";
import { resumeText } from "../data/resumeText";
import resumePdf from "../assets/David-Iukuridze-Resume.pdf"
import { MyComputerIcon, Pdf, RecycleBinEmptyIcon, TextDocumentIcon } from "../assets";
import { roamioReadmeText } from "./roamioReadmeText";
import { windowsXpReadmeText } from "./windowsXpReadmeText";


export type DesktopItem = FileSystemItem & {
    position: {
        x: number;
        y: number;
    }
};

export const initialDesktopItems: DesktopItem[] = [
    {
        id: "my-computer",
        label: "My Computer",
        icon: MyComputerIcon,
        position: { x: 8, y: 10 },
        type: "folder",
        children: [
            { id: "c", label: "Local Disk (C:)", icon: LocalDiskIcon, type: "folder", },
            { id: "d", label: "Local Disk (D:)", icon: LocalDiskIcon, type: "folder", },
            { id: "e", label: "CD Drive (E:)", icon: CdrwIcon, type: "folder", }
        ]
    },
    {
        id: "recycle-bin",
        label: "Recycle Bin",
        icon: RecycleBinEmptyIcon,
        position: { x: 8, y: 88 },
        type: "folder",
    },
    {
        id: "text-document",
        label: "David's Resume.txt",
        icon: TextDocumentIcon,
        position: { x: 8, y: 166 },
        type: "text",
        content: resumeText
    },
    {
        id: "resume-pdf",
        label: "David's Resume.pdf",
        icon: Pdf,
        position: { x: 8, y: 244 },
        type: "download",
        href: resumePdf,
        downloadName: "David-Iukuridze-Resume.pdf",
    },
    {
        id: "roamio",
        label: "Project: Roamio",
        icon: Folder,
        position: { x: 8, y: 322 },
        type: "folder",
        children: [
            {
                id: "roamio-readme",
                label: "README.txt",
                icon: TextDocumentIcon,
                type: "text",
                content: roamioReadmeText,
            },
            {
                id: "roamio-gitlab",
                label: "GitLab.url",
                icon: URL,
                type: "link",
                href: "https://gitlab.com/man-down/roamio",
            },
            {
                id: "roamio-screenshot-1",
                label: "Screenshot001.png",
                icon: JPG,
                type: "image",
                src: Roamio001,
            },
            {
                id: "roamio-screenshot-2",
                label: "Screenshot002.png",
                icon: JPG,
                type: "image",
                src: Roamio002,
            },
            {
                id: "roamio-screenshot-3",
                label: "Screenshot003.png",
                icon: JPG,
                type: "image",
                src: Roamio003,
            },
            {
                id: "roamio-screenshot-4",
                label: "Screenshot004.png",
                icon: JPG,
                type: "image",
                src: Roamio004,
            },
        ],
    },
    {
        id: "windows-xp-portfolio",
        label: "Windows XP Portfolio",
        icon: Folder,
        position: { x: 8, y: 400 },
        type: "folder",
        children: [
            {
                id: "windows-xp-readme",
                label: "README.txt",
                icon: TextDocumentIcon,
                type: "text",
                content: windowsXpReadmeText
            },
            {
                id: "windows-xp-github",
                label: "GitHub.url",
                icon: URL,
                type: "link",
                href: "https://github.com/davidiuku/windows-xp-portfolio",
            },
            {
                id: "windows-xp-screenshot",
                label: "Screenshot.jpg",
                icon: JPG,
                type: "image",
                src: WindowsScreenshot,
            },
        ],
    },
];
