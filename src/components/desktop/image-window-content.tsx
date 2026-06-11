import type { FileSystemItem } from "../../types";
import style from "./image-window-content.module.css"

type ImageWindowContentProp = {
    image: FileSystemItem["src"];
    label: FileSystemItem["label"]
}

export function ImageWindowContent({ image, label }: ImageWindowContentProp) {

    return (
        <div className={style.body}>
            <img className={style.image} src={image} alt={label} />
        </div>
    );
};
