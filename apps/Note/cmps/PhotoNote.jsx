
export function PhotoNote({ note }) {
    return (
        <React.Fragment>
            <img id={note.id} src={note.url} />
            <p>{note.txt}</p>
        </React.Fragment>
    )
}
