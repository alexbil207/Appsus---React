

export function TextNote({ note }) {
    return (
        <React.Fragment>
            <textarea id={note.id} value={note.txt} >
                {note.txt}
            </textarea>
        </React.Fragment>
    )
}
