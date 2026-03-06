import "./Tag.css"

export default function Tag({ text, isSpecial = false }) {

    let classText = "";
    if (isSpecial) {
        classText = "tag-btn special"
    } else {
        classText = "tag-btn"
    }

    return (
        <button className={classText}>
            {text}
        </button>
    )
}