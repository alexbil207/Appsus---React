import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, removeNote, pinNote }) {
    return (
        <div className="note-list container">
            { notes.map(note => <NotePreview note={note} key={note.id} removeNote={removeNote} pinNote={pinNote} />)}
        </div>
    )
}
