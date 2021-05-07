

export function TextNote({ note }) {
    return (
        <React.Fragment>
            <p className="note-header"><i className="fas fa-font fa-2x text-note-icon"></i></p>
            <h2 id={note.id}>{note.text}</h2>
        </React.Fragment>
    )
}
