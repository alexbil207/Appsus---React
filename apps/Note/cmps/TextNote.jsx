

export function TextNote({ note }) {
    return (
        <React.Fragment>
            <textarea id={note.id}>
                {note.text}
            </textarea>
        </React.Fragment>
    )
}
