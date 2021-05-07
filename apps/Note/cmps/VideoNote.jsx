
export function VideoNote({ note }) {
    return (
        <React.Fragment>
            <p className="note-header"><i className="fab fa-youtube fa-2x video-note-icon"></i></p>
            <iframe id={note.id} width="420" height="315"
                src={note.url}>
            </iframe>
            <p>{note.txt}</p>
        </React.Fragment>
    )
}
