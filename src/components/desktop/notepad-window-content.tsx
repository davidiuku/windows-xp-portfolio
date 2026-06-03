import style from "./notepad-window-content.module.css"

type NotepadWindowContentProps = {
    content: string;
};

export function NotepadWindowContent({ content }: NotepadWindowContentProps) {

    return (
        <div className={style.notepadContent}>
            <div className={style.menuBar}>
                <button type="button">File</button>
                <button type="button">Edit</button>
                <button type="button">Format</button>
                <button type="button">View</button>
                <button type="button">Help</button>
            </div>
            <div className={style.mainPane}>
                <pre className={style.documentText}>{content}</pre>
            </div>
        </div>
    );
};
