
export function PhotoNote({ note }) {
    return (
        <React.Fragment>
            <p><i className="fas fa-image fa-2x photo-note-icon"></i></p>
            <img id={note.id} src={note.url} />
            <p>{note.txt}</p>
        </React.Fragment>
    )
}
